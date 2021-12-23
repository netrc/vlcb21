<template>
  <v-container class='ctest'>
    <v-row >

      <v-col class="mb-1" cols="3">
        <v-row v-for="cn in churchNames" :key="cn" >
          <v-btn block plain @click="chClick(cn)"> {{cn}} </v-btn>
        </v-row>
      </v-col>

      <v-col class="mb-1" cols="9">
        <v-row>

 <v-container>
  <v-row>
        <h1> {{currChurch.fields.name}} </h1>
        <br>
  </v-row>
  <v-row>
        {{currChurch.fields.address}}  Geo: {{currChurch.fields.latlon}}
  </v-row>
  <v-row>
        Year: {{currChurch.fields.year}}
  </v-row>
  <v-row>
        {{currChurch.fields.mainNote}}
  </v-row>
  <v-row>
        <v-img :src="cimgsrc"> </v-img>
  </v-row>
 </v-container>

        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
//import App from '../App.vue'
const vlcb = require('../vlcb.js')

  export default {
    name: 'Churches',

    data: () => ({
      churchNames: vlcb.churches.names,
      currChurch: vlcb.churches.getName(vlcb.churches.names[0])[0],
      cimgsrc: null,
    }),

    methods: {
      chClick: function(n) {
        console.log(`-------------------------${n}------------`)
        const c = vlcb.churches.getName(n)[0]
console.dir(c)
        this.currChurch = c    // NOTE DAMN WELL - this only works in function not ()=>
        if (('pictures' in c.fields) && c.fields.pictures.length>0) {
          const r = c.fields.pictures[0]
console.log(`r: ${r}`)
          const p = vlcb.pictures.getId(r)
console.dir(p)
          const full = p[0].fields.full
          this.cimgsrc = full
        } else {
          this.cimgsrc = ''
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
