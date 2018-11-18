<template>
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                Remplire votre Recette
              </div>
                <hr/>
              <div class="modal-body">
                <slot name="body">
                      <form id="form" >
                         <label> Type </label>
                        <select v-model="menu.type">
                            <option v-for="type in types" :key="type.id" > {{type}}</option> 
                        </select>
                        <br>
                        <input type="text" placeholder="nom de la recette" v-model.lazy="menu.name" required/>
                        <br>
                        <input type="number" placeholder="nombre de personnes" v-model.lazy="menu.nombres" required/>
                        <br>
                        <input type="text" placeholder=" votre email" v-model.lazy="menu.mail" required/>
                        <br>
                       <input type="number"  placeholder="temps de preparation" v-model.lazy="menu.time" required/>
                       <br>
                       <br>
                        <textarea rows="10" cols="64" v-model.lazy="menu.description" required>
                        </textarea>
                        <br>
                      </form>
                      <hr/>
                      <div id="preview">
                        <p>Recette: {{menu.name}}</p>
                      </div>
                </slot>
              </div>
               <hr/>
              <div class="modal-footer">
                <slot name="footer">
                  <router-link to="/" @click="$emit('close')" ><button @click="$emit('close')" class="modal-default-button"> Quitter </button></router-link>
                  <router-link to="/"><button v-on:click="addMenu(),$emit('close'); " class="modal-default-button" type="submit"> Ajouter </button></router-link>
                </slot>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
import '@fortawesome/fontawesome-free';
import { functions } from 'firebase';

export default {
  components:{
  },
  data(){
    return {
      menu:{
        id:"",
        name:"",
        type:"",
        description:"",
        mail:"",
        time:0,
        likes:0,
        nombres:0,
        show:false
      },
      types:['Entré',
        'Plat','Dessert'
      ],
    }
  },
  // computed property for form validation state
  computed: {
    
  },
  methods:{
      addMenu:function () {
        console.log("ICI 3");
        this.menu.time =0;
        this.$http.post('https://projetweb-9605d.firebaseio.com/menu.json',this.menu).then(function(data){
        console.log(data);

        const formData = new FormData();
        formData.append('myFile', this.menu.file, this.menu.file.name)
        this.$http.post('gs://projetweb-9605d.appspot.com/file-upload', formData).then(function(data){
          console.log(formData);
          });
        });
        },

      onFileSelected:function(event){
        console.log(event);
        this.menu.file = event.target.files[0];
        console.log(this.menu.file)
      },
      onUploadFile:function(event){
        console.log(event);
        this.menu.file.name = ''+this.menu.name+'_'+this.file.name
        console.log(this.menu.file.name);
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
	padding:7px 0 7px 0;
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
  width: 400px;
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

.modal-body input[type=text], input[type=email],select,input[type=number],input[type=file] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=area]{
  width: 100%;
  height: 13em;
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
a:link 
{ 
text-decoration:none; 
} 
</style>
