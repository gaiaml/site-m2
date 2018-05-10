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
    <td data-th="Product Image" class="article-icon"><img @mouseout="mouseOut(item)"  @mouseover="mouseOver(item)" @click="selectItem(item)" :src="'static/ressources/' + item.ProductImages[0].image_url" alt="" data-toggle="modal" data-target=".slider-image" ></td>
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
    <div class="modal fade slider-image" role="dialog">
      <div class="modal-dialog modal-sm">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                      <span class="glyphicon glyphicon-remove"></span>
                  </button>
              </div>
              <div class="modal-body">
                <div id='carousel-example-generic' class='carousel slide' data-ride='carousel'>
                    <!-- Wrapper for slides -->
                    <div class='carousel-inner'>
                      <div v-for="(image,index) in clickedItem.ProductImages" class="item" :class="{ 'active': index === 0 }">             
                        <img :src="'static/ressources/' + image.image_url" />
                     </div>
                    </div>
                        
                    <!-- Controls -->
                    <a class='left carousel-control' href='#carousel-example-generic' data-slide='prev'>
                        <span class='glyphicon glyphicon-chevron-left'></span>
                    </a>
                    <a class='right carousel-control' href='#carousel-example-generic' data-slide='next'>
                        <span class='glyphicon glyphicon-chevron-right'></span>
                    </a>
                </div> <br />
              </div>
          </div>
      </div>
  </div>
  <div class="main-propositions">
	<h3>You might also be interested</h3>
  <div class="owl-carousel owl-theme">
	       <div class="container">
        <div v-for="item in proposal" class="col-md-2">
          <img :src="'static/ressources/' + item.ProductImages[0].image_url" width="150" alt="">
           {{  item.name}} <br/>
          <b>${{  item.price }} </b><br/>
          <button @click="addToCartByProposal(item)" class="btn btn-default"><img src="static/ressources/small_cart.png" style="display:inline; width: 20px;">Add to cart</button>
          <button @click="addToWish(item)" class="btn btn-default"><i class="fa fa-heart"></i></button>
          <button @click="selectItem(item)" data-toggle="modal" data-target=".slider-image" class="btn btn-default" style="height: 35px;"><img src="static/ressources/double_arrow.png" alt=""></button>
      </div>
    </div>

</div>
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
      allProducts: [],
      clickedItem: [],
      statistics: [],
      proposal: []
    }
  },
  methods: {
    addToCartByProposal : function(item){
      item.qty = eval(item.qty) + 1;
      this.addToCart(item);

    },
    mouseOut: function(item){
      var data = {idUser : this.$store.state.user ? this.$store.state.user.id : -1, idCategory: item.category};
      var index = this.getIdObjectStat(data, this.statistics);
      this.statistics[index].timer = Math.round(eval(this.statistics[index].timer) + (new Date().getTime() / 1000 - this.statistics[index].start))
      
      // mettre a jour
      ProductService.addStats({
            idUser : this.$store.state.user ? this.$store.state.user.id : -1,
            idCategory : this.statistics[index].idCategory,
            timer : this.statistics[index].timer
           })

      this.fetchProposal();
 
    },
    mouseOver: function(item){
      var data = {idUser : this.$store.state.user ? this.$store.state.user.id : -1, idCategory: item.category};
      if(!this.containsObjectStat(data, this.statistics)){
        data.timer = 0;
        this.statistics.push(data);
      }
     
      var index = this.getIdObjectStat(data, this.statistics);
      this.statistics[index].start = new Date().getTime() / 1000;
  ;
 
    },
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
    containsObjectStat(obj, list) {
      var i;
     
      for (i = 0; i < list.length; i++) {
          if (list[i].idUser == obj.idUser && list[i].idCategory == obj.idCategory ) {
              return true;
          }
      }

      return false;
    },
    getIdObjectStat(obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
          if (list[i].idUser == obj.idUser && list[i].idCategory == obj.idCategory ) {
              return i;
          }
      }

      return 0;
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
          this.clickedItem = [this.allProducts[0]];
        }
      } catch(error){
        if(error.response)
          this.error = error.response.data.error;
      }
     
    },
    addToWish(item) {
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
   async fetchProposal() {
     if(this.$store.state.user)
     {
       const response = await ProductService.fetchStatistics({
         idUser: this.$store.state.user.id
        });
        if(response.data)
        {
          this.proposal = [];
          
          var item = response.data.info;
          this.statistics = response.data.info;

          var dumpStats = this.statistics;
          var sortedTimer = dumpStats.map( entry => {
            return {timer: entry.timer, category: entry.idCategory};
          });
         sortedTimer.sort(function(a, b) {
            return a.timer < b.timer;
          });
        console.log(sortedTimer);
          // select most popular item
          sortedTimer.forEach(entry => {
            this.allProducts.forEach(product => {
              if(product.category == entry.category)
                this.proposal.push(product);
            });
          });
         
        }
     }
      
   },
   selectItem(item) {
     this.clickedItem = item;
   }
  },
  mounted(){
    this.fetch();
    this.fetchProposal();
    this.$root.$on('search', (text) => { 
     this.filter_search(text);
    })
  }
}
</script>