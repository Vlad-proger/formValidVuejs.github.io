<template>
  <div class="login-wrap">
    <input type="radio" class="signIn" name="reg" id="entrance" checked><label for="entrance" class="tab" @click="showForm(1)">Sign In</label>
    <input type="radio" class="signUp" name="reg" id="registr" checked><label for="registr" class="tab" @click="showForm(2)">Sign up</label>

    <transition name="component-fade">
    <form action="" class="signInForm" v-show="showSignInForm" @submit.prevent="submit()"  >
      <div class="input-group" >
        <label for="email" class="label">Email</label>
        <input name="email"  type="text" id="email" class="input" v-model.lazy ="model.email" v-validate="'required|email'">
        <span  v-show="errors.has('email')">{{errors.first('email')}}</span>

      </div>

      <div class="input-group">
        <label for="pass" class="label">Password</label>
        <input type="password" id="pass" class="input" v-model.lazy ="model.password" v-validate="'required'" name="password" ref="password">
         <span  v-show="errors.has('password')">{{errors.first('password')}}</span>
      </div>

       <button type="submit" @click="buttEntrance">Come In</button>
          <div class="hr"></div>
          <div class="footer-link">
            <input type="radio" class="forgot" name="reg" id="rec" checked><label style="cursor:pointer" for="rec" @click="showForm(3)" >Forgot your password?</label>
          </div>
    </form>  
    </transition>

    <transition name="component-fade">
      <form action="" v-show="showRecovery" class="recovery">
        <p class="tab">Password recovery</p>
        <label for="email" class="label">Enter email that you remember</label>
        <input name="email"  type="text" id="email" class="input" v-model.lazy ="model.email" v-validate="'required|email'">
        <span  v-show="errors.has('email')">{{errors.first('email')}}</span>
        <button type="submit" style="margin-top:30px;">Send</button>
      </form>
    </transition>

    <transition name="component-fade">
       <form action="" class="signUnForm" v-show="showSignUpForm" @submit.prevent="submit('two')">
      <div class="input-group">
        <label for="email2" class="label">Email</label>
        <input name="email" type="text" id="email2" class="input" v-model.lazy ="model.email" v-validate="'required|email'" autocomplete="off">
        <span  v-show="errors.has('email')">{{errors.first('email')}}</span>

      </div>

      <div class="input-group">
        <label for="passw" class="label">Password</label>
        <input type="password" id="passw" class="input" v-model.lazy ="model.password"  v-validate="'required'" name="password" ref="password">
        <span  v-show="errors.has('password')">{{errors.first('password')}}</span>
      </div> 

      <div class="input-group">
        <label for="pass2" class="label">Confirm password</label>
        <input type="password" id="pass2" class="input" v-model.lazy ="model.repassword" v-validate="'required|confirmed:password'" name="repassword" data-vv-as="password">
        <span  v-show="errors.has('password')">{{errors.first('repassword')}}</span>

      </div>

      <button type="submit" @click="buttReg('two')">Check In</button>
          <div class="hr"></div>
          <div class="footer-link">
            <label for="tabInput" @click="showForm(1)">Уже зарегестрированы?</label>
          </div>
    </form>  


    </transition>

   <transition name="component-fade">
     <h1 v-show="showHi">Hello!</h1>
   </transition> 

   <transition name="component-fade">
     <h1 v-show="showWelcome">Welcome my site)</h1>
   </transition>

  </div>

</template>

