<template>
<div id="menus">
   <h2>{{title}} </h2> 
  <ul>
    <li v-for="menu in  paginatedData" v-bind:key="menu.id">
        <h2 v-on:click="menu.show = !menu.show">{{menu.name}}</h2>
       <img v-if="menu.image" v-bind:src="menu.image" alt="menu.image">
           <p v-show="menu.show">
           <span>Catégorie: </span> {{menu.type}}
           <br>
          <span> Temps de préparation:  </span>{{menu.time}}.min
           <br>
           <span>Description et étapes:  </span> {{menu.description}}
           <br>
           <span> Nombre de personnes:  </span>{{ menu.nombres}}.p
            </p>
            <br>
            <button v-on:click="menu.likes++,updateMenu(menu.id,menu.likes);" id="btnLike"> </button>
          <hr>  
           <h4>{{menu.likes}} LIKES</h4>
     </li>
  </ul>
  <button class="buttonForm" @click="prevPage">
    Previous
  </button>
  <button class="buttonForm" @click="nextPage">
    Next
  </button>
</div>
</template>
<script>
import {menuRef} from '../app';
import {userRef} from '../app';
export default {
  name: 'app',
  data () {
    return {
       title:'Quelques Recettes',
       pageNumber: 0  // default to page 0
    }
  },
    props:{
      menus:{
        type: Array,
        required: true
      },
      addComment: true,
     filteredMenus:{
        type: Array,
        required: true
      },
      size:{
      type:Number,
      required:false,
      default: 10
    }
  },
    computed:{
        pageCount(){
        let l = this.filteredMenus.length,
            s = this.size;
        return Math.floor(l/s);

      },
      paginatedData(){
         const start = this.pageNumber * this.size,
          end = start + this.size;
          return this.filteredMenus.slice(start, end);
        }
    },
  methods:{
      updateMenu:function(key,number){      
        menuRef.child(key).update({ likes:number});
        console.log(number);
        this.$forceUpdate();

    },
    nextPage(){
         this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      }
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

li h2{
  background-color:tomato;
}
li h2:hover{
  background-color: white;
  color: greenyellow
}
li h2::selection{
  background-color: white;
  color: greenyellow
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
span{
  color: rgb(15, 9, 1);
}

h4{
  color: greenyellow;
  font-size: 40px;
  background-color: white;
}
h4:hover{
  background-color: white;
}
img {
    max-width: 100%;
    height: 340px;
    border-radius: 2%;
}
img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

</style>
