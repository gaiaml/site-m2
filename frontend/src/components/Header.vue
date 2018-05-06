<template>
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
              <img src="static/ressources/en.png" class="language-flag"><span class="language-label">English</span>
             <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Français</a></li>
              <li><a href="#">Español</a></li>
              <li><a href="#">Italian</a></li>
          
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">USD <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Euro</a></li>  
            </ul>
          </li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Compare <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Amazon.co.uk</a></li>
            </ul>
          </li>
        </ul>

        <ul class="nav navbar-nav navbar-right" style="font-color: white;">
          <li class="dropdown" v-if="$store.state.isUserLoggedIn">
            <button href="#" style="margin-top: 6%;" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My account <span class="caret"></span></button>
             <ul class="dropdown-menu">
              <li><router-link to="/Commands">My commands</router-link></li>
              <li><router-link to="/Carts">My carts</router-link></li>
              <li role="separator" class="divider"></li>
              <li v-if="$store.state.isUserLoggedIn" @click="logout"><a href="#">Log out</a></li>
            </ul>
          </li>
          <li><a href="#">Whishlist</a></li>
          <li><router-link to="/Carts">My Cart ({{ $store.state.totalCarts }} items)</router-link></li>
          <li><a href="#">Blog</a></li>
          <li style="margin-top: 2%;" v-if="!$store.state.isUserLoggedIn"><button class="btn btn-success" data-toggle="modal" data-target=".login-register-form">Login or register</button></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    <div class="modal fade login-register-form" role="dialog" v-if="!$store.state.isUserLoggedIn">
      <div class="modal-dialog modal-sm">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                      <span class="glyphicon glyphicon-remove"></span>
                  </button>
                  <ul class="nav nav-tabs">
                      <li class="active"><a data-toggle="tab" href="#login-form"> Login <span class="glyphicon glyphicon-user"></span></a></li>
                      <li><a data-toggle="tab" href="#registration-form"> Register <span class="glyphicon glyphicon-pencil"></span></a></li>
                  </ul>
              </div>
              <div class="modal-body">
                <div class="danger-alert" v-html="error"></div>
                  <div class="tab-content">
                      <div id="login-form" class="tab-pane fade in active">
      
                              <div class="form-group">
                                  <label for="email">Email or pseudo :</label>
                                  <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email" name="email" required="">
                              </div>
                              <div class="form-group">
                                  <label for="pwd">Password:</label>
                                  <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="pass" name="pwd" required="">
                              </div>
            
                              <button type="submit" class="btn btn-primary"  @click="login">Login</button>
                      </div>
                      <div id="registration-form" class="tab-pane fade">
                              <div class="form-group">
                                  <label for="name">Your Name:</label>
                                  <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name" v-model="name" required="">
                              </div>
                              <div class="form-group">
                                  <label for="newemail">Email or pseudo :</label>
                                  <input type="email" class="form-control" id="newemail" placeholder="Enter new email" name="newemail" v-model="email" required="">
                              </div>
                              <div class="form-group">
                                  <label for="newpwd">Password:</label>
                                  <input type="password" class="form-control" id="newpwd" placeholder="New password" name="newpwd" v-model="pass" required="">
                              </div>
                              <div class="form-group">
                                <label for="newpwd">Confirm password:</label>
                                <input type="password" class="form-control" id="pwdconfirm" data-vv-as="pass" placeholder="New password" name="pwdconfirm" v-model="passconfirm" required="">
                            </div>
                            <button type="submit" class="btn btn-primary" @click="register">Register</button>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  </div>
  </nav>
  </header>
  

</template>

<script>
import AuthentificationService from '../services/AuthentificationService'
export default {
  data () {
    return {
      email : '',
      pass : '',
      passconfirm: '',
      name: '',
      error: null
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('setUser', null);
      swal({
              position: 'top-end',
              type: 'success',
              title: 'You are now disconnected !',
              showConfirmButton: false,
              timer: 1500
            })
      
    },
    async login(){
      try{
        const response = await AuthentificationService.login({
          email : this.email,
          pass : this.pass
        });
        if(response.data)
        {
          this.$store.dispatch('setUser', response.data.info);
          this.$router.go("home");
          this.error = null;
           swal({
              position: 'top-end',
              type: 'success',
              title: 'You are now logged !',
              showConfirmButton: false,
              timer: 3000
            })

        }
      } catch(error){
        if(error.response)
          this.error = error.response.data.error;
      }
     
    },
    async register(){
      if(this.pass != this.passconfirm){
      }
      else
      {
        try{
          const response = await AuthentificationService.register({
            email : this.email,
            pass : this.pass,
            name : this.name
          })
          if(response.data)
          {
            this.error = null;
            this.$store.dispatch('setUser', response.data.info);
            this.$router.go("home");
            swal({
              position: 'top-end',
              type: 'success',
              title: 'You are now registerd !',
              showConfirmButton: false,
              timer: 1500
            })

          }
        }catch(error) {
          this.error = error.response.data.error;
        }
          
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
