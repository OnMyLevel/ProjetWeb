<template>
       <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                  Vos identifiants
              </div>
               <hr/>
              <div class="modal-body">
                <slot name="body">
                  <form id="form">
                        <input type="email"  placeholder="nomre adresse mail" v-model.lazy="user.email" required />
                        <br>
                        <input type="password"  placeholder="votre mot de passe" v-model.lazy="user.password" required />
                        <br>
                   </form>
                </slot>
              </div>
               <hr/>
               <br>
              <div class="modal-footer">
                <slot name="footer">
                  <br>
                  <button class="modal-default-button" @click="$emit('close')">Quitter</button>
                  <router-link to="/admin"><button  class="modal-default-button" type="submit" v-on:click="valideUserFirebase(),$emit('close');" >Connexion</button></router-link>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
import '@fortawesome/fontawesome-free';
import {bus} from '../main';
export default {
  props:{
    currentUserfireBase:{
      type: JSON
    }
  },
  components:{
  },
  data(){
    return {
     user: {
           name: '',
           email: ''
      },
      currentUserfireBase:{
        password:" ",
        email: " "
      },
    }
  },
  // computed property for form validation state
  computed: {
    
  },
  methods:{

      valideUserFirebase:function(){
      console.log("FIREBASE CONECTE");
      console.log(this.user);
        bus.$emit('currentUserfireBaseChange',this.user);
        bus.$emit('currentUserConnect',this.user);
        
        
      },
      updateShowModalSignIn:function(){
        this.showModalSignIn= true;
      },
      updateShowModalSignUp:function(){
        this.showModalSignUp= true;
      },
  }
}
</script>
<style scopped>

hr{
  border-color : orange;
  size: 15px;
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
button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: orange;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  height: 100%;
	padding:6px 0 6px 0;
	font:bold 13px Arial;
	background:orange;
	color:#fff;
	border-radius:0px;
	width:100px;
	border:none;
  margin-left: 10%; 
}

.modal-body input[type=text], input[type=email],input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.modal-body input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.modal-body input[type=submit]:hover {
    background-color: #45a049;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
user {
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-top: 1px solid #eee;
  overflow: hidden;
  transition: all .25s ease;
}

.user:last-child {
  border-bottom: 1px solid #eee;
}

.v-enter, .v-leave-active {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
}

.errors {
  color: #f00;
}

#preview{
  border: 1px dotted #ccc;
  text-align: center;
}
a{
  color: white;
}
</style>
