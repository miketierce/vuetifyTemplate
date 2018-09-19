<template>
  <div id="app">
    <div>Duration: {{ duration }}</div>
    <vue-plyr @timeupdate="videoTimeUpdated"
              :emit="['timeupdate']"
              ref="player">
      <!-- <video>
        <source :src="videoUrl"
                type="video/mp4" />
      </video> -->
      <div class="plyr__video-embed">
        <iframe :src="videoUrl"
                allowfullscreen
                allowtransparency
                allow="autoplay">
        </iframe>
      </div>
    </vue-plyr>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['id'],
  data () {
    return {
      duration: null,
      player: null
    }
  },
  watch: {
    videoUrl () {
      console.log('source switch ' + this.videoUrl)
      this.player.source = {
        type: 'video',
        sources: [
          {
            src: this.videoUrl,
            provider: 'youtube'
          }
        ]
      }
    }
  },
  computed: {
    CourseContent () {
      console.log(this.id)
      return this.$store.getters.loadedPost(this.id)
    },
    videoUrl () {
      return 'https://www.youtube.com/embed/' + this.CourseContent.contentDetails.videoId + '?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1'
    }
  },
  components: {},
  mounted () {
    this.player = this.$refs.player.player
  },
  methods: {
    videoTimeUpdated: function (event) {
      this.duration = this.player.currentTime
    }
  }
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
