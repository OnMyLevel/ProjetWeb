<template>
<header>
<ul>
  <li><router-link to="">Interface Admin</router-link></li>
  <router-link to="/"><li  style="float:right"><a v-on:click="changeShowModalSignIn" class="active" > Quitter </a></li></router-link>
   <li  style="float:right">{{this.user.mail}} </li>
</ul>
 <app-banner> </app-banner>
</header>
</template>
<script>
import Banner from './Banner.vue';
import {bus,currentUser}  from '../app';

export default {
  components:{
      'app-banner':Banner
  },
  props:{
      search:{
          type:String
      },
  },
  data () {
    return {
        user:{
            mail:"",
            password:""
        }
    }
  },
  methods:{

      setUser:function(data){
      this.user.mail = data.email;
      this.user.password= data.password;    
      }
      
  },
  created(){
      bus.$on('currentUserConnect',(data)=>{
      this.user.mail = data.email;
      this.user.password= data.password;
      console.log("LALALALA");
      this.setUser(data);
  })
  }
}
</script>
<style scoped>
 h1{
   color: black;
   text-align:  center;
 }
 ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
    background-color: orange;
}
/* Add a gray right border to all list items, except the last item (last-child) */
li {
    border-right: 2px solid #bbb;
}

li:last-child {
    border-right: none;
}
h1{
    text-align:  center;
}
#titlePage{
    text-align: center;
    margin-right: +1%;
}
#barRecherche{
    height: 14px;
    margin-top: 13px;
    margin-left: 42px;
    margin-right: 5px;
    width: 60%;
}
#btnRecherche{
    height: 100%;
	padding:6px 0 6px 0;
	font:bold 13px Arial;
	background:orange;
	color:#fff;
	border-radius:0px;
	width:100px;
	border:none;
    margin-right: 3px;
    margin-left: 7px;
}
#maRecherche{
  float: left;
  height: 100%;
  width: 80%
}
</style>