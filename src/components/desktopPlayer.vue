<template>

  <v-container fluid
               grid-list-xs
               fill-height>
    <v-layout row
              wrap
              fill-height>
      <v-flex xs6>
        <v-card class="transparent"
                height="auto"
                flat>
          <v-container grid-list-xs>
            <v-layout row
                      wrap>
              <v-flex xs12>
                <playerWindow v-bind:id="id" />

              </v-flex>
            </v-layout>
          </v-container>
          <!-- <v-card-text dark>right column {{id}}</v-card-text> -->
        </v-card>
      </v-flex>
      <v-flex xs6>
        <!-- <v-card class="transparent"
                height="auto"> -->
        <toolBelt v-bind:id="id" />
        <!-- </v-card> -->
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
