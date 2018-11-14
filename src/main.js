import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouteur from 'vue-router'
import '@fortawesome/fontawesome-free';
import VueRouter from 'vue-router';
import Routes from './routers';
import firebase from 'firebase';
import VueSession from 'vue-session';
import VueSessionStorage from 'vue-sessionstorage';


Vue.use(VueResource);
Vue.use(VueRouteur);
Vue.use(VueSession);
Vue.use(VueSessionStorage);

export const session = VueSession;

export const bus = new Vue();
export const router = new VueRouter({
  routes : Routes,
  mode:'history'
})
// custom directives
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
})

// custom directives
Vue.directive('rainbow', {

  isLiteral: false,
  isEmpty: false,
  twoWay: true,
  
  inserted: function(el) {
    console.log('inserted input')
  },
  update: function(el, binding, vnode, oldVnode) {
    // do something based on the updated value
    // this will also be called for the initial value
    console.log('update input')
    // here i need to add code to set directly a value on an element or 
    // in case it's a s pecial UI element, use jQuery call to communicate with it...
  },
  bind: function(el, binding, vnode) {
    console.log('bind input');
    el.style.color = "#" + Math.random().toString().slice(2,8)+";";
  }
});

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyAo4oz_JBEb4KrYzEcicCRT-xSq6JUwg38",
  authDomain: "projetweb-9605d.firebaseapp.com",
  databaseURL: "https://projetweb-9605d.firebaseio.com",
  projectId: "projetweb-9605d",
  storageBucket: "projetweb-9605d.appspot.com",
  messagingSenderId: "469810391449"
};
firebase.initializeApp(config);

export const db = firebase.database();
export const menuRef = db.ref('menu');
export const userRef = db.ref('user');

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})



