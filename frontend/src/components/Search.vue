<template>
<section class="main_section">
	<div class="layout-search">
    <div class="row main-search">
	<div class="col-md-6">
		<router-link to="/"><img src="static/ressources/logo.png" alt=""></router-link>
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
		<img src="static/ressources/cart.png" alt=""> cart ({{ $store.state.totalCarts }} items)
	</div>

  </div>
	</div>
	
</section>

</template>