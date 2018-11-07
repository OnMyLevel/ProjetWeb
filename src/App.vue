<template>
 <div> 
     <app-header  v-on:changeShowModalSignIn="updateShowModalSignIn($event)" v-on:changeTitle="updateTitle($event)"  
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
                   Please fill in this form to connect on your account
              </div>
               <hr/>
              <div class="modal-body">
                <slot name="body">
                  <form id="form">
                        <input type="text"  placeholder="Username">
                        <br>
                        <input type="text"  placeholder="Password">
                        <br>
                   </form>
                </slot>
              </div>
               <hr/>
               <br>
              <div class="modal-footer">
                <slot name="footer">
                  <br>
                  <button class="modal-default-button" @click="$emit('close')">Cancel</button>
                  <button  class="modal-default-button" type="submit" >Sign in</button>
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
                Please fill in this form to create an account
              </div>
                <hr/>
              <div class="modal-body">
                <slot name="body">
                   <!-- Using vuefire (the official Firebase binding) -->
                      <form id="form" >
                        <input type="text" placeholder="Name">
                        <br>
                        <input type="text" placeholder="Username">
                        <br>
                        <input type="text" placeholder="Password">
                        <br>
                        <input type="email"  placeholder="email@email.com">
                        <br>
                      </form>
                </slot>
              </div>
              <br>
               <hr/>
              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="$emit('close')">Cancel</button>
                  <button  class="modal-default-button" type="submit">Sign Up</button>
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
      newUser: {
           name: 'meril',
           email: 'meril@gmail.com'
      }
    }
  },
  // computed property for form validation state
  computed: {
    validation: function () {
      return {
        name: !!this.newUser.name.trim(),
        email: emailRE.test(this.newUser.email)
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  methods:{
      updateTitle:function(updateTitle){
        console.log("upddateTitle:function(updateTitle)");
        this.title = updateTitle;
      },
      updateShowModalSignIn:function(){
        this.showModalSignIn= true;
        console.log("ICI this.showModalSignIn "+this.showModalSignIn);
      },
      updateShowModalSignUp:function(){
        this.showModalSignUp= true;
        console.log("ICI"+this.showModalSignUp);
      },
      addUser: function () {
        if (this.isValid) {
          usersRef.push(this.newUser)
          this.newUser.name = '';
          this.newUser.email = '';
        }
      },
      /*removeUser: function (user) {
        usersRef.child(user['.key']).remove()
      }*/
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
  margin-left: 10%; 
}

.modal-body input[type=text], input[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.modal-body input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.modal-body input[type=submit]:hover {
    background-color: #45a049;
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
user {
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-top: 1px solid #eee;
  overflow: hidden;
  transition: all .25s ease;
}

.user:last-child {
  border-bottom: 1px solid #eee;
}

.v-enter, .v-leave-active {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
}

.errors {
  color: #f00;
}
</style>
