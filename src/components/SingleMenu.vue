<template>
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                Please fill in this form to create an account
              </div>
                <hr/>
              <div class="modal-body">
                <slot name="body">
                    <h1>{{menu.id}}</h1>
                    <article>{{menu.title}} </article>
                </slot>
              </div>
               <hr/>
              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="$emit('close')">Cancel</button>
                  <button v-on:click.prevent="addUser" @click="$emit('close')" class="modal-default-button" type="submit">Sign Up</button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
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
      this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then(
      function(data){
          console.log(this.id);
          this.menu = data.body;
      })
  }
}
</script>
<style scoped>
hr{
  border-color : orange;
  size: 15px;
}


</style>