<template>
<div>
<app-header  v-on:changeShowModalSignIn="updateShowModalSignIn($event)" v-on:changeTitle="updateTitle($event)"  
     v-on:changeShowModalSignUp="updateShowModalSignUp($event)" ></app-header>
<div id="menus">
  <h1>Mens present sur le site :</h1>
  <ul >
    <li v-for="menu in menus" v-bind:key="menu.id">
      <h2>{{menu.name}}</h2>
      <h3 v-show="menu.show">{{menu.speciality}}</h3>
      <br>
      <button v-on:click="removeMenu(menu.id)" id="btnRemoveMenu"> </button>
      <button v-on:click="menu.show = !menu.show" id="btnEditUser"> </button>
      <hr/>
      <div v-if="menu.show">
       <br>
      <form id="form" >
           <br>
          Name: <input type="text" placeholder="nom de la recette" v-model.lazy="menu.name" required/>
          <br>
          Nombre de persones:<input type="number" placeholder="nombre de personnes" v-model.lazy="menu.nombres" required/>
          <br>
          Email:<input type="text" placeholder=" votre email" v-model.lazy="menu.mail" required/>
          <br>
          Temps de preparation:<input type="number"  placeholder="temps de preparation" v-model.lazy="menu.time" required/>
          <br>
          Description:
          <br>
          Image:
           <br>
          <input type="text"  placeholder="url de votre photo" v-model.lazy="menu.image" required/>
          <textarea rows="10" cols="64" v-model.lazy="menu.description" required>
          </textarea>
           <br>
           <br>
          <button v-on:click="menu.show =false,updateMenu(menu.id,menu.type,menu.name,
          menu.description,menu.time,menu.mail,
          menu.nombres,menu.likes);" class="modifier"> Modifier </button>
          <br>
        </form>
     </div>
    </li>
  </ul>
   <button v-on:click="changeShowModalAddMenu()" class="buttonForm">Ajouter une recette </button>
  <hr>
    <h2> les autres utilisateurs sur l'applications </h2>
   <p id="listUser">
    <span id="user" v-for="user in  listUsers" v-bind:key="user.id" v-on:click="user.show = !user.show">
      <h2 v-rainbow >{{user.name | to-uppercase }}</h2>
      <h3 v-show="user.email">{{user.email}}</h3>
      <br>
    </span>
  </p>
</div>
<modal-add-Menu v-if="showModalAddmenu" @close="showModalAddmenu = false">
  </modal-add-Menu>
</div>
</template>

<script>
import Header from './HeaderAdmin.vue';
import ModalAddMenu from './AddMenuAd.vue';
import {menuRef} from '../main';
import {userRef} from '../main';


export default {
    components:{
      'app-header':Header,
      'modal-add-Menu':ModalAddMenu,
    },
    props:{
      menus:{
        type: Array,
        required: true
      },
      listUsers:{
        type: Array,
        required: true
      },
      user:{
        required: true
      },
      firebase:{
        required: true
      },
      showModalAddmenu: false,
      showModalEditMenu: false,
      types:['Entré',
        'Plat','Dessert'
      ],
    },
  name: 'app',
  data () {
    return {
       search:'',
    }
  },
  methods:{
   removeMenu:function(key){
      console.log(key);
      menuRef.child(key).remove();
      console.log(menuRef.child(key));
      this.$forceUpdate();
    },
    updateMenu:function(key,type,name,description,time,mail,nombres,likes){      
         console.log("LALA");
          console.log(key);
        menuRef.child(key).update({ 
            id:"",
            name:name,
            type:type,
            description:description,
            mail:mail,
            time:time,
            likes:likes,
            nombres:nombres,
            show:false
          });
        console.log(key);
        //this.$forceUpdate();
    },
     changeShowModalAddMenu:function(){
      console.log("ICI 2");
     this.showModalAddmenu=true;
    }
  },
  created(){
   
  },
}
</script>
<style scoped>
 p{
  text-align:  center;
 }
 #menus{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding:  0 20px;
    box-sizing:  border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: O;
}
hr{
  border-color : orange;
  size: 15px;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
#buttonGroup{
    margin-left: 33%; 
}
.buttonForm{
  height: 110%;
	padding:6px 0 6px 0;
	font:bold 13px Arial;
	background:black;
	color:#fff;
	border-radius:0px;
	width:100%;
	border:none;
}
.modifier{
  height: 110%;
	padding:6px 0 6px 0;
	font:bold 13px Arial;
	background: greenyellow;
	color:#fff;
	border-radius:0px;
	width:100%;
	border:none;

}

ol {counter-reset: repas;} /* on initialise et nomme un compteur */
#user{
	counter-increment: repas; /* on incrémente le compteur à chaque nouveau li */
	margin-bottom: 10px;
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
  background-image: url('../assets/user.png');
}
#listUser{
  display: flex;
  flex-wrap: yes;
  padding: O;
  
}
#user:before {
	content: counter(repas); /* on affiche le compteur */
	padding: 0 20px 6px;
	margin-right: 8px;
	vertical-align: top;
	background:orange;
	-moz-border-radius: 60px;
	border-radius: 60px;
	font-weight: bold;
	font-size: 0.8em;
  color: white;	 
}
#btnRemoveUser{
  align-self: center;
  background-image: url('../assets/user-times-solid.svg');
  width: 43px;
  height: 36px;
  border-radius: 15px;
  border-color:  white;
}

#btnEditUser{
  align-self: center;
  background-image: url('../assets/user-times-solid.svg');
  width: 43px;
  height: 36px;
  border-radius: 15px;
  border-color:  white;
}

#btnRemoveMenu{
  align-self: center;
  background-image: url('../assets/trash-alt-solid.svg');
  width: 34px;
  height: 36px;
  border-radius: 5px;
  border-color:  white;
}

li h2{
  background-color:tomato;
}
p{
  
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: O;
}
span h2:hover{
  background-color: greenyellow;
}

button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

input[type=text],input[type=email],input[type=number],select,textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 2px solid greenyellow;
    border-radius: 4px;
    box-sizing: border-box;
}
.active{
  border: 1px solid black;
    box-shadow: 0 0 0 1px black;
}
</style>