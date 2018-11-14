<template>
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <p>Veuilliez remplir le formulaire :</p>
              </div>
                <hr/>
              <div class="modal-body">
                <slot name="body">
                      <form id="form" >
                        <div id="checkboxes">
                          <label>Man </label>
                          <input type="radio" value="Mr" v-model.lazy="newUser.gender" required/>
                          <label>Woman </label>
                          <input type="radio" value="Mme" v-model.lazy="newUser.gender" required/>
                        </div>
                        <br>
                        <input type="text" placeholder="votre nom" v-model.lazy="newUser.name" required/>
                        <br>
                        <input type="text" placeholder="votre prenom" v-model.lazy="newUser.userName" required/>
                        <br>
                        <input type="password" placeholder="votre mot de passe" v-model.lazy="newUser.password" required/>
                        <br>
                        <input type="email"  placeholder="votre email" v-model.lazy="newUser.email" required/>
                        <br>
                        <br>
                        <label> Particulier ou Professionelle ? </label>
                        <select v-model="newUser.userType">
                            <option v-for="userType in userTypes" :key="userType.id" > {{userType}}</option> 
                        </select>
                        <br>
                      </form>
                      <br>
                      <hr/>
                      <div id="preview">
                        <h4>Information du compte</h4>
                        <p> {{ newUser.userType}}</p>
                        <p>{{newUser.gender}} {{newUser.name}}</p>
                        <p>{{newUser.userName}}</p>
                        <p>{{newUser.email}}</p>
                      </div>
                </slot>
              </div>
               <hr/>
              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="$emit('close')">Quitter</button>
                  <button v-on:click="valideUserFirebase(),$emit('close'); " class="modal-default-button" type="submit">Créer</button>
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
    userfireBase:{
      type: JSON
    }
  },
  components:{
  
  },
  data(){
    return {
      newUser:{
        userType:"",
        name: "",
        userName:"",
        gender:"",
        password:"",
        email: ""
      },
      userTypes:['Professionelle',
        'Particulier',
      ],
       userfireBase:{
        password:" ",
        email: " "
      }
    }
  },
  methods:{
    addUser:function () {
        console.log("ICI");
        this.$http.post('https://projetweb-9605d.firebaseio.com/menu.json',this.newUser).then(function(data){
           console.log(data);
        });
    },
    valideUserFirebase:function(){
      console.log("FIREBASE CONECTE");
      console.log(this.newUser);
      bus.$emit('userFireBaseChange',this.newUser);
    }
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

a:link 
{ 
text-decoration:none; 
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
