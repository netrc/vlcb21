import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Churches from './components/Churches';
import Brasses from './components/Brasses';
import Rubbings from './components/Rubbings';
import Home from './components/Home';

Vue.config.productionTip = false

Vue.use(VueRouter)


const routes = [
  { path: '/', component: Home },
  { path: '/churches', component: Churches },
  { path: '/brasses', component: Brasses },
  { path: '/rubbings', component: Rubbings },
]

const router = new VueRouter( {
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: routes
} )

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
