<template>
<section class="main_section">
   <nav class="navbar navbar-default main-menu">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="#" @click="filter_type('0')" >HOME</a></li>
        <li><a href="#" @click="filter_type('2')">WOMEN</a></li>
        <li><a href="#" @click="filter_type('1')">MEN</a></li>
        <li><a href="#" @click="filter_type('3')">SALE</a></li>
        <li><a href="#" @click="filter_type('4')">ACCESSORIES</a></li>
        <li><a href="#" @click="filter_type('5')">VIP</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<div class="main-shopping-cart">
<h3>My commands</h3>
<div class="danger-alert" v-html="error"></div>
<table class="rwd-table">
  <tr>
    <th>Product Image</th>
    <th>Product Name</th>
    <th>Qty</th>
    <th>Price</th>
    <th></th>
    <th>Date</th>
    <th>Total Price</th>
    <th></th>
  </tr>
  <tr v-for="item in commands">
    <td data-th="Product Image" class="article-icon"><img :src="'static/ressources/' + item.Product.image_url" alt=""></td>
    <td data-th="Product Name">
      {{ item.Product.name }}
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle show-options" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Show options
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div>
    </td>
    <td data-th="Qty" class="col-md-1">{{ item.qty }}</td>
    <td data-th="Price">${{ item.Product.price }}</td>
    <td data-th="">=</td>
    <td data-th="">{{ item.createdAt | formatDate}}</td>
    <td data-th="Total Price">${{ item.Product.price * (item.qty > 0 ? item.qty : 0)   }} </td>
  </tr>

  <tr class="update-cart-row">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>   
    <td></td>
    <td></td>
  </tr>
</table>
</div>
</section>
</template>

<script>
import ProductService from '../services/ProductService'

export default {
  data () {
    return {
      commands: [],
      allCommands: [],
      error: null,
    }
  },
  methods: {
    filter_type(type){
      this.commands = [];
      console.log(this.allCommands);
      this.allCommands.forEach(elem => {
        if(elem.Product.category == type)
        {
          this.commands.push(elem);
        }
      });
      if(type == 0)
        this.commands = this.allCommands;
    },
    async fetchCommand(){
        try{
            const response = await ProductService.fetchCommands({id: this.$store.state.user.id});
            this.allCommands = response.data.info;
            this.commands = this.allCommands;
            console.log(this.commands);
        }catch(err){
            swal({
              type: 'error',
              title: 'Oops...',
              text: err
            })
        }
    }
  },
  mounted(){
      this.fetchCommand();
  }
}
</script>