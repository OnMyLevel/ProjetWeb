<template>
 <div> 
    <router-view v-bind:firebase="firebase" v-bind:menus="menus" v-bind:listUsers="listUsers" v-bind:user="user"> </router-view>
    <hr/>
    <app-footer></app-footer>
    <br>
      <modal-sign-in v-bind:newUser="newUser"  v-if="showModalSignIn" @close="showModalSignIn = false">
      </modal-sign-in>
      <modal-sign-up v-if="showModalSignUp" @close="showModalSignUp = false">
      </modal-sign-up>
      <modal-add-menu v-if="showModalAddmenu" @close="showModalAddmenu = false">
      </modal-add-menu>
</div>
</template>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Menus from './components/Menus.vue';
import Banner from './components/Banner.vue';
import MenuAdd from './components/MenuAdd.vue';
import AdminGui from './components/AdminGui.vue';
import ModalSignUp from './components/ModalSignUp.vue';
import ModalSignIn from './components/ModalSignIn.vue';
import ModalAddMenu from './components/AddMenu.vue';
import {bus} from './app';
import firebase from 'firebase';
import session from 'vue-session';


export default {

  
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
          search:'',
          firebase:{
            name:firebase
          }
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
    })

     this.$http.get('https://projetweb-9605d.firebaseio.com/menu.json').then(function(data){
      console.log(data);
      return data.json();
    }).then(function(data){
      var menuArray =[];
      for(let key in data){
        data[key].id= key
        menuArray.push(data[key])
      }
      console.log(data)
      this.menus = menuArray;
    })
  }
}
</script>
<style scopped>

router-link{ 
  color: aliceblue;
}
a{
  color: white;
}
a:hover {
    background-color: orange;
}
</style>
