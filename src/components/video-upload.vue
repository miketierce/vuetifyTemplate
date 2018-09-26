<template>
  <v-content>

    <v-container fluid>
      <v-container>
        <v-layout row
                  wrap
                  class="pl-2 mb-1">
          <v-flex xs12>
            <h2>Import Video</h2>
          </v-flex>
        </v-layout>
        <v-layout align-center
                  justify-start
                  row
                  wrap
                  fill-height
                  class="pl-2">
          <v-flex xs12
                  sm6
                  offset-sm-3>
            <v-text-field v-model="importData.ytVideoId"
                          label="Enter YouTube Video ID"
                          clearable></v-text-field>
          </v-flex>

          <v-flex xs12
                  sm6
                  offset-sm-3
                  class="text-xs-center">
            <v-btn v-if="!videoLoaded"
                   color="primary"
                   @click="importYouTubeVideo">
              Load Video Details</v-btn>
            <v-btn v-if="videoLoaded"
                   color="error"
                   flat
                   @click="cancel">
              Cancel</v-btn>

            <v-btn v-if="videoLoaded"
                   color="primary"
                   @click="cancel">
              Import Video</v-btn>
          </v-flex>
        </v-layout>

        <!-- <v-layout row
                  wrap>
          <v-flex xs12
                  class="mb-3">
            <h2>Import Video</h2>
          </v-flex>
        </v-layout>
        <v-layout row
                  wrap>
          <v-flex xs12
                  sm6
                  offset-sm-3>
            <v-text-field v-model="importData.ytVideoId"
                          label="Enter YouTube Video ID"
                          clearable></v-text-field>
          </v-flex>
          <v-flex xs12
                  sm6
                  offset-sm-3
                  class="text-xs-center">
            <v-btn v-if="!videoLoaded"
                   color="primary"
                   @click="importYouTubeVideo">
              Load Video Details</v-btn>
            <v-btn v-if="videoLoaded"
                   color="error"
                   flat
                   @click="cancel">
              Cancel</v-btn>

            <v-btn v-if="videoLoaded"
                   color="primary"
                   @click="cancel">
              Import Video</v-btn>
          </v-flex>
        </v-layout> -->
      </v-container>
      <v-container v-show="videoLoaded"
                   fluid>
        <v-layout row
                  wrap>
          <v-flex xs12>
            <v-card>
              <v-responsive v-if="loading"
                            :aspect-ratio="16/9"
                            width="100%"
                            color="grey lighten-2"
                            class="rounded ">
              </v-responsive>
            </v-card>
            <v-img v-if="!loading"
                   :src="importData.ytThumbnailMaxRes"
                   class="rounded elevation-10 mb-3" />
          </v-flex>
        </v-layout>
        <!-- View video author needs api call-->
        <v-layout align-center
                  justify-start
                  row
                  fill-height>
          <v-flex>
            <v-btn flat
                   icon
                   color="primary">
              <v-icon>how_to_reg</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-text-field disabled
                          label="Original Channel"
                          value="get author from 2nd api call"></v-text-field>
          </v-flex>
        </v-layout>
        <!-- View and edit video title -->
        <v-layout align-center
                  justify-start
                  row
                  fill-height>
          <v-flex>
            <v-btn flat
                   icon
                   color="primary"
                   v-if="editTitle === false"
                   @click="editTitle = !modifyTitle">
              <v-icon>create</v-icon>
            </v-btn>
            <v-btn flat
                   icon
                   color="error"
                   v-if="editTitle === true"
                   @click="discardTitle">
              <v-icon>clear</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-if="!editTitle"
                          disabled
                          label="Title"
                          :value="importData.stvTitle"></v-text-field>
            <v-text-field v-if="editTitle"
                          v-model="importData.stvTitle"
                          :value="importData.stvTitle"
                          append-icon="save"
                          @click:append="saveNewTitle"></v-text-field>
          </v-flex>
        </v-layout>
        <!-- View and edit video description -->
        <v-layout align-center
                  justify-start
                  row
                  fill-height>
          <v-flex>
            <v-btn flat
                   icon
                   color="primary"
                   v-if="editDescription === false"
                   @click="editDescription = !editDescription">
              <v-icon>create</v-icon>
            </v-btn>
            <v-btn flat
                   icon
                   color="error"
                   v-if="editDescription === true"
                   @click="discardDescription">
              <v-icon>clear</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-textarea disabled
                        auto-grow
                        v-if="!editDescription"
                        label="Description"
                        :value="importData.stvDescription">
            </v-textarea>
            <v-textarea v-if="editDescription"
                        v-model="importData.stvDescription"
                        :value="importData.stvDescription"
                        append-icon="save"
                        @click:append="saveNewDescription">
            </v-textarea>
          </v-flex>
        </v-layout>

      </v-container>
    </v-container>

  </v-content>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

