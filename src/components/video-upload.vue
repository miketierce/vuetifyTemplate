<template>
  <v-content>

    <v-container grid-list-sm>
      <!-- this is the top or left container holds the import video animation prompt and the thumbnail preview and cancel import options -->
      <!-- this is the top of page loading indicator -->
      <v-layout row
                wrap>
        <v-flex xs12>
          <v-card flat
                  hover
                  height="50px"
                  class="grey lighten-3">
            <v-card-text>
              <v-progress-linear v-show="loading"
                                 :indeterminate="true">
              </v-progress-linear>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row
                wrap
                fill-height>
        <v-flex xs12
                sm6>
          <v-card id="card-1"
                  flat
                  height="400px"
                  color="grey lighten-3">

            <v-container fluid
                         grid-list-xs>
              <v-layout row
                        wrap
                        justify-center
                        align-center
                        fill-height>
                <v-card height="auto"
                        class="grey lighten-3"
                        flat>
                  <v-container fluid>

                    <v-layout row
                              wrap
                              justify-center
                              align-center
                              fill-height>
                      <v-fade-transition mode="out-in">
                        <v-card id="importBox"
                                height="200px"
                                width="400px"
                                class="grey lighten-2">
                          <!-- this is the form container -->
                          <v-layout v-if="videoLoaded"
                                    row
                                    wrap
                                    justify-center
                                    align-center
                                    fill-height>
                            <v-flex xs12>
                              <v-card class="grey lighten-3 elevation-10 rounded"
                                      height="auto">

                                <v-img aspect-ratio="16/9"
                                       height="205px"
                                       :src="importData.ytThumbnailHigh"
                                       class="rounded mb-0" />
                              </v-card>
                            </v-flex>
                          </v-layout>
                          <v-layout v-if="!videoLoaded"
                                    row
                                    wrap
                                    justify-center
                                    align-center
                                    fill-height>
                            <v-card-text class="text-xs-center">
                              <!-- <v-progress-circular v-if="loading"
                                                   indeterminate
                                                   color="primary">
                              </v-progress-circular> -->
                              <v-btn class="text-xs-center"
                                     v-if="active == false && loading == false"
                                     @click="active = !active"
                                     fab
                                     dark
                                     flat
                                     color="grey">
                                <v-icon dark>add</v-icon>
                              </v-btn>
                              <v-text-field v-if="active && loading == false"
                                            class="mb-0"
                                            v-model="ytId"
                                            label="Enter YouTube Video ID"
                                            clearable>
                              </v-text-field>
                              <v-btn small
                                     outline
                                     v-if="active && !loading"
                                     color="primary"
                                     @click="importYouTubeVideo(ytId)">
                                Find Video
                              </v-btn>
                            </v-card-text>
                          </v-layout>
                        </v-card>
                      </v-fade-transition>
                    </v-layout>
                  </v-container>
                  <v-flex xs12>
                    <v-fade-transition mode="out-in">
                      <v-btn v-if="active == true"
                             @click="cancel"
                             flat
                             block
                             color="error">Cancel
                      </v-btn>
                    </v-fade-transition>
                  </v-flex>
                </v-card>
              </v-layout>
              <v-layout v-if="videoLoaded"
                        row
                        wrap>
                <v-flex xs12>
                  <v-btn block
                         large
                         round
                         ripple
                         class="primary elevation-10"
                         @click="storeVideo">
                    Import
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>

          </v-card>
        </v-flex>

        <v-flex xs12
                sm6>
          <mediaDetail v-bind:id="id" />
        </v-flex>

        <!-- bottom or right container content -->
        <v-flex xs12>
          <v-card id="card-3"
                  height="auto"
                  hover
                  flat
                  class="grey lighten-3 scroll-y">
            <v-container v-show="videoLoaded"
                         class="ml-0"
                         fluid>
              <v-layout align-center
                        justify-start
                        row
                        fill-height>
                <v-container grid-list-xs>
                  <!-- product form -->
                  <v-flex xs12
                          class="">
                    <v-divider class="ma-5"></v-divider>
                    <div class="ma-3 headline font-weight-bold">RESOURCES</div>
                    <v-layout row
                              wrap>
                      <v-flex xs4
                              v-for="i in 3"
                              :key="i">
                        <v-card hover
                                class="productBox">
                          <v-container fluid
                                       fill-height>
                            <v-layout v-if="videoLoaded"
                                      row
                                      wrap
                                      justify-center
                                      align-center
                                      fill-height>
                              <v-card-text class="text-xs-center">
                                <v-progress-circular v-if="loadingProd"
                                                     indeterminate
                                                     color="primary">
                                </v-progress-circular>

                                <v-btn class="text-xs-center"
                                       v-if=""
                                       @click="addProd = !addProd"
                                       fab
                                       flat
                                       dark
                                       color="grey">
                                  <v-icon dark>add</v-icon>
                                </v-btn>
                                <v-text-field v-if="quickAdd"
                                              class="mb-0"
                                              v-model="productName"
                                              label="Name"
                                              clearable>
                                </v-text-field>
                                <v-text-field v-if="quickAdd"
                                              class="mb-0"
                                              v-model="productUrl"
                                              label="URL"
                                              clearable>
                                </v-text-field>
                                <v-btn small
                                       outline
                                       v-if="quickAdd"
                                       color="primary"
                                       @click="">
                                  Submit
                                </v-btn>
                              </v-card-text>
                            </v-layout>
                          </v-container>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <!-- viw clips form video -->
                  <v-flex xs12
                          class="">
                    <v-divider class="ma-5"></v-divider>
                    <div class="ma-3 headline font-weight-bold">Clipped Content</div>
                    <v-layout row
                              wrap>
                      <v-flex xs4
                              v-for="i in 3"
                              :key="i">
                        <v-card hover
                                class="productBox">
                          <v-container fluid
                                       fill-height>
                            <v-layout v-if="videoLoaded"
                                      row
                                      wrap
                                      justify-center
                                      align-center
                                      fill-height>
                              <v-card-text class="text-xs-center">
                                <v-progress-circular v-if="loadingProd"
                                                     indeterminate
                                                     color="primary">
                                </v-progress-circular>

                                <v-btn class="text-xs-center"
                                       v-if=""
                                       @click="addProd = !addProd"
                                       fab
                                       flat
                                       dark
                                       color="grey">
                                  <v-icon dark>add</v-icon>
                                </v-btn>
                                <v-text-field v-if="quickAdd"
                                              class="mb-0"
                                              v-model="productName"
                                              label="Name"
                                              clearable>
                                </v-text-field>
                                <v-text-field v-if="quickAdd"
                                              class="mb-0"
                                              v-model="productUrl"
                                              label="URL"
                                              clearable>
                                </v-text-field>
                                <v-btn small
                                       outline
                                       v-if="quickAdd"
                                       color="primary"
                                       @click="">
                                  Submit
                                </v-btn>
                              </v-card-text>
                            </v-layout>
                          </v-container>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                </v-container>
              </v-layout>

            </v-container>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-content>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import mediaDetail from '@/components/mediaDetail.vue'

