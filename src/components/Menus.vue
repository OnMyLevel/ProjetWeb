<template>
<div id="menus">
  <p>{{title}} </p>
  <ul>
    <li v-for="menu in filteredMenus" :key="menu.id" v-on:click="menu.show = !menu.show">
        <h2>{{menu.name}}</h2>
         <router-link v-bind:to="'/menu/'+menu.id"> <h3 v-show="menu.show"> Details </h3> </router-link>
          <!--<button v-on:click="addComment = !addComment" id="btnAdd">--> </button><button id="btnLike"> </button>
          <br>
          <hr>
          <input v-show="addComment" class="addCommentInput" type="text"/> 
          <br>
          <button v-show="addComment" class="addCommentButton"> Ajouter </button>
     </li>
  </ul>
</div>
</template>

<script>
export default {
    props:{
      menus:{
        type: Array,
        required: true
      },
      addComment: true,
     filteredMenus:{
        type: Array,
        required: true
      }
    },
  name: 'app',
  data () {
    return {
       title:'Listes of Menus',
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
    font-size: 30px;
    background-image: url('../assets/welcome.jpg');
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
#btnAdd{
  align-self: center;
  background-image: url('../assets/comment-alt-solid.svg');
  width: 55px;
  height: 55px;
  border-radius: 30px;
  border-color: black;
}
#btnLike{
  align-self: center;
  background-image: url('../assets/likesvg.svg');
  width: 55px;
  height: 55px;
  margin-left: 3%;
  border-radius: 30px;
  border-color: wheat;
}
#btnLike :hover{
   position: relative; 
    top: -5px;
}
router-link:hover{
   background-color:tomato;
   color: black;
}

#btnAdd :hover{
  border-color: orange;
}

li h2:hover{
  background-color:tomato;
}

img{
  border:none;
}
button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.addCommentButton{

  padding:6px 0 6px 0;
	font:bold 13px Arial;
	background:orange;
	color:#fff;
	border-radius:0px;
	width:100px;
	border:none;

}

.addCommentInput{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
router-link{ 
  color: aliceblue;
}

</style>
