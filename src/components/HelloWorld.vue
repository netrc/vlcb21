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

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
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
  }
</script>
