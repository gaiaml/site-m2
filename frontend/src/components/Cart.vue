<template>
<section class="main_section">
<div class="main-shopping-cart">
<h3>Shopping cart</h3>
<div class="danger-alert" v-html="error"></div>
<table class="rwd-table">
  <tr>
    <th>Product Image</th>
    <th>Product Name</th>
    <th>Qty</th>
    <th>Price</th>
    <th></th>
    <th>Total Price</th>
    <th></th>
  </tr>
  <tr v-for="item in $store.state.carts">
    <td data-th="Product Image" class="article-icon"><img :src="'static/ressources/' + item.image_url" alt=""></td>
    <td data-th="Product Name">
      {{ item.name }}
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
    <td data-th="Qty" class="col-md-1"><input type="number" min="0" v-model="item.qty" style="width: 33%"></td>
    <td data-th="Price">${{ item.price }}</td>
    <td data-th="">=</td>
    <td data-th="Total Price">${{ item.price * (item.qty > 0 ? item.qty : 0)   }} </td>
    <td><button class="btn btn-danger" @click="remove(item)" >Remove</button></td>
  </tr>

  <tr class="update-cart-row">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>   
    <td></td>
    <td><span class="btn btn-black" @click="command()">CHECKOUT</span></td>
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
      error: null,
    }
  },
  methods: {
    remove(item){
       this.$store.dispatch('removeItemCarts', item);
    },
    async command(){
      if(this.$store.state.carts.length > 0)
      {
        if(this.$store.state.isUserLoggedIn)
        {
          try{
            var info = [];
            //idCustomer: DataTypes.INTEGER,idProducts: DataTypes.INTEGER, qty: DataTypes.INTEGER,
            this.$store.state.carts.forEach(item =>{
              var data = {idCustomer: this.$store.state.user.id, idProducts: item.id, qty: item.qty };
              info.push(data);
            })

            const rep = await ProductService.orderProducts({data: info});
            if(rep)
            {
            swal({
              type: 'success',
              text: 'You bought your products !'
            });
              this.$store.dispatch('clearItemCarts');
            }
          }
          catch(err){
            swal({
              type: 'error',
              title: 'Oops...',
              text: err
            })
          }
        }
        else
        {
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'You must be connected to checkout !'
          })
        }
      }
      else
      {
         swal({
          type: 'error',
          title: 'Oops...',
          text: 'Your shopping cart is empty !'
        })
      }

    }
  }
}
</script>