<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-5" cols="12" >
        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>

    <v-row justify="center">
      <Testcomponent :propOne="aDataKey" :propTwo="adk2"></Testcomponent>
    </v-row>

    <v-row justify="center">
    userDetails:  ({{ userDetails }})
    </v-row>

    <v-row justify="center">
    roles ({{ userRoles }})
    </v-row>

    </v-row>
  </v-container>
</template>

<script>
  import Testcomponent from './Testcomponent'
  import { getters } from '../store.js'

  export default {
    name: 'HelloWorld',

    computed: {
      ...getters
    },
    data: () => ({
      aDataKey: 'from tc page via a data key',
      adk2: { msg: 'foo bar baz, set a object key in data in parent component, passed to child prop', k2: 32 },
      ecosystem: [
        { text: 'vuetify-loader', href: 'https://github.com/vuetifyjs/vuetify-loader', },
        { text: 'github', href: 'https://github.com/vuetifyjs/vuetify', },
        { text: 'awesome-vuetify', href: 'https://github.com/vuetifyjs/awesome-vuetify', },
        { text: 'Explore components', href: 'https://vuetifyjs.com/components/api-explorer', },
        { text: 'Select a layout', href: 'https://vuetifyjs.com/getting-started/pre-made-layouts', },
        { text: 'Frequently Asked Questions', href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
    components: {
      'Testcomponent': Testcomponent,
    }
  }
</script>
