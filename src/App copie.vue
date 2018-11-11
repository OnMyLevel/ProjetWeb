<template>
 <div> 
     <app-header  v-on:changeShowModalSignIn="updateShowModalSignIn($event)" v-on:changeTitle="updateTitle($event)"  
     v-on:changeShowModalSignUp="updateShowModalSignUp($event)" ></app-header>
     <hr/>
        <!-- Search form -->
        <div>
          <input class="active" type="text"  v-model="search" placeholder="Search" />
        </div>
     <component v-bind:menus="menus" v-bind:filteredMenus="filteredMenus" v-bind:listUsers="listUsers" v-bind:user="user" v-bind:is="component"> </component>
     <!--<router-view></router-view>-->
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
      listUsers:[],
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
        gender:"",
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
    this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(data){
      console.log(data);
      this.listUsers = data.body.slice(0,6);
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
