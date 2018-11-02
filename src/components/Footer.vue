<template>
  <footer> 
      <br>
      <p> Page :{{ title }} 
      <br>  
      AfricanFood
      <br>
      324 Ellte RoadDelhi, DL 110013
      <br>
      © AfricanFood
      <br>
      by Christanis Meril BANZOUI et Leatia YAMBOU </p>
      <br>
  </footer>
</template>
<script>

import {bus}  from '../main';

export default {
  props:{
    title:{
      type:String
    }
  },
  data(){
    return {
        copyright:'Copyright vue Ninjas'
    }
  },
  created(){
    bus.$on('titleChanged', (data)=>{
      this.title = data;
    })
  }
}
</script>
<style scoped>

footer{
    /*padding: 6px;*/
    margin-top: +0.6%;
    background-color:orange;
    font-weight:bold;
    text-align: center;
}
</style>