<template>
<div id="menus">
  <p>{{title}} </p>
  <ul>
    <li v-for="menu in menus" :key="menu.id" v-on:click="menu.show = !menu.show">
        <h2>{{menu.name}}</h2>
        <h3 v-show="menu.show">{{menu.speciality}}</h3>
        <br>
       <button id="btnRemoveMenu"> </button>
    </li>
  </ul>
  <div id="buttonGroup">
    <button class="buttonForm" v-on:click="deleteMenu">Ajouter Menu</button>
  </div>
</div>
</template>
<script>
export default {
    props:{
      menus:{
        type: Array,
        required: true
      }
    },
  name: 'app',
  data () {
    return {
       title:'Listes of Exist, you want add ? ',
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
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
    color:whitesmoke;
    background-image: url('../assets/welcome.jpg');
}
.buttonForm{
  height: 100%;
	padding:6px 0 6px 0;
	font:bold 13px Arial;
	background: black;
	color:#fff;
	border-radius:0px;
	width:100px;
	border:none;
}
#buttonGroup{
    margin-left: 46.7%; 
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
button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>
