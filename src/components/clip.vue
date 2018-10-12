<template>
  <v-content>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-btn v-if="!recording"
                 class="error"
                 @click="startRecord"
                 hover
                 ripple
                 block>
            Record
          </v-btn>
          <v-btn v-if="recording"
                 class="error"
                 @click="stopRecord"
                 hover
                 ripple
                 block>
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
          <!-- <div>Clip Time: {{clipDuration}}</div> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  // watch: {
  //   $route (to, from) {
  //     return this.$store.getters.loadedPost(this.$route.params.id)
  //   }
  // },
  props: ['duration'],
  methods: {
    calcStartTime (s) {
      if (s - 2 < 0) {
        return 0
      } else {
        return (s - 2)
      }
    },
    startRecord () {
      this.recording = true
      this.clippedStartTime = this.clipTime
      this.clipCalcStartTime = this.calcStartTime(this.clipTime)
      this.recordTime = setInterval(this.recordTime, 1000)
    },
    stopRecord () {
      this.recording = false
      this.recordTime = 0
      this.clippedStopTime = (this.clipTime + 2)
      const payload = {
        postType: 'clip',
        stvId: this.loadedPost.stvId,
        ytTitle: this.loadedPost.ytTitle,
        stvTitle: this.loadedPost.stvTitle,
        stvAuthor: this.loadedPost.ytChannelTitle,
        ytDescription: this.loadedPost.ytDescription,
        stvDescription: this.loadedPost.stvDescription,
        ytThumbnailHigh: this.loadedPost.ytThumbnailHigh,
        ytChannelId: this.loadedPost.ytChannelId,
        ytChannelTitle: this.loadedPost.ytChannelTitle,
        ytVideoId: this.loadedPost.ytVideoId,
        ytPublishedAt: this.loadedPost.ytPublishedAt,
        stvPublishedAt: this.loadedPost.stvPublishedAt,
        stvPlayCount: this.loadedPost.stvPlayCount,
        uploadUser: this.loadedPost.uploadUser,
        startTime: this.clipCalcStartTime,
        endTime: this.clippedStopTime,
        duration: this.recordDuration,
        isClip: true }
      this.$store.dispatch('createVideoPost', payload)
      console.log('clip details: start- ' + payload.startTime + 'end- ' + payload.stopTime)
    }
  },
  watch: {
    $route (to, from) {
      this.id = this.$route.params.id
      return this.$store.getters.loadedPost(this.$route.params.id)
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    loadedPost () {
      return this.$store.getters.loadedPost(this.id)
    },

    clipDimensions () {
      return this.$store.getters.loadClipDimensions
    },
    clipTime () {
      return this.$store.getters.clipDuration.timestamp
    },
    recordDuration () {
      return (this.clippedStopTime - this.clipCalcStartTime)
    }
    // stvAuthor () {
    //   if (this.editAuthor !== null) {
    //     return this.editAuthor
    //   } else {
    //     return this.loadedPost.ytChannelTitle
    //   }
    // }
  },
  data () {
    return {
      recording: false,
      clippedStartTime: '',
      clipCalcStartTime: '',
      clippedStopTime: '',
      recordTime: 0,
      editAuthor: null
    }
  }
}
</script>

<style>
</style>
