<template>
  <v-container class='ctest'>
  <v-row>
        <h1> HOME </h1>
  </v-row>
  <v-row>
        <v-img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Wootton_Warwen_Church-1.jpg"></v-img>
  </v-row>
 </v-container>
</template>

<script>
//import App from '../App.vue'
const vlcb = require('../vlcb.js')

  export default {
    name: 'Home',

    data: () => ({
      // probably get pics with HomeCarousel tag
      churchNames: vlcb.churches.names,
      currChurch: vlcb.churches.getName(vlcb.churches.names[0])[0],
      cimgsrc: null,
    }),

    methods: {
      dummyf: function(n) {
        console.log(`-------------------------${n}------------`)
      }
    }
  }
</script>
<style scoped>
.home {
  background-image: url('../assets/bg-charcoalPaper.png');
  background-repeat: repeat;
}
h1,p,button {
  color: WhiteSmoke !important;
}
</style>
