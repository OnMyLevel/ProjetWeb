<template>
 <div> 
     <!--<app-header  v-on:changeShowModalSignIn="updateShowModalSignIn($event)" v-on:changeTitle="updateTitle($event)"  
     v-on:changeShowModalSignUp="updateShowModalSignUp($event)" ></app-header>
     <hr/>-->
        <!-- Search form -->
      <div>
        <input class="active" type="text"  v-model="search" placeholder="Search" />
      </div>
     <component v-bind:menus="menus" v-bind:filteredMenus="filteredMenus" v-bind:listUsers="listUsers" v-bind:user="user" v-bind:is="component"> </component>
     <hr/>
     <!--<app-form-helper v-show="formDisplay" id="formulaire"></app-form-helper>-->
     <br>
     <!--<hr/>-->
     <br>
      <modal-sign-in v-bind:newUser="newUser" v-if="showModalSignIn" @close="showModalSignIn = false">
      </modal-sign-in>
      <modal-sign-up v-if="showModalSignUp" @close="showModalSignUp = false">
      </modal-sign-up>
      <modal-add-menu v-if="showModalAddmenu" @close="showModalAddmenu = false">
      </modal-add-menu>
</div>
</template>
<script>

import Header from './Header.vue';
import Footer from './Footer.vue';
import Menus from './Menus.vue';
import Banner from './Banner.vue';
import formHelper from './FormHelper.vue';
import MenuAdd from './MenuAdd.vue';
import AdminGui from './AdminGui.vue';
import ModalSignUp from './ModalSignUp.vue';
import ModalSignIn from './ModalSignIn.vue';
import ModalAddMenu from './AddMenu.vue';
import {bus} from '../main';
import firebase from 'firebase';

export default {

  props:{
    userFireBase:{
      type: JSON
    },
    currentUserFireBase:{
      type: JSON
    },
  },
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
      'modal-add-Menu':ModalAddMenu,
  },
  data(){
    return {
      menus:[
           {id:1,name:'Ryu', speciality:'Vue Components', show:false},
           {id:2,name:'Crystal', speciality:'HTML Wizardy', show:false},
           {id:3,name:'Hitoshi', speciality:'Click Events ', show:false},
           {id:4,name:'Tango', speciality:'Conditionals', show:false},
           {id:5,name:'Kami', speciality:'Webpack', show:false},
           {id:6,name:'Yoshi', speciality:'Data Design', show:false}
        ],
      listUsers:[],
      title:'Menus',
      component:'app-menus-public',
      formDisplay:true,
      showModalSignIn: false,
      showModalSignUp: false,
      showModalAddmenu: false,
      user: {
           name: 'meril',
           email: 'meril@gmail.com'
      },
      newUser:{
        name: "",
        userName:"",
        gender:"",
        password:"",
        email: ""
      },
      userFireBase:{
        password:"",
        email: ""
      },
      currentUserFireBase:{
        password:"",
        email: ""
      },
      search:''
    }
  },
  methods:{
      updateTitle:function(updateTitle){
        this.title =updateTitle;
      },
      updateShowModalSignIn:function(){
        this.showModalSignIn=true;
      },
      updateShowModalSignUp:function(){
        this.showModalSignUp=true;
      },
      addUser: function () {
        if (this.isValid) {
          usersRef.push(this.newUser)
          this.newUser.name = '';
          this.newUser.email = '';
        }
      },
  },
  created(){
    
    this.$http.get('https://projetweb-9605d.firebaseio.com/user.json').then(function(data){
      console.log(data);
      return data.json();
    }).then(function(data){
      var usersArray =[];
      for(let key in data){
        data[key].id= key
        usersArray.push(data[key])
      }
      console.log(data)
      this.listUsers = usersArray;
    }),

    bus.$on('userFireBaseChange',(data)=>{
      console.log("userFireBaseChange");
      this.userFireBase = data;
      console.log(this.userFireBase);
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.userFireBase.email,this.userFireBase.password).then(
        function(user) {
          alert('Your accout has been created !')
        },
        function(err){
          alert("Oops "+ err.message)
        }
      );
    })

    bus.$on('currentUserfireBaseChange',(data)=>{
      console.log("currentUserfireBaseChange");
      this.currentUserFireBase = data;
      console.log(this.currentUserFireBase);
      firebase.auth().signInWithEmailAndPassword(this.currentUserFireBase.email,this.currentUserFireBase.password).then(
        function(user) {
          alert('Your are connect')
        },
        function(err){
          alert("Oops "+ err.message)
        }
      );
    })
  },
  // computed property for form validation state
  computed:{
    filteredMenus: function(){
      return this.menus.filter((menu) => {
        return menu.name.match(this.search);
      });
    }
  },
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

input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
.active{
  border: 1px solid black;
  box-shadow: 0 0 0 1px black;
}
</style>
