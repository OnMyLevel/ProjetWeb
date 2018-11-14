<template>
<div id="menus">
  <ul >
    <li v-for="menu in menus" :key="menu.id" v-on:click="menu.show = !menu.show">
      <h2>{{menu.name}}</h2>
      <h3 v-show="menu.show">{{menu.speciality}}</h3>
      <br>
      <button id="btnRemoveMenu"> </button>
    </li>
  </ul>
   <button class="buttonForm" v-on:click="deleteMenu" >Ajouter un menus </button>
  <hr>
    <h2> Utilisateurs sur l'application </h2>
   <p id="listUser">
    <span id="user" v-for="user in  listUsers" :key="user.id" v-on:click="user.show = !user.show">
      <h2 v-rainbow >{{user.name | to-uppercase }}</h2>
      <h3 v-show="user.show">{{user.email}}</h3>
      <br>
    </span>
  </p>
</div>
</template>
<script>
export default {
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
      filteredlistUser:{
        type: Array,
        required: true
      }

    },
  name: 'app',
  data () {
    return {
       title:'GUI for the ADMIN ',
       search:''
    }
  },
  methods:{
    deleteMenu:function(){
      this.menus.pop();
    }
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

#btnRemoveMenu{
  align-self: center;
  background-image: url('../assets/trash-alt-solid.svg');
  width: 34px;
  height: 36px;
  border-radius: 5px;
  border-color:  white;
}

li h2:hover{
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