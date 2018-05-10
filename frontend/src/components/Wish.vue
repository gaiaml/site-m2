<template>
<section class="main">
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
<h3>My wishlist</h3>
<div class="danger-alert" v-html="error"></div>
<table class="rwd-table">
  <tr>
    <th>Product Image</th>
    <th>Product Name</th>
    <th>PRICE</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr v-for="item in wish">

    <td data-th="Product Image" class="article-icon"><img :src="'static/ressources/' + item.ProductImages[0].image_url" alt=""></td>
    <td data-th="Product Name">
      {{ item.name }}
    </td>
    <td data-th="Price">${{ item.price }}</td>
    <td data-th="Qty" class="col-md-1"></td>
    <td data-th=""></td>
    <td data-th=""></td>
    <td data-th="Total Price"></td>
    <td><button class="btn btn-danger" @click="remove(item)" >Remove</button></td>
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
      wish: [],
      allWish: [],
      error: null,
    }
  },
  methods: {
    filter_type(type){
      this.wish = [];
      this.allWish.forEach(elem => {
        if(elem.category == type)
        {
          this.wish.push(elem);
        }
      });
      if(type == 0)
        this.wish = this.allWish;
    },
    removeItemWish(wish, item){
      for( var i = wish.length; i--;){
        if ( wish[i] == item)
        {
          wish.splice(i, 1);
        }
        
      }
    },
    fetchWish(){
        this.wish = this.$store.state.wish;
        this.allWish = this.$store.state.wish;
    },
    remove(item){
       this.$store.dispatch('removeItemWish', item);
       this.removeItemWish(this.wish, item);
       
    }
  },
  mounted(){
      this.fetchWish();
  }
}
</script>