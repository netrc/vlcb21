<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12" >
        <v-row justify="center">
            {{ d_one  }}
            <br>
            <br>
            ... {{ propOne }} ...
            <br>
            ::: {{ propTwo.msg }} :::
            <br>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Testcomponent',

    props: [ 'propOne', 'propTwo' ],

    data: () => ({
      d_one: 'some random data',
      d_bar: '',
    }),
  }
</script>
