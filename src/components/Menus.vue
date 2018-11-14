<template>
<div id="menus">
 
   <h2>{{title}} </h2> 

  <ul>
    <li v-for="menu in filteredMenus" :key="menu.id">
        <h2 v-on:click="menu.show = !menu.show">{{menu.name}}</h2>
           <p v-show="menu.show">
           Catégorie  {{menu.type}}
           <br>
           Temps de preparation {{menu.time}} .min
           <br>
           Préparation:
            <br>
           {{menu.description}}
           <br>
           Nombre de personnes
            <br>
           {{menu.nombres}}
            </p>
           <button v-on:click="ajouter(menu)" id="btnLike"> </button>
          <hr>  
           <h4> {{menu.like}} </h4>
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
       title:'Quelques Recettes',
    }
  },
  methods:{
    ajouter:function(data){
      var menuVar=null;
      menuVar=data;
      menuVar.like +=1;
      console.log("ICI");
      console.log(menuVar.like);
      this.$http.post('https://projetweb-9605d.firebaseio.com/menu.json/'+this.menuVar.id,menu).then(function(data){
      console.log(data);
    });
  },
}
}
</script>
<style scoped>
 p{
  text-align:  center;
 }
 h2{
   text-align: center;
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

h4{
  color: black
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
a{
  color: white;
}
a:hover {
    background-color: orange;
}

p {
  background-color: burlywood;
  text-decoration: none;  
}

a:link 
{ 
text-decoration:none; 
} 
</style>