<script>
import valid from '../system/validators'

  export default {
  data() {
    return {
      showSignInForm: true,
      showRecovery: false,
      showSignUpForm: false,
      showHi: false,
      showWelcome: false,
      model:{
        email:'',
        password:'',
        repassword:''
      },
      }
  },
  methods: {
    showForm(num) {
      switch (num) {
        case 1:
          this.showSignInForm = true
          this.showSignUpForm = false
          this.showRecovery= false
          this.showHi=false
          this.showWelcome=false
          break;
        case 2:
          this.showSignInForm = false
          this.showSignUpForm = true
          this.showRecovery= false
          this.showHi=false
          this.showWelcome=false
          break;
        case 3:
          this.showSignInForm = false
          this.showSignUpForm = false
          this.showRecovery= true
          break; 
        case 4:
          this.showSignInForm = false
          this.showSignUpForm = false
          this.showRecovery= false
          this.showHi=true
          this.showWelcome=false
          break;
        case 5:
          this.showSignInForm = false
          this.showSignUpForm = false
          this.showRecovery= false
          this.showHi=false
          this.showWelcome=true          
          break;
      
        default:
          break;
      }
    },
    submit(key){
      
      if(valid(this.model, key).isValid){
      console.log(this.model);
    }
    else{
        console.log('error')
        }
      
      },
     buttEntrance(key){
       this.$validator.validateAll().then(()=>{
      if(valid(this.model, key).isValid){
      console.log(this.model);
      this.showForm(4);
    }
    else{
        console.log('error')
        }
      })
     },
     buttReg(key){
      this.$validator.validateAll().then(()=>{
      if(valid(this.model, key).isValid){
      console.log(this.model);
      this.showForm(5);
    }
    else{
        console.log('error')
        }
      }) 
    },
  }
};

</script>

<style scoped>
  .login-wrap{ 
  width: 100%;
  margin:0 auto;
  max-width: 400px;
  min-height: 400px;
  position: relative;   
  box-shadow: 0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
  padding: 50px 50px 50px 50px;
  background: #eaeaea;
  border-radius: 10px;
}

form.recovery p{
  text-decoration: underline;
}

h1{
  text-align: center;
  letter-spacing: 4px;
  font-size: 50px;
  text-shadow: 0 1px 0 #CAC8C8,
  0 2px 0 #C7C5C5,
  0 3px 0 #BBBABA,
  0 4px 0 #B7B6B6,
  0 5px 0 #A9A9A6,
  0 6px 1px rgba(0,0,0,.2),
  0 0 5px rgba(0,0,0,0.1),
  0 1px 3px rgba(0,0,0,.1),
  0 3px 3px rgba(0,0,0,.1),
  0 5px 10px rgba(0,0,0,.2),
  0 10px 10px rgba(0,0,0,.3),
  0 20px 20px rgba(0,0,0,.1)
}
 
.component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to{
    opacity: 0;     
  }

  .signIn,.signUp,.forgot{
    display: none;
  }

  .tab{
    font-size: 18px;
    margin-right: 15px;
    padding-bottom: 5px;
    margin: 10px 10px 20px 0px;
    display: inline-block;
    border-bottom: 2px solid transparent ; 
    text-transform: uppercase;
    cursor: pointer;
  }

  .signInForm,.signUpForm,.recovery{
    top: 120px;
    left: 50px;
    right: 50px;
    position: absolute;
  }

  .input-group{
    margin-bottom: 15px;
  }

  .label{
        text-transform: uppercase;
        width: 100%;
        color: #6D6D6D;
        display: block;
        font-size: 12px;
        cursor: pointer;
      }

      .input{
        width: 100%;
        color: black;
        display: block;
        border: 1px solid #CECECE;
        padding: 15px 0;
        background: #EAEAEA;
      }

    .input[data-type="password"]{
        text-security: circle;    
      }

    .input:focus{
        outline: none;
        border: 1px solid black;
        }

    button{
      text-transform: uppercase;
      border: none;
      padding: 15px 20px;      
      width: 100%;
      color: #fff;
      display: block;
      background: primary_color;
      outline: none;
      cursor: pointer;
      }

    button:active{
      opacity: 0.7;      
    }

    .hr{
      height: 2px;
      margin: 10px 0 10px 0;
      background: silver;
    }

    .footer-link{
      text-align: center;   
    }

    .footer-link input{ 
        color: inherit; 
        text-decoration: none;
      }
      .footer-link input:hover{
        color: silver;
      }
      
               
      label:hover{
        color: silver;
      }
      
</style>