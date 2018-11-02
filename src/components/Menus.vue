<template>
<div id="menus">
  <p>{{title}} </p>
  <ul>
    <li v-for="menu in menus" v-on:click="menu.show = !menu.show">
      
        <h2>{{menu.name}}</h2>
        <h3 v-show="menu.show">{{menu.speciality}}</h3>
          <button id="btnAdd"> </button><button id="btnLike"> </button>
    <!--<input id="addComment" type="text"/>-->
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
  
  // lifecycle hooks
  /*beforeCreat(){
    alert('created');
  },
  created(){
    alert('created');
  },
  beforeMount(){
    alert('beforeMount')
  },
  mounted(){
    alert('mounted');
  },
  beforeUpdate(){
    alert('beforeUpdate');
  },
  updated(){
    alert('updated');
  }*/
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
    background-opacity: 0.1;
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

</style>
