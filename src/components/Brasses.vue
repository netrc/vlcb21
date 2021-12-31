<template>
  <v-container class='ctest'>
    <v-row >

      <v-col class="mb-1" cols="3">
        <v-row v-for="bn in brassNames" :key="bn" >
          <v-btn block plain @click="brClick(bn)"> {{bn}} </v-btn>
        </v-row>
      </v-col>

      <v-col class="mb-1" cols="9">
        <v-row>

 <v-container>
  <v-row>
        <h1> {{currBrass.fields.name}} </h1>
        <br>
  </v-row>
  <v-row v-html="currBrass.mainNote_html">
  </v-row>
  <v-row>
        <v-img :src="bimgsrc"> </v-img>
  </v-row>
 </v-container>

        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
const vlcb = require('../vlcb.js')
const md = require('markdown-it')()

  export default {
    name: 'Brasses',

    data: () => ({
      brassNames: vlcb.brasses.names,
      currBrass: vlcb.brasses.getName(vlcb.brasses.names[0])[0],
      bimgsrc: null,
    }),

    methods: {
      brClick: function(n) {
        console.log(`-------------------------${n}------------`)
        const b = vlcb.brasses.getName(n)[0]
console.dir(b)
        this.currBrass = b    // NOTE DAMN WELL - this only works in function not ()=>
        this.currBrass.mainNote_html = md.render(b.fields.mainNote)
        if (('pictures' in b.fields) && b.fields.pictures.length>0) {
          const r = b.fields.pictures[0]
console.log(`r: ${r}`)
          const p = vlcb.pictures.getId(r)
console.dir(p)
          const full = p[0].fields.full
          this.bimgsrc = full
        } else {
          this.bimgsrc = ''
        }
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