export default {
  data () {
    return {
      loading: false,
      editTitle: false,
      editDescription: false,
      videoLoaded: false,
      modifyTitle: false,
      importData: {
        stvId: '',
        ytTitle: '',
        stvTitle: '',
        stvDescription: '',
        ytDescription: '',
        ytThumbnailStandard: '',
        ytThumbnailMedium: '',
        ytThumbnailHigh: '',
        ytThumbnailMaxRes: '',
        ytChannelId: '',
        ytChannelTitle: '',
        ytVideoId: '',
        ytPublishedAt: '',
        stvPublishedAt: '',
        stvPlayCount: '',
        clips: [],
        stvRating: ''
      }

    }
  },
  methods: {
    saveNewDescription () {
      console.log('save')
      this.editDescription = false
    },
    discardDescription () {
      this.editDescription = false
      this.importData.stvDescription = this.importData.ytDescription
    },
    saveNewTitle () {
      console.log('save')
      this.editTitle = false
    },
    discardTitle () {
      this.editTitle = false
      this.importData.stvTitle = this.importData.ytTitle
    },
    importYouTubeVideo (ytId) {
      this.loading = true
      const apiBase = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='
      const apiKey = 'AIzaSyCzWCtUuCjed9oji8LjZYIeB5AONGbaCws'
      const apiUrl = apiBase + this.importData.ytVideoId + '&key=' + apiKey
      axios.get(apiUrl)
        .then(response => {
          // console.log(response)
          const payload = {
            stvId: response.data.items[0].id,
            ytTitle: response.data.items[0].snippet.title,
            stvTitle: response.data.items[0].snippet.title,
            ytDescription: response.data.items[0].snippet.description,
            stvDescription: response.data.items[0].snippet.description,
            ytThumbnailStandard: response.data.items[0].snippet.thumbnails.standard.url,
            ytThumbnailMedium: response.data.items[0].snippet.thumbnails.medium.url,
            ytThumbnailHigh: response.data.items[0].snippet.thumbnails.high.url,
            ytThumbnailMaxRes: response.data.items[0].snippet.thumbnails.maxres.url,
            ytChannelId: response.data.items[0].snippet.channelId,
            ytChannelTitle: response.data.items[0].snippet.channelTitle,
            ytVideoId: response.data.items[0].id,
            ytPublishedAt: response.data.items[0].snippet.publishedAt,
            stvPublishedAt: response.data.items[0].snippet.publishedAt,
            stvPlayCount: response.data.items[0].statistics.viewCount
          }
          this.loading = false
          this.videoLoaded = true
          // console.log(payload)
          _.assign(this.importData, payload)
        })
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    cancel () {
      this.videoLoaded = false
      this.importData.stvId = ''
      this.importData.ytTitle = ''
      this.importData.stvTitle = ''
      this.importData.ytDescription = ''
      this.importData.ytThumbnails = {}
      this.importData.ytChannelId = ''
      this.importData.ytChannelTitle = ''
      this.importData.ytVideoId = ''
      this.importData.ytPublishedAt = ''
      this.importData.stvPublishedAt = ''
      this.importData.stvPlayCount = ''
      this.importData.clips = []
      this.importData.stvRating = ''
    },
    save () {

    }
  }
}
</script>

<style scoped>
</style>
