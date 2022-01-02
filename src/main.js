import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

import Home from './components/Home';
import Churches from './components/Churches';
import Brasses from './components/Brasses';
import Rubbings from './components/Rubbings';
import Testpage from './components/Testpage';

Vue.config.productionTip = false

Vue.use(VueRouter)


const routes = [
  { path: '/', component: Home },
  { path: '/churches', component: Churches },
  { path: '/brasses', component: Brasses },
  { path: '/rubbings', component: Rubbings },
  { path: '/testpage', component: Testpage },
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
