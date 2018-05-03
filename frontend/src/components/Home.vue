<template>
<section id="main_section">
	<div class="layout-search">
    <div class="row main-search">
	<div class="col-md-6">
		<img src="static/ressources/logo.png" alt="">
	</div>

	<div class="col-md-5">
		<form class="form-inline">
		  <div class="input-group input-search-group mb-2 mr-sm-2 mb-sm-0">
		    <input type="text" class="form-control" placeholder="Search">
		    <div class="input-group-addon search-icon"><i class="fa fa-search"></i></div>
		  </div>
		</form>
	</div>

	<div class="col-md-1">
		<img src="static/ressources/cart.png" alt=""> cart
	</div>

  </div>
 </div>
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
        <li><a href="#">HOME</a></li>
        <li><a href="#">WOMEN</a></li>
        <li><a href="#">MEN</a></li>
        <li><a href="#">SALE</a></li>
        <li><a href="#">ACCESSORIES</a></li>
        <li><a href="#">VIP</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<div class="main-shopping-cart">
<h3>Shopping cart</h3>
<table class="rwd-table">
  <tr>
    <th>Product Image</th>
    <th>Product Name</th>
    <th>Qty</th>
    <th>Price</th>
    <th></th>
    <th>Total Price</th>
  </tr>
  <tr>
    <td data-th="Product Image" class="article-icon"><img src="https://raw.githubusercontent.com/hsbiti/projet_web_m2/master/public/ressources/article_icon.png?token=ALRMPKrCiY9nssSJNA1zFl3YapDREalyks5a8wbiwA%3D%3D" alt=""></td>
    <td data-th="Product Name">
      Adventure, Sci-fi
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
    <td data-th="Qty" class="col-md-1"><input type="number" style="width: 33%"></td>
    <td data-th="Price">$460,935,665</td>
    <td data-th="">=</td>
    <td data-th="Total Price">$460,935,665</td>
  </tr>
  <tr>
    <td data-th="Product Image" class="article-icon"><img src="static/ressources/article_icon.png" alt=""></td>
    <td data-th="Product Name">"Comedy"
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
    <td data-th="Qty" class="col-md-1"><input type="number" style="width: 33%"></td>
    <td data-th="Price">$16,295,774</td>
    <td data-th="">=</td>
    <td data-th="Total Price">$460,935,665</td>
  </tr>
  <tr>
    <td data-th="Product Image" class="article-icon"><img src="static/ressources/article_icon.png" alt=""></td>
    <td data-th="Product Name">Comedy, Drama
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
    <td data-th="Qty" class="col-md-1"><input type="number" style="width: 33%"></td>
    <td data-th="Price">$115,000,000</td>
    <td data-th="">=</td>
    <td data-th="Total Price">$460,935,665</td>
  </tr>
  <tr class="update-cart-row">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><span class="btn btn-black">UPDATE SHOPPING CART</span></td>
  </tr>
</table>
</div>
<div class="main-propositions">
	<h3>You might also be interested</h3>
	<div class="owl-carousel owl-theme">
	    <div class="item"><img src="static/ressources/article_icon.png" alt="">
	    	Title<br/>
	    	<b>$180</b><br/>
	    	<button class="btn btn-default"><img src="static/ressources/small_cart.png" style="display:inline; width: 20px;">Add to cart</button>
	    	<button class="btn btn-default"><i class="fa fa-heart"></i></button>
	    	<button class="btn btn-default" style="height: 35px;"><img src="static/ressources/double_arrow.png" alt=""></button>

	    </div>
			<div class="item"><img src="static/ressources/article_icon.png" alt="">
				Title<br/>
				<b>$180</b><br/>
				<button class="btn btn-default"><img src="static/ressources/small_cart.png" style="display:inline; width: 20px;">Add to cart</button>
				<button class="btn btn-default"><i class="fa fa-heart"></i></button>
				<button class="btn btn-default" style="height: 35px;"><img src="static/ressources/double_arrow.png" alt=""></button>

			</div>
			<div class="item"><img src="static/ressources/article_icon.png" alt="">
				Title<br/>
				<b>$180</b><br/>
				<button class="btn btn-default"><img src="static/ressources/small_cart.png" style="display:inline; width: 20px;">Add to cart</button>
				<button class="btn btn-default"><i class="fa fa-heart"></i></button>
				<button class="btn btn-default" style="height: 35px;"><img src="static/ressources/double_arrow.png" alt=""></button>

			</div>
			<div class="item"><img src="static/ressources/article_icon.png" alt="">
				Title<br/>
				<b>$180</b><br/>
				<button class="btn btn-default"><img src="static/ressources/small_cart.png" style="display:inline; width: 20px;">Add to cart</button>
				<button class="btn btn-default"><i class="fa fa-heart"></i></button>
				<button class="btn btn-default" style="height: 35px;"><img src="static/ressources/double_arrow.png" alt=""></button>

			</div>

			<div class="item"><img src="static/ressources/article_icon.png" alt="">
				Title<br/>
				<b>$180</b><br/>
				<button class="btn btn-default"><img src="static/ressources/small_cart.png" style="display:inline; width: 20px;">Add to cart</button>
				<button class="btn btn-default"><i class="fa fa-heart"></i></button>
				<button class="btn btn-default" style="height: 35px;"><img src="static/ressources/double_arrow.png" alt=""></button>

			</div>
			<div class="item"><img src="static/ressources/article_icon.png" alt="">
 			 Title<br/>
 			 <b>$180</b><br/>
 			 <button class="btn btn-default"><img src="static/ressources/small_cart.png" style="display:inline; width: 20px;">Add to cart</button>
 			 <button class="btn btn-default"><i class="fa fa-heart"></i></button>
 			 <button class="btn btn-default" style="height: 35px;"><img src="static/ressources/double_arrow.png" alt=""></button>

 		 </div>
		 <div class="item"><img src="static/ressources/article_icon.png" alt="">
			 Title<br/>
			 <b>$180</b><br/>
			 <button class="btn btn-default"><img src="static/ressources/small_cart.png" style="display:inline; width: 20px;">Add to cart</button>
			 <button class="btn btn-default"><i class="fa fa-heart"></i></button>
			 <button class="btn btn-default" style="height: 35px;"><img src="static/ressources/double_arrow.png" alt=""></button>

		 </div>
		 <div class="item"><img src="static/ressources/article_icon.png" alt="">
			 Title<br/>
			 <b>$180</b><br/>
			 <button class="btn btn-default"><img src="static/ressources/small_cart.png" style="display:inline; width: 20px;">Add to cart</button>
			 <button class="btn btn-default"><i class="fa fa-heart"></i></button>
			 <button class="btn btn-default" style="height: 35px;"><img src="static/ressources/double_arrow.png" alt=""></button>

		 </div>
	</div>
</div>
</section>
</template>
