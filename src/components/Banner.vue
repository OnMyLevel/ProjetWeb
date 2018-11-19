<template>
<div id="banniere">
  <h1>{{titre}}</h1>
</div>
</template>

<script>
export default {
  data(){
    return {
        titre:'A vos tabliers !'
    }
  }
}
</script>
<style scoped>
#banniere{
    padding-top: +50px;
    background-image: url('../assets/image_ban.jpg');
    width: 100%;
    height: 200px;
    text-align: center;
}
h1{
    padding-top: -40px;
    color:gold;
    text-shadow: black 0.1em 0.1em 0.1em ;
    font-size: 70px;
}

</style>