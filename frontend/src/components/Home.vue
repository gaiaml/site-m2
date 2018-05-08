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
<h3>Products</h3>
<table class="rwd-table">
  <tr>
    <th>Product Image</th>
    <th>Product Name</th>
    <th>Qty</th>
    <th>Price</th>
    <th></th>
    <th>Total Price</th>
  </tr>
  
  <tr v-for="item in products">
    <td data-th="Product Image" class="article-icon"><img :src="'static/ressources/' + item.image_url" alt=""></td>
    <td data-th="Product Name">
      {{ item.name }}
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle show-options" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Show options
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a href="#" @click="addToWish(item)" >Add to wishlist </a></li>
          <li><a href="#" @click="addToCart(item)" >Add to cart </a></li>
        </ul>
      </div>
    </td>
    <td data-th="Qty" class="col-md-1"><input type="number" min="0" style="width: 33%" v-model="item.qty"></td>
    <td data-th="Price">${{ item.price }}</td>
    <td data-th="">=</td>
    <td data-th="Total Price">${{ item.price * (item.qty > 0 ? item.qty : 0)   }} </td>
  </tr>

  <tr class="update-cart-row">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><span class="btn btn-black" @click="addToCarts()">UPDATE SHOPPING CART</span></td>
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
      carts: [],
      newCart: null,
      visibility: 'all',
      error: null,
      products: [],
      allProducts: []
    }
  },
  methods: {

    filter_type(type){
      this.products = [];
      this.allProducts.forEach(elem => {
        if(elem.category == type)
        {
          this.products.push(elem);
        }
      });
      if(type == 0)
        this.products = this.allProducts;
    },
    filter_search(search){
      this.products = [];
      this.allProducts.forEach(elem => {
        if(elem.name.toUpperCase().includes(search.toUpperCase()))
        {
          this.products.push(elem);
        }
      });
      if(search == '')
        this.products = this.allProducts;
    },
    containsObject(obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
          if (list[i].name == obj.name) {
              return true;
          }
      }

      return false;
    },
    getIdObject(obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
          if (list[i].name == obj.name) {
              return i;
          }
      }

      return 0;
    },
    addToCart(item){
      if(item.qty > 0)
      {
        for( var i = this.carts.length; i--;){
          if ( this.carts[i].name == item.name)
          {
            this.carts.splice(i, 1);
          }         
        }
        this.carts.push(item);

        this.$store.dispatch('setCarts', this.carts);
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Your shopping cart has been updated !',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else
      {
         swal({
          type: 'error',
          title: 'Oops...',
          text: 'You have selected 0 quantity'
        });
      }
    },
    addToCarts(){
      this.carts = [];
      var total = 0;
      this.allProducts.filter((obj) => {
        if(obj.qty > 0)
        {
          total++;
          this.carts.push(obj);  
        }
             
       });
      if(total > 0)
      {
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Your shopping cart has been updated !',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else
      {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'You have selected 0 quantity'
        });
      }
      this.$store.dispatch('setCarts', this.carts);
    },
    async fetch(){
      try{
        const response = await ProductService.fetchProducts({
         search: null,
         filter: 0 // 0 = all
        });
        if(response.data)
        {
          this.error = null;
          this.allProducts = response.data.info.map((obj) => {
              if(this.containsObject(obj, this.$store.state.carts))
              {
                obj.qty = this.$store.state.carts[this.getIdObject(obj, this.$store.state.carts)].qty;
              }
              else
                obj.qty = 0;
              return obj;
          })
          this.products = this.allProducts;
          this.carts = this.$store.state.carts;
          this.$store.dispatch('setAllProducts', this.allProducts);
        }
      } catch(error){
        if(error.response)
          this.error = error.response.data.error;
      }
     
    },
    addToWish(item) {
      console.log(item);
      console.log(this.$store.state.wish);
      if(!this.containsObject(item, this.$store.state.wish))
      {
        this.$store.dispatch('addWish', item);
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Your item was add into the whishlist !',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else
      {
         swal({
          type: 'error',
          title: 'Oops...',
          text: 'This product is already in your whishlist !'
        });
      }
      
   },
  },
  mounted(){
    this.fetch();
    this.$root.$on('search', (text) => { 
     this.filter_search(text);
    })
  }
}
</script>