<template>
  <v-container fluid
               class="scroll-y"
               max-height="400px">
    <v-layout row
              wrap>
      <v-flex xs12>
        <v-textarea name="input-7-1"
                    v-model="notebook"
                    auto-grow
                    flat
                    hint="Galactic Sticky Note">
        </v-textarea>
      </v-flex>
    </v-layout>
  </v-container>
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
