<template>
  <div class="background">
    <div class="login">
      <d-container class="dr-example-container">
        <p class="text1">Member Area</p>
        <p class="text2">Bergabunglah dengan kami saat ini.</p>
        <d-row>
          <d-card class="login">
            <d-card-body>
              <img alt="Login" src="../assets/login.png" class="image">
              <p class="text3">LOG IN</p>
              <label class="sr-only" for="f1_Username"><p>Username</p></label>
              <p><d-input id="f1_Username" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Username" /></p>
              <label class="sr-only" for="f1_Password">Password</label>
              <p><d-input id="f2_Password" class="mr-2" type="password" placeholder="Password" /></p>
              <d-button pill theme="primary" class="button-login"><p class="text5">LOG IN</p></d-button>
              <d-link href="#test"><p class="text4">Forgot Your Username or Password?</p></d-link>
            </d-card-body>
          </d-card>
        </d-row>
      </d-container>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background{
    margin-top: -60px;
    padding-top: 30px;
    background-image: url("../assets/bg.png");
  }
  .login{
    margin-top:30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    width: 60%;
    background-image: url("../assets/bg.png");
  }
  .image{
    width: 80px;
    height: 80px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }
  .text-center{
    margin-top: 10px;
    text-align: center;
  }
  .text1{
    font-size: 30px;
    font-weight: 700;
    text-align: center; 
  }
  .text2{ 
    font-size: 20px;
    font-weight: 700;
    color: #67b5ff;
    text-align: center; 
  }
  .text3{
    font-size: 20px;
    font-weight: 700;
    color: #67b5ff;
    text-align: center;
  }
  .text4{
    margin-top: 15px;
    font-size: 15px;  
    font-weight: 700;
    text-align: center;
  }.text5{
    font-size: 18px;  
    font-weight: 700;
    text-align: center;
    padding: 1px 10px 10px 10px;
  }
  .button-login{
    width: 100%;
    height: 45px;
  }
</style>
