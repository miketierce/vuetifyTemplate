<template>
  <v-content>
    <!-- <v-container fluid>
      <v-layout row
                wrap
                justify-center
                align-center> -->
    <v-flex xs12
            v-show="!playerPaused">
      <!-- {{duration}} -->
      <!-- paused: {{playerPaused}} -->
      <v-fade-transition leave-absolute>
        <div id="player"
             class="elevation-10 rounded">
          <vue-plyr @timeupdate="videoTimeUpdated"
                    @playing="nowPlaying"
                    @ready="playerReady"
                    @statechange="playerState"
                    :emit="['ready','timeupdate','playing', 'statechange']"
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
      </v-fade-transition>
    </v-flex>
    <v-flex xs12
            v-if="playerPaused">
      <v-fade-transition leave-absolute>
        <v-card hover
                height="auto"
                class="elevation-10 rounded">
          <v-img @click="playVideo"
                 :src="loadedPost.ytVideoDetails.coverImgUrl"
                 aspect-ratio="1.77">
            <v-card flat
                    class="transparent fill-height bottom-gradient "
                    aspect-ratio="1.77">
              <v-container grid-list-xs
                           fluid
                           fill-height>
                <v-layout row
                          wrap
                          fill-height
                          justify-center
                          align-center>
                  <div v-if="loading"
                       class="text-xs-center">
                    <v-progress-circular :size="70"
                                         :width="7"
                                         color="white"
                                         indeterminate>

                      <v-btn @click="playVideo"
                             large
                             icon
                             color="primary"
                             disabled>
                        <v-icon>play_arrow</v-icon>
                      </v-btn>
                    </v-progress-circular>

                    <h2 class="white--text headline text-xs-right">{{loadedPost.stvData.title}}</h2>
                  </div>

                  <div v-if="!loading"
                       class="text-xs-center">

                    <v-btn @click="playVideo"
                           large
                           icon
                           color="primary">
                      <v-icon>play_arrow</v-icon>
                    </v-btn>

                    <h2 class="white--text headline">{{loadedPost.stvData.title}}</h2>
                  </div>

                </v-layout>
              </v-container>
            </v-card>

          </v-img>
        </v-card>
      </v-fade-transition>
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
      player: '',
      playing: false,
      playerPaused: true,
      loading: false,
      poster: 'http://dummy-images.com/maps/dummy-480x270-CantinoPlanisphere1502.jpg'
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
        controls: ['play-large', 'play'],
        debug: false

      }
      return options
    },

    loadedPost () {
      return this.$store.getters.post
    }
  },

  methods: {
    playVideo () {
      this.loading = true
      this.$refs.player.player.play()
    },
    playerState (event) {
      console.log('state: ' + event.detail.code)
      if (event.detail.code === -1) {
        console.log('player unstarted')
      }
      if (event.detail.code === 0) {
        console.log('player ended')
      }
      if (event.detail.code === 1) {
        this.playerPaused = false
        this.loading = false
        console.log('player playing')
      }
      if (event.detail.code === 2) {
        this.playerPaused = true
        console.log('player paused')
      }
      if (event.detail.code === 3) {
        console.log('player buffering')
      }
      if (event.detail.code === 3) {
        console.log('video cued')
      }
    },
    nowPlaying: function (event) {
      if (event.detail.plyr.playing) {
        this.playing = true
      } else {
        this.playing = false
      }
      console.log(event.detail.plyr.playing)
    },
    seekBack (sec, direction) {
      if (direction === 'forward') {

      } else {
        if (direction === 'backward') {
          // console.log('you fucking rock')
          return (t) => {
            return this.player.currentTime - sec
          }
        }
      }
    },
    playerReady () {
      if (this.loadedPost.postType === 'Clip') {
        this.player.currentTime = this.loadedPost.time.start
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

      if (this.loadedPost.postType === 'Clip') {
        if (this.player.currentTime > this.loadedPost.time.end) {
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

.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.76) 0%,
    transparent 472px
  );
}
</style>
