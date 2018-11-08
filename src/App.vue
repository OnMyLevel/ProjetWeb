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
     <app-footer></app-footer>

    <!-- Modeal pour Sign in  
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
                        <input type="password"  placeholder="Password">
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
    </script>-->

      <modal-sign-in v-bind:newUser="newUser" v-if="showModalSignIn" @close="showModalSignIn = false">
        <h3 slot="header">custom header</h3>
      </modal-sign-in>
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
import formHelper from './components/FormHelper.vue';
import MenuAdd from './components/MenuAdd.vue';
import AdminGui from './components/AdminGui.vue';
import ModalSignUp from './components/ModalSignUp.vue';
import ModalSignIn from './components/ModalSignIn.vue';
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
      'modal-sign-up':ModalSignUp,
      'modal-sign-in':ModalSignIn,
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
      user: {
           name: 'meril',
           email: 'meril@gmail.com'
      },
      newUser:{
        name: "",
        userName:"",
        password:"",
        email: ""
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
</style>
