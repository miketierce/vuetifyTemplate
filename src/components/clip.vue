<template>
  <v-content v-if="videoLoaded">
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
          <div>Recording: {{recordingLength | timeInHours }}</div>
          <div>Duration: {{clipTime}}</div>
          <!-- <div>Clip Start: {{clippedStartTime}}</div> -->
          <!-- <div>Clip Calc Start: {{clipCalcStartTime}}</div> -->
          <!-- <div>Clip End: {{clippedStopTime}}</div> -->
          <!-- {{clipperObject}} -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  beforeMount () {
    console.log('route id: ' + this.$route.params)
    this.$store.dispatch('setPostId', this.$route.params.id)
  },
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
      // const payload = {
      //   ...this.clipperObject
      // }
      // this should call insertVideoClip
      this.$store.dispatch('createVideoPost', this.clipperObject)
      console.log('clip stored')
      // console.log('clip details: start- ' + payload.startTime + 'end- ' + payload.stopTime)
    }
  },
  watch: {
    $route (to, from) {
      this.id = this.$route.params.id
      return this.$store.getters.post
    }
  },
  computed: {
    clipperObject () {
      const obj = {
        // ...this.loadedPost
        postType: 'Clip',
        playerUrl: 'https://www.youtube.com/embed/' +
                this.loadedPost.ytVideoDetails.videoId +
                '?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1',
        ytVideoDetails: {
          embeddable: this.loadedPost.ytVideoDetails.embeddable,
          videoId: this.loadedPost.ytVideoDetails.videoId,
          coverImgUrl: this.loadedPost.ytVideoDetails.coverImgUrl,
          title: this.loadedPost.ytVideoDetails.title,
          description: this.loadedPost.ytVideoDetails.description,
          duration: this.loadedPost.ytVideoDetails.duration,
          publishDate: this.loadedPost.ytVideoDetails.publishDate,
          channelTitle: this.loadedPost.ytVideoDetails.channelTitle,
          channelId: this.loadedPost.ytVideoDetails.channelId,
          viewCount: this.loadedPost.ytVideoDetails.viewCount,
          likeCount: this.loadedPost.ytVideoDetails.likeCount,
          dislikeCount: this.loadedPost.ytVideoDetails.dislikeCount,
          favoriteCount: this.loadedPost.ytVideoDetails.favoriteCount,
          commentCount: this.loadedPost.ytVideoDetails.commentCount
        },
        ytVideoAnalytics: {
          // topicIds: inject.ytVideoAnalytics.topicIds,
          // relevantTopicIds: inject.ytVideoAnalytics.relevantTopicIds,
          topicCategories: this.loadedPost.ytVideoAnalytics.topicCategories,
          tags: this.loadedPost.ytVideoAnalytics.tags
        },
        stvData: {
          author: this.loadedPost.stvData.author,
          title: this.loadedPost.stvData.title,
          description: this.loadedPost.stvData.description,
          impressions: this.loadedPost.stvData.impressions,
          plays: this.loadedPost.stvData.plays,
          shares: this.loadedPost.stvData.shares
        },
        userDetails: this.loadedPost.userDetails,
        resources: this.loadedPost.resources,
        time: {
          start: this.clipCalcStartTime,
          end: this.clippedStopTime,
          duration: this.recordDuration
        }
      }
      return obj
    },
    id () {
      return this.$route.params.id
    },
    videoLoaded () {
      return this.$store.getters.videoLoaded
    },
    loadedPost () {
      return this.$store.getters.post
    },

    clipDimensions () {
      return this.$store.getters.loadClipDimensions
    },
    clipTime () {
      return this.$store.getters.clipDuration.timestamp
    },
    recordDuration () {
      return (this.clippedStopTime - this.clipCalcStartTime)
    },
    recordingLength () {
      let val = 0
      val = (this.clipTime - this.clipCalcStartTime)
      return val
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
