import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouteur from 'vue-router'
import '@fortawesome/fontawesome-free';
import VueRouter from 'vue-router';
import Routes from './routers'

export const bus = new Vue();

Vue.use(VueResource);
Vue.use(VueRouteur);

const router = new VueRouter({
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

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

