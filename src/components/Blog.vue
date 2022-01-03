<template>
 <v-container class="ctest">
  <v-row>
  <h1> Blog </h1>
  </v-row>
    <v-row >

      <v-col class="mb-1" cols="9">
        <v-row v-for="b in blogEntries" :key="b.title" >
        <h2> {{ b.title }} </h2>
          <v-row>
          ... {{ b.mdtext | mdRender }} ...
          </v-row>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
const vlcb = require('../vlcb.js')
const md = require('markdown-it')()


  export default {
    name: 'Blog',

    data: () => ({
      blogEntries: vlcb.notes.categoryIs('blog'),
    }),
    filters: {
      mdRender: function(t) { 
        return md.render(t) 
      }
    }
  }
</script>
<style scoped>
.ctest {
  background-image: url('../assets/bg-charcoalPaper.png');
  background-repeat: repeat;
}
h1,p,button {
  color: WhiteSmoke !important;
}
h1 {
  
}
</style>
