<template>
  <v-container class='ctest'>

    <v-carousel height="600">

      <v-carousel-item>
        <v-row class="fill-height" align="center" justify="center">
        <v-img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Wootton_Warwen_Church-1.jpg"></v-img>
        </v-row>
      </v-carousel-item>

      <v-carousel-item>
        <v-row class="fill-height" align="center" justify="center">
        <v-img src="https://www.britainexpress.com/images/attractions/editor/Wootton-Wawen-5973.jpg"></v-img>
        </v-row>
      </v-carousel-item>

      <v-carousel-item>
        <v-row class="fill-height" align="center" justify="center">
        <v-img src="https://lh4.googleusercontent.com/-mpUF1M2JjZo/UChFVkeBWaI/AAAAAAAAMT4/o9H9dp9CSLA/s800/VLC-7-a.jpg"></v-img>
        </v-row>
      </v-carousel-item>
    
    </v-carousel>

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
