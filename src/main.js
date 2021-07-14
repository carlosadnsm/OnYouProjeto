// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {routes} from './routes';//Colocando ';' para gantir que foi exportado já que não estamos importando do vue e sim do meu JS
import VueRouter from 'vue-router';


window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false
Vue.use(VueRouter); //após importar nossas rotas defini um vue Router

const router=new VueRouter({
  routes ,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',//obj de configurações onde colocamos os componentes
  router,
  render: h => h(App)//recebe e reenderiza no vue
})
