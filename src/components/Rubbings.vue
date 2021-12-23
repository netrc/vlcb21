<template>
  <v-container class='ctest'>
    <v-row >

      <v-col class="mb-1" cols="3">
        <v-row v-for="rn in rubbingNames" :key="rn" >
          <v-btn block plain @click="rrClick(rn)"> {{rn}} </v-btn>
        </v-row>
      </v-col>

      <v-col class="mb-1" cols="9">
        <v-row>

 <v-container>
  <v-row>
        <h1> {{currRubbing.fields.name}} </h1>
        <br>
  </v-row>
  <v-row>
        {{currRubbing.fields.mainNote}}
  </v-row>
  <v-row>
        <v-img :src="rimgsrc"> </v-img>
  </v-row>
 </v-container>

        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
const vlcb = require('../vlcb.js')

  export default {
    name: 'Rubbings',

    data: () => ({
      rubbingNames: vlcb.rubbings.names,
      currRubbing: vlcb.rubbings.getName(vlcb.rubbings.names[0])[0],
      rimgsrc: null,
    }),

    methods: {
      rrClick: function(n) {
        console.log(`-------------------------${n}------------`)
        const u = vlcb.rubbings.getName(n)[0]
console.dir(u)
        this.currRubbing = u    // NOTE DAMN WELL - this only works in function not ()=>
        if (('pictures' in u.fields) && u.fields.pictures.length>0) {
          const r = u.fields.pictures[0]
console.log(`r: ${r}`)
          const p = vlcb.pictures.getId(r)
console.dir(p)
          const full = p[0].fields.full
          this.rimgsrc = full
        } else {
          this.rimgsrc = ''
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
