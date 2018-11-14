<template>
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                 <h1>{{menu.name}}</h1>
              </div>
                <hr/>
              <div class="modal-body">
                <slot name="body">
                    <h1>{{menu.nombre}}</h1>
                     <h1>le temps {{menu.time}}</h1>
                    <article>{{menu.description}} </article>
                </slot>
              </div>
               <hr/>
              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button"><router-link to="/"> Back </router-link></button>
                </slot>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
export default {
  data(){
    return {
        id:this.$route.params.id,
        menu:{
        }
    }
  },
  created(){
      console.log(this.id);
      this.$http.get('https://projetweb-9605d.firebaseio.com/menu.json').then(
      function(data){
          console.log(this.id);
          console.log("successs");
          console.log(data);
      })
  }
}
</script>
<style scoped>
hr{
  border-color : orange;
  size: 15px;
}
.modal-mask{
  text-align: center;
}

</style>