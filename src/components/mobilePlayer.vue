<template>

  <v-container fluid
               grid-list-xs>
    <!-- video player window -->
    <v-layout row
              column>
      <v-flex xs12>
        <v-card class="transparent"
                height="auto"
                flat>
          <v-container fluid>
            <v-layout row
                      wrap>
              <v-flex xs12>
                <playerWindow v-bind:id="id" />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- tool belt window -->
    <v-layout row
              column>
      <v-flex xs12>
        <!-- <v-container fluid
                     height="auto"> -->
        <toolBelt v-bind:id="id" />

        <!-- </v-container> -->
        <!-- <v-card class="transparent"
                height="auto">
        </v-card> -->
      </v-flex>
    </v-layout>
    <v-layout row
              wrap
              fill-height>
      <v-flex xs12>
        <v-card class="transparent"
                height="250px">
          <v-card-text dark>next video feed</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import playerWindow from '@/components/playerWindow.vue'
import toolBelt from '@/components/toolBelt'

export default {
  props: ['id'],
  components: {
    playerWindow,
    toolBelt
  },
  computed: {
    loading () {
      return this.$store.getters.loading
      // return true
    },
    loadedPost () {
      // console.log('postId: ' + this.id)
      return this.$store.getters.loadedPost(this.id)
    }
    // ,
    // videoLoaded () {
    //   return true
    // }
  }
}
</script>

<style>
</style>
