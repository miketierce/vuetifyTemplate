<template>
  <v-content>
    <mq-layout mq="mobile">
      <mobilePlayer v-bind:id="id" />
    </mq-layout>

    <mq-layout mq="tablet+">
      <desktopPlayer v-bind:id="id" />
    </mq-layout>
    <!-- this is the helper object window -->
    <!-- <v-container fluid>
      <v-layout row
                wrap>
        <v-flex xs12>
          <v-card height="auto"
                  class="transparent">
            <v-card-text>
              <div class="display-2">Player Window</div>
              {{loadedPost}}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->

  </v-content>
</template>

<script>
import playerWindow from '@/components/playerWindow.vue'
import mobilePlayer from '@/components/mobilePlayer'
import desktopPlayer from '@/components/desktopPlayer'

export default {
  props: ['id'],
  components: {
    playerWindow,
    mobilePlayer,
    desktopPlayer
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
