<template>
  <v-content>
    <v-container fluid>
      <v-layout row
                wrap
                justify-center
                align-center>
        <!-- <v-flex xs12>
          <youtube-media :video-id="videoId"></youtube-media>
        </v-flex> -->
        <v-flex xs12>
          <div id="player"
               class="elevation-10 rounded">
            <vue-plyr :options="options"
                      class="rouded"
                      @timeupdate="videoTimeUpdated"
                      :emit="['timeupdate']"
                      ref="player">
              <v-card class="plyr__poster rounded"
                      height="auto">
                <iframe class="rounded"
                        :src="videoUrl"
                        allowfullscreen
                        allowtransparency
                        allow="autoplay">
                </iframe>
              </v-card>
            </vue-plyr>
          </div>
        </v-flex>
      </v-layout>

      <!-- <v-layout row
                wrap>
        <v-flex xs12>
          <v-btn @click="startRecorder"
                 class="mt-2"
                 flat
                 color="primary"
                 block>
            Record
          </v-btn>
        </v-flex>
      </v-layout> -->
    </v-container>
  </v-content>
</template>

<script>

export default {
  name: 'App',
  props: ['videoUrl'],
  data () {
    return {
      options: {
        title: 'This is an example video',
        playsinline: true,
        volume: 0,
        autoplay: false,
        controls: ['play', 'play-large', 'progress'],
        debug: false,
        starttime: 500,
        endtime: 800
      }
    }
  },
  components: {

  },
  mounted () {
    this.player = this.$refs.player.player
    // this.source = { type: 'video',
    //   sources: [
    //     { src: this.videoUrl,
    //       provider: 'youtube' }
    //   ]
    // }
    // this.player.currentTime = 120
    // this.videoId = this.$youtube.getIdFromURL(this.videoUrl)
    // this.startTime = this.$youtube.getTimeFromURL(this.videoUrl)
    // this.endTime = this.$youtube.getTimeFromURL(this.videoUrl)
  },
  computed: {
    loadedPost () {
      // console.log('postId: ' + this.id)
      return this.$store.getters.post
    }
    // videoId () {
    //   console.log('ytid - ' + this.loadedPost.ytid)
    //   return this.loadedPost.ytVideoId
    // }
  },

  methods: {

    toggleControls () {
      this.toggleControlIndicator = true
      this.toggleLabel = 'Hide Controls'
    },
    videoTimeUpdated: function (event) {
      this.duration = this.player.currentTime
      this.$store.dispatch('videoTimestamp', { timestamp: this.player.currentTime })
    }
  }
}
</script>

<style scoped>
.plyr--video {
  border-radius: 5px;
}
</style>
