<template>
  <v-container class='ctest'>
    <v-row >

      <v-col class="mb-1" cols="3">
        <v-row v-for="rn in vlcnAll" :key="rn" >
          <v-btn block plain @click="rrClick(rn)"> {{rn}} </v-btn>
        </v-row>
      </v-col>

      <v-col class="mb-1" cols="9">
        <v-row>

 <v-container>
  <v-row>
        <h1> {{currRubbing.vlcn}}: {{currRubbing.name}} </h1>
        <br>
  </v-row>
  <v-row>
        {{currRubbing.desc}}
  </v-row>
  <v-row>
        location: {{currRubbing.location}}
  </v-row>
  <v-row>
        {{currRubbing.mainNote}}
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

    data: () => {
      return {
        rubbingNames: vlcb.rubbings.names,
        vlcnAll: vlcb.rubbings.vlcnAll,
        currRubbing: vlcb.rubbings.getName(vlcb.rubbings.names[0])[0],
        rimgsrc: null,
      }
    },

    methods: {
      rrClick: function(n) {
        console.log(`rubbings: click on ${n}`)
        const u = vlcb.rubbings.byVLCN(n)
console.dir(u)
        this.currRubbing = u    // NOTE DAMN WELL - this only works in function not ()=>
// why not fields? // note no 'fields' in html {{}} above
        if (('pictures' in u) && u.pictures.length>0) {
          const r = u.pictures[0]
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
