<template>
  <v-content>
    <v-layout row
              wrap>
      <v-flex xs12>
        <h3>Notepad </h3>
        <v-card fluid
                flat
                height="auto"
                color="grey lighten-3">
          <v-textarea name="input-7-1"
                      v-model="notebook"
                      auto-grow
                      flat
                      hint="Galactic Sticky Note"></v-textarea>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      notebook: null
    }
  }
}
</script>

<style>
</style>