export default {
  props: ['id'],
  data () {
    return {
      ytId: null,
      toolTip: false,
      active: false,
      editTitle: false,
      editDescription: false,
      addProd: true,
      loadingProd: false,
      quickAdd: false,

      modifyTitle: false,
      importData: {
        stvId: '',
        ytTitle: '',
        stvTitle: '',
        stvAuthor: '',
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
        startTime: '',
        endTime: '',
        duration: '',
        isClip: false,
        products: []
      }

    }
  },
  components: {
    mediaDetail
  },
  computed: {
    product () {
      const product = {
        productId: this.productId,
        productName: this.productName,
        productUrl: this.productUrl,
        productDescription: this.productDescription
      }
      return product
    },
    loadedPost () {
      // console.log('postId: ' + this.id)
      return this.$store.getters.post
    },
    loading () {
      return this.$store.getters.loading
      // return true
    },
    videoLoaded () {
      return this.$store.getters.videoLoaded
    }
    // ,
    // videoLoaded () {
    //   return true
    // }
  },
  methods: {
    addProduct () {
      this.importData.products.push(this.product)
    },
    storeVideo () {
      this.$store.dispatch('createVideoPost', this.importData)
      this.$router.push('/studioView/')
      // console.log('sent to store')
    },
    importYouTubeVideo (ytId) {
      // this.$store.dispatch('setLoading', true)
      // const apiBase = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='
      // const apiKey = 'AIzaSyCzWCtUuCjed9oji8LjZYIeB5AONGbaCws'
      // const apiUrl = apiBase + this.importData.ytVideoId + '&key=' + apiKey
      // axios.get(apiUrl)
      //   .then(response => {
      //     // console.log(response)
      //     const payload = {
      //       stvId: response.data.items[0].id,
      //       ytTitle: response.data.items[0].snippet.title,
      //       stvTitle: response.data.items[0].snippet.title,
      //       ytDescription: response.data.items[0].snippet.description,
      //       stvDescription: response.data.items[0].snippet.description,
      //       ytThumbnailStandard: response.data.items[0].snippet.thumbnails.standard.url,
      //       ytThumbnailMedium: response.data.items[0].snippet.thumbnails.medium.url,
      //       ytThumbnailHigh: response.data.items[0].snippet.thumbnails.high.url,
      //       // ytThumbnailMaxRes: response.data.items[0].snippet.thumbnails.maxres.url,
      //       ytChannelId: response.data.items[0].snippet.channelId,
      //       ytChannelTitle: response.data.items[0].snippet.channelTitle,
      //       ytVideoId: response.data.items[0].id,
      //       ytPublishedAt: response.data.items[0].snippet.publishedAt,
      //       stvPublishedAt: response.data.items[0].snippet.publishedAt,
      //       stvPlayCount: response.data.items[0].statistics.viewCount
      //     }
      // this.$store.dispatch('setLoading', false)
      this.$store.dispatch('importYouTubeVideo', ytId)
      // this.$store.dispatch('videoLoaded', true)
      // this.$store.dispatch('createVideoPost', payload)
      // this.videoLoaded = true
      // console.log(payload)
      // _.assign(this.importData, payload)
      // this.$store.dispatch('createVideoPost', this.importData)
      // this.$router.push({ name: 'studioView', params: { id: ytId } })
      console.log('Video Post Created: ' + ytId)
      // })
      // .catch(
      //   error => {
      //     console.log(error)
      //   }
      // )
    },
    cancel () {
      this.videoLoaded = false
      this.active = false
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
      // console.log('data: ' + this.importData)
    },
    save () {

    }
  }
}
</script>

<style scoped>
.productBox {
  height: "200px";
  border: "1px";
  color: rgba(0, 0, 0, 0.16);
  /* box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12); */
  background: rgba(0, 0, 0, 0.16);
}
</style>
