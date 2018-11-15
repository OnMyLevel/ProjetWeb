<template>
 <div> 
     <app-header  v-on:changeShowModalSignIn="updateShowModalSignIn($event)" v-on:changeTitle="updateTitle($event)"  
     v-on:changeShowModalSignUp="updateShowModalSignUp($event)" v-on:changeShowModalAddMenu="changeShowModalAddMenu($event)" ></app-header>
     <hr/>
        <!-- Search form -->
      <div>
        <input class="active" type="text"  v-model="search" placeholder="Search" />
      </div>
     <component v-bind:menus="menus" v-bind:filteredMenus="filteredMenus" v-bind:listUsers="listUsers" v-bind:user="user" v-bind:is="component"> </component>
     <hr/>
     <br>
     <br>
      <modal-sign-in v-bind:newUser="newUser" v-if="showModalSignIn" @close="showModalSignIn = false">
      </modal-sign-in>
      <modal-sign-up v-if="showModalSignUp" @close="showModalSignUp = false">
      </modal-sign-up>
      <modal-add-Menu v-if="showModalAddmenu" @close="showModalAddmenu = false">
      </modal-add-Menu>
</div>
</template>
<script>

import Header from './Header.vue';
import Footer from './Footer.vue';
import Menus from './Menus.vue';
import Banner from './Banner.vue';
import MenuAdd from './MenuAdd.vue';
import AdminGui from './AdminGui.vue';
import ModalSignUp from './ModalSignUp.vue';
import ModalSignIn from './ModalSignIn.vue';
import ModalAddMenu from './AddMenu.vue';
import {bus} from '../main';
import firebase from 'firebase';
import VueRouter from 'vue-router';
import VueSession from 'vue-session';

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
      'app-menus-user': MenuAdd,
      'app-admin-gui':AdminGui,
      'modal-sign-up':ModalSignUp,
      'modal-sign-in':ModalSignIn,
      'modal-add-Menu':ModalAddMenu,
  },
  data(){
    return {
      menus:[
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
     changeShowModalAddMenu:function(){
       console.log("ICI 2");
        this.showModalAddmenu=true;
      },
  },
  created(){
    
    this.$http.get('https://projetweb-9605d.firebaseio.com/user.json').then(function(data){
      console.log(data);
      return data.json();
    }).then(function(data){
      var usersArray =[];
      for(let key in data){
        data[key].id= key;
        usersArray.push(data[key])
      }
      console.log(data)
      this.listUsers = usersArray;
    }),

    this.$http.get('https://projetweb-9605d.firebaseio.com/menu.json').then(function(data){
      console.log(data);
      return data.json();
    }).then(function(data){
      var menuArray =[];
      for(let key in data){
        data[key].id= key;
        menuArray.push(data[key])
      }
      console.log(data)
      this.menus = menuArray;
    }),

    bus.$on('userFireBaseChange',(data)=>{
      console.log("userFireBaseChange");
      this.userFireBase = data;
      console.log(this.userFireBase);
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.userFireBase.email,this.userFireBase.password).then(
        function(user) {
          alert('Your accout has been created !');
        },
        function(err){
          alert("Oops "+ err.message);
        }
      );
    })

    bus.$on('currentUserfireBaseChange',(data)=>{
      console.log("currentUserfireBaseChange");
      this.currentUserFireBase = data;
      console.log(this.currentUserFireBase);
      firebase.auth().signInWithEmailAndPassword(this.currentUserFireBase.email,this.currentUserFireBase.password).then(
        function(user) {
          bus.$emit('currentUserConnect',data);
          alert('Your are connect');
          this.user = data;
          console.log(this.user);
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
a{
  color: white;
}
a:hover {
    background-color: orange;
}
</style>
