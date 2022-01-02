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

      <router-link to="/testpage"> Testpage </router-link>
      <v-spacer></v-spacer>

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

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.v-main {
  background-image: 'assets/bg-charcoalPaper.png';
}
a {
  color: WhiteSmoke !important;
}
</style>
