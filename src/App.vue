<template>
 <div> 
     <app-header v-bind:title="title" v-on:changeShowModalSignIn="updateShowModalSignIn($event)" v-on:changeTitle="updateTitle($event)"  
     v-on:changeShowModalSignUp="updateShowModalSignUp($event)" ></app-header>
     <hr/>
     <component v-bind:menus="menus" v-bind:is="component"> </component>
     <div id="buttonGroup">
        <button class="buttonForm"  v-on:click="component='app-menus-public'; formDisplay = true;"> Gui Public </button>
        <button class="buttonForm" v-on:click="component='app-menus-user'; formDisplay = false;"> Gui User </button>
        <button class="buttonForm" v-on:click="component='app-admin-gui'; formDisplay = false;"> Gui Admin </button>
     </div>
     <hr/>
     <app-form-helper v-show="formDisplay" id="formulaire"></app-form-helper>
     <br>
     <hr/>
     <br>
     <app-footer v-bind:title="title"></app-footer>

    <!-- Modeal pour Sign in  -->
    <script type="text/x-template" id="modal-template-signin">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>
               <hr/>
               <br>
              <div class="modal-footer">
                <slot name="footer">
                  <br>
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </script>
      <modal-sign-in v-if="showModalSignIn" @close="showModalSignIn = false">
        <h3 slot="header">custom header</h3>
      </modal-sign-in>

    <!-- Modeal pour Sign up  -->
    <script type="text/x-template" id="modal-template-signup">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                <h1>Sign Up</h1>
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  <form class="modal-content" action="/action_page.php">
                    <p>Please fill in this form to create an account.</p>
                    <hr>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

                    <label>
                      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
                    </label>

                    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
                </form>
                </slot>
              </div>
              <hr/>
              <br>
              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')">
                    Ok
                  </button>
                  <button class="modal-default-button" type="button" @click="$emit('close') class="cancelbtn">Cancel</button>
                      <button  class="modal-default-button"type="submit" class="signup">Sign Up</button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </script>
      <modal-sign-up v-if="showModalSignUp" @close="showModalSignUp = false">
        <h3 slot="header">custom header</h3>
      </modal-sign-up>

</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Menus from './components/Menus.vue';
import Banner from './components/Banner.vue';
import formHelper from './components/formHelper.vue';
import MenuAdd from './components/MenuAdd.vue';
import AdminGui from './components/AdminGui.vue';
import '@fortawesome/fontawesome-free';

export default {
  components:{
      'app-header':Header,
      'app-footer': Footer,
      'app-menus-public': Menus,
      'app-banner':Banner,
      'app-form-helper': formHelper,
      'app-menus-user': MenuAdd,
      'app-admin-gui':AdminGui,
  },
  data(){
    return {
      menus:[
           {name:'Ryu', speciality:'Vue Components', show:false},
           {name:'Crystal', speciality:'HTML Wizardy', show:false},
           {name:'Hitoshi', speciality:'Click Events ', show:false},
           {name:'Tango', speciality:'Conditionals', show:false},
           {name:'Kami', speciality:'Webpack', show:false},
           {name:'Yoshi', speciality:'Data Design', show:false}
        ],
      title:'Menus',
      component:'app-menus-public',
      formDisplay:true,
      showModalSignIn: false,
      showModalSignUp: false,
    }
  },
  methods:{
    updateTitle:function(updateTitle){
      console.log("upddateTitle:function(updateTitle)");
      this.title = updateTitle;
    },
    updateShowModalSignIn:function(){
      this.showModalSignIn= true;
      console.log("ICI this.showModalSignIn "+this.showModalSignIn)
    },
    updateShowModalSignUp:function(){
      this.showModalSignUp= true;
      console.log("ICI"+this.showModalSignUp)
    }
  }
}
</script>
<style scopped>

hr{
  border-color : orange;
  size: 15px;
}
#formulaire{
  height: 490px;
  background-color: rgb(245, 245, 241);
}
#buttonGroup{
    margin-left: 40%; 
}
.buttonForm{
  height: 100%;
	padding:6px 0 6px 0;
	font:bold 13px Arial;
	background:orange;
	color:#fff;
	border-radius:0px;
	width:100px;
	border:none;
}
button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: orange;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  height: 100%;
	padding:6px 0 6px 0;
	font:bold 13px Arial;
	background:orange;
	color:#fff;
	border-radius:0px;
	width:100px;
	border:none;

}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
