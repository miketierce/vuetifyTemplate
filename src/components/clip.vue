<template>
  <v-content>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-btn v-if="recording === false"
                 class="primary"
                 @click="record">
            Clip</v-btn>
          <v-btn v-if="recording === true"
                 primary
                 class="error"
                 @click="stopRecord">
            Stop Recording</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <!-- <div>{{clipDimensions}}</div> -->
          <div>Duration: {{clipTime}}</div>
          <div>Clip Start: {{clippedStartTime}}</div>
          <div>Clip Calc Start: {{clipCalcStartTime}}</div>
          <div>Clip End: {{clippedStopTime}}</div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  props: ['duration', 'id'],
  methods: {
    record () {
      this.recording = true
      this.clippedStartTime = this.clipTime
      this.clipCalcStartTime = (this.clipTime - 2)

      // this.$store.dispatch('stopClipVideo', { clippedStopTime: (this.duration + 1) })
    },
    stopRecord () {
      this.recording = false
      this.clippedStopTime = (this.clipTime + 2)
      this.$store.dispatch('clipVideo', {
        videoId: this.CourseContent.contentDetails.videoId,
        clippedStartTime: this.clippedStartTime,
        clipCalcStartTime: this.clipCalcStartTime,
        clippedStopTime: this.clippedStopTime })
    }
  },
  computed: {
    CourseContent () {
      // console.log(this.id)
      return this.$store.getters.loadedPost(this.id)
    },
    calcStartTime (s) {
      return (s - 0.02)
    },
    clipDimensions () {
      return this.$store.getters.loadClipDimensions
    },
    clipTime () {
      return this.$store.getters.clipDuration.timestamp
    }
  },
  data () {
    return {
      recording: false,
      clippedStartTime: '',
      clipCalcStartTime: '',
      clippedStopTime: ''
    }
  }
}
</script>

<style>
</style>
