<template>
  <v-content>
    <!-- <v-container fluid>
      <v-layout row
                wrap
                justify-center
                align-center> -->
    <v-flex xs12>
      <div id="player"
           class="elevation-10 rounded">
        <vue-plyr @timeupdate="videoTimeUpdated"
                  @playing="nowPlaying"
                  @ready="playerReady"
                  :emit="['ready','timeupdate','playing']"
                  ref="player"
                  :options="playerOptions">
          <v-card class="plyr__poster rounded"
                  height="auto">
            <iframe class="rounded"
                    :src="videoUrl"
                    allowfullscreen
                    allowtransparency>
            </iframe>
          </v-card>
        </vue-plyr>
      </div>
    </v-flex>
    <!-- </v-layout>
    </v-container> -->
  </v-content>
</template>

<script>

export default {
  name: 'App',
  props: ['videoUrl'],
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {
    this.player = this.$refs.player.player
    // this.player.on('ready')
    // this.seekBack(30, 'backward')
  },
  computed: {
    playerOptions () {
      const options = {
        title: 'This is an example video',
        playsinline: true,
        volume: 1,
        clicktoplay: true,
        controls: ['play', 'fullscreen'],
        debug: false
      }
      return options
    },
    loadedPost () {
      return this.$store.getters.loadedPost(this.$route.params.id)
    }
  },

  methods: {
    nowPlaying: function (event) {
      console.log(event)
    },
    seekBack (sec, direction) {
      if (direction === 'forward') {

      } else {
        if (direction === 'backward') {
          console.log('you fucking rock')
          return (t) => {
            return this.player.currentTime - sec
          }
        }
      }
    },
    playerReady () {
      if (this.loadedPost.isClip) {
        this.player.currentTime = this.loadedPost.startTime
      }
      console.log('player ready')
      this.$store.dispatch('setVideoLoaded', true)
    },
    toggleControls () {
      this.toggleControlIndicator = true
      this.toggleLabel = 'Hide Controls'
    },
    videoTimeUpdated: function (event) {
      this.duration = this.player.currentTime
      this.$store.dispatch('videoTimestamp', { timestamp: this.player.currentTime })

      if (this.loadedPost.isClip) {
        if (this.player.currentTime > this.loadedPost.endTime) {
          this.player.stop()
        }
      }
    }
  }
}
</script>

<style scoped>
.plyr--video {
  border-radius: 5px;
}
</style>
