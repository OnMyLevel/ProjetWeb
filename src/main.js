import Vue from 'vue'
import App from './App.vue'
export const bus = new Vue();

import '@fortawesome/fontawesome-free';

new Vue({
  el: '#app',
  render: h => h(App)
})
/*
Vue.component('modal-sign-up', {
  template: '#modal-template-signup'
})*/
