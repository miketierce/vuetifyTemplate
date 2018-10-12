<template>
  <v-container grid-list-xs
               fluid>
    <v-layout justify-start
              column
              fill-height>
      <v-flex xs12>
        <playerWindow v-if="videoLoaded"
                      v-bind:videoUrl="videoUrl" />
        <clipper v-bind:id="id" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import clipper from '@/components/clip.vue'
import playerWindow from '@/components/playerWindow'

export default {
  mounted () {
    // this.$store.dispatch('setVideoLoaded', true)
  },
  // props: ['id'],
  components: {
    playerWindow,
    clipper
  },
  watch: {
    $route (to, from) {
      return this.$store.getters.loadedPost(this.$route.params.id)
    }
  },
  computed: {
    videoLoaded () {
      return this.$store.getters.videoLoaded
    },
    loading () {
      return this.$store.getters.loading
      // return true
    },
    loadedPost () {
      // console.log('postId: ' + this.id)
      return this.$store.getters.loadedPost(this.$route.params.id)
    },
    videoUrl () {
      return 'https://www.youtube.com/embed/' + this.loadedPost.ytVideoId + '??iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1'
    },
    id () {
      return this.$route.params.id
    }

  },
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
