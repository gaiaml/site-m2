<template>
  <div class="layout-basic">
    <header>
      <nav class="navbar navbar-default top-navbar">
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
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <img src="ressources/en.png" class="language-flag"><span class="language-label">English</span>
           <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">USD <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Compare <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right right-navigation">
        <li><a href="#">My Account</a></li>      
        <li><a href="#">Whishlist</a></li>      
        <li><a href="#">My Cart (4 items)</a></li>      
        <li><a href="#">Blog</a></li>     
        <li><a href="#" data-toggle="modal" data-target="#login-modal">Login</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
        <div id="login-modal" class="modal modal-dialog" tabindex="-1" role="dialog"  aria-hidden="true">
      <div class="modal-content">
          <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
              <h4 class="modal-title" id="myModalLabel">Login to site.com</h4>
          </div>
          <div class="modal-body">
              <div class="row">
                  <div class="col-xs-6">
                      <div class="well">
                          <form id="loginForm" method="POST" action="/login/" novalidate="novalidate">
                              <div class="form-group">
                                  <label for="username" class="control-label">Username</label>
                                  <input type="text" class="form-control" id="username" name="username" value="" required="" title="Please enter you username" placeholder="example@gmail.com">
                                  <span class="help-block"></span>
                              </div>
                              <div class="form-group">
                                  <label for="password" class="control-label">Password</label>
                                  <input type="password" class="form-control" id="password" name="password" value="" required="" title="Please enter your password">
                                  <span class="help-block"></span>
                              </div>
                              <div id="loginErrorMsg" class="alert alert-error hide">Wrong username og password</div>
                              <div class="checkbox">
                                  <label>
                                      <input type="checkbox" name="remember" id="remember"> Remember login
                                  </label>
                                  <p class="help-block">(if this is a private computer)</p>
                              </div>
                              <button type="submit" class="btn btn-success btn-block">Login</button>
                              <a href="/forgot/" class="btn btn-default btn-block">Help to login</a>
                          </form>
                      </div>
                  </div>
                  <div class="col-xs-6">
                      <p class="lead">Register now for <span class="text-success">FREE</span></p>
                      <ul class="list-unstyled" style="line-height: 2">
                          <li><span class="fa fa-check text-success"></span> See all your orders</li>
                          <li><span class="fa fa-check text-success"></span> Fast re-order</li>
                          <li><span class="fa fa-check text-success"></span> Save your favorites</li>
                          <li><span class="fa fa-check text-success"></span> Fast checkout</li>
                          <li><span class="fa fa-check text-success"></span> Get a gift <small>(only new customers)</small></li>
                          <li><a href="/read-more/"><u>Read more</u></a></li>
                      </ul>
                      <p><a href="/new-customer/" class="btn btn-info btn-block">Yes please, register now!</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</nav>
    </header>

    
    <slot/>
    <footer class="page-footer font-small stylish-color-dark pt-4 mt-4">
      <div class="footer-first text-center text-md-left">
    <div class="row">

		<div class="col-md-2" style="text-align:left">
			<h5 class="font-weight-bold">About us</h5>
            <ul class="list-unstyled">
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Contact Us</a>
                </li>
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">About Us</a>
                </li>
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Careers</a>
                </li>
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Blog</a>
                </li>

                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Press</a>
                </li>
            </ul>
		</div>

        <div class="col-md-2" style="text-align:left">
            <h5 class="font-weight-bold">Help</h5>
            <ul class="list-unstyled">
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Payments</a>
                </li>
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Saved Cards</a>
                </li>
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Shipping</a>
                </li>
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Cancellation & Returns</a>
                </li>

                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">FAQ</a>
                </li>
            </ul>
        </div>

        <div class="col-md-2" style="text-align:left">
            <h5 class="font-weight-bold">Shipping</h5>
            <ul class="list-unstyled">
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Delivery</a>
                </li>
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Track your order</a>
                </li>
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Discount</a>
                </li>
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Returns</a>
                </li>
                <li>
                    <a href="#!"><img class="caret-right" src="ressources/caret_right.png" alt="">Buy gift cards</a>
                </li>
            </ul>
        </div>

        <div class="col-md-6" style="text-align: left">
            <div class="row newsletter-signup">
                <div class="col-md-12">
                    <span style="font-size: 22px;">Newsletter Signup</span>
                </div>
                <div class="col-md-12">
                    <input type="text">
                </div>
            </div>
           <div class="row">
                <div class="col-md-12">
                    <span style="font-size: 22px;">Follow Us</span>
                     
                </div>
                <div class="col-md-12">
                     <img src="ressources/facebook.png" style="width: 33px; height: 33px;">
                     <img src="ressources/twitter.png" style="width: 33px; height: 33px;">
                     <img src="ressources/google_plus.png" style="width: 33px; height: 33px; border-left: 1px solid #7f8284;">
                     <img src="ressources/youtube.png" style="width: 33px; height: 33px; border-left: 1px solid #7f8284;">
                     <img src="ressources/pinterest.png" style="width: 33px; height: 33px;">
                     <img src="ressources/linkedin.png" style="width: 33px; height: 33px;">
                     <img src="ressources/rss.png" style="width: 33px; height: 33px;">
                     <img src="ressources/tumblr.png" style="width: 33px; height: 33px; border-left: 1px solid #7f8284;">
                </div>
            </div>
        </div>

      
    </div>
</div>


<div class="footer-last">
    <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
            <a class="btn-floating btn-sm btn-fb mx-1">
                © 2015
            </a>
        </li>
        <li class="list-unstyled list-inline pull-right">
            <img src="ressources/payment_cards.png" alt="">
        </li>
    </ul>
</div>
<!--/.Social buttons-->
    </footer>
  </div>
</template>
