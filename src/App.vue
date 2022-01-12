<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>


      <v-spacer></v-spacer>
      <router-link to="/churches"> Churches </router-link>
      <v-spacer></v-spacer>

      <router-link to="/brasses"> Brasses </router-link>
      <v-spacer></v-spacer>

      <router-link to="/rubbings"> Rubbings </router-link>
      <v-spacer></v-spacer>

      <v-menu  r:rounded="rounded" open-on-hover offset-y transition="slide-x-transition" bottom right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            Info
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item router to="/blog"> <v-list-item-title> Blog </v-list-item-title> </v-list-item>
          <v-list-item router to="/testpage"> <v-list-item-title> Test page </v-list-item-title> </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>

  
<a class="btn btn-primary btn-sm" href="/.auth/login/github" v-if="!userDetails">Login</a> 
                                
<a class="btn btn-primary btn-sm" href="/.auth/logout" v-if="userDetails">Log out</a>
<span v-if="userDetails">   ... {{userDetails}} </span>


      <v-btn
        href="https://netrc.com/"
        target="_blank"
        text >
        <span class="mr-2">netrc </span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view>
      </router-view>
    </v-main>

  </v-app>
</template>

<script>
import { getters, mutations, actions } from './store.js'

export default {
  name: 'App',

  data: () => ({
    user: '',
    xu: {
      userDetails: {},
      role: 'unauthenticated',
      name: 'none',
      email: 'n@none'
    }
  }),

  beforeMount: function() {
    console.log('App.vue - BEFOREMOUNT')
    this.login() // store.login
    console.log(`...${this.user}`)
    console.dir(this.user)
  },
  computed: { ///////// the store stuff
    ...getters
  },
  methods: {
    ...mutations, ...actions  //////////////// store stuff
  }

}
</script>
<style scoped>
.v-main {
  background-image: 'assets/bg-charcoalPaper.png';
}
a {
  color: WhiteSmoke !important;
}
</style>

