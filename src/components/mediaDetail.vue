<template>
  <v-flex xs12>
    <v-card id="mediaDetails"
            height="auto"
            flat
            color="grey lighten-3">
      <v-container v-if="videoLoaded"
                   grid-list-xs
                   fluid>
        <v-layout row
                  wrap
                  justify-center
                  align-start
                  fill-height>
          <v-flex xs12>
            <!-- flip for chat window -->

            <v-card height="auto"
                    class="grey lighten-3"
                    flat>
              <!-- this is the real input settings form -->
              <v-flex xs12>

                <v-layout row
                          wrap
                          align-start
                          justify-center>
                  <v-text-field class="mt-1"
                                v-model="loadedPost.stvData.author"
                                :placeholder="loadedPost.stvData.author"
                                prepend-icon="how_to_reg"
                                solo-inverted
                                full-width
                                hide-details>
                  </v-text-field>
                  <v-tooltip bottom
                             slot="append-outer">
                    <v-btn slot="activator"
                           color="primary"
                           small
                           flat
                           fab
                           dark>
                      <v-icon fab>info</v-icon>
                    </v-btn>
                    <v-card dark
                            class="transparent"
                            flat>
                      <div>
                        <span>YouTube channel usernames can be
                          difficult when tracking various works from
                          a particular individual across multiple
                          channels. For example Robert Sepehr is a
                          more suitable author name than Atlantean
                          Gardens and promotes a more honest and
                          intentful viewing experience.</span>
                      </div>
                    </v-card>
                  </v-tooltip>
                </v-layout>
              </v-flex>

              <!-- youtube channel title -->
              <v-flex xs12
                      class="mt-2">
                <v-layout row
                          wrap
                          align-start
                          justify-center>
                  <v-text-field class="mt-1"
                                v-model="loadedPost.ytVideoDetails.channelTitle"
                                :placeholder="loadedPost.ytVideoDetails.channelTitle"
                                disabled
                                prepend-icon="business"
                                single-line
                                full-width
                                solo-inverted
                                hide-details>
                  </v-text-field>
                  <v-tooltip bottom
                             slot="append-outer">
                    <v-btn slot="activator"
                           color="primary"
                           small
                           flat
                           fab
                           dark>
                      <v-icon fab>info</v-icon>
                    </v-btn>
                    <v-card dark
                            class="transparent"
                            flat>
                      <div>
                        <span>If you don't mind we will save this for
                          you to make sure the original YouTube
                          uploader can be shown along with the video.</span>
                      </div>
                    </v-card>
                  </v-tooltip>
                </v-layout>
              </v-flex>

              <!-- save stv video title -->
              <v-flex xs12
                      class="mt-2">
                <v-layout row
                          wrap
                          align-start
                          justify-center>
                  <v-text-field class="mt-1"
                                v-model="loadedPost.stvData.title"
                                :value="loadedPost.stvData.title"
                                prepend-icon="title"
                                single-line
                                full-width
                                solo-inverted
                                hide-details>
                  </v-text-field>
                  <v-tooltip bottom
                             slot="append-outer">
                    <v-btn slot="activator"
                           color="primary"
                           small
                           flat
                           fab
                           dark>
                      <v-icon fab>info</v-icon>
                    </v-btn>
                    <v-card dark
                            class="transparent"
                            flat>
                      <div>
                        <span>YouTube title this video in such a way
                          that it will honestly prepare the users
                          mind for what is to come.</span>
                      </div>
                    </v-card>
                  </v-tooltip>
                </v-layout>
              </v-flex>

              <!-- description -->
              <v-flex xs12
                      class="mt-2">
                <v-layout row
                          wrap
                          align-start
                          justify-center>
                  <v-textarea class="mt-1"
                              v-model="loadedPost.stvData.description"
                              :value="loadedPost.stvData.description"
                              prepend-icon="import_contacts"
                              full-width
                              auto-grow
                              hide-details
                              solo-inverted>
                  </v-textarea>
                  <v-tooltip bottom
                             slot="append-outer">
                    <v-btn slot="activator"
                           color="primary"
                           small
                           flat
                           fab
                           dark>
                      <v-icon fab>info</v-icon>
                    </v-btn>
                    <v-card dark
                            class="transparent"
                            flat>
                      <div>
                        <span>Please leave any credit links to original
                          content owners. But most importantly make sure
                          an
                          accurate summary of the lecture concepts, ideas
                          or message is present.</span>
                      </div>
                    </v-card>
                  </v-tooltip>
                </v-layout>
              </v-flex>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {

  data () {
    return {
      toolTip: false,
      active: false,
      editTitle: false,
      editDescription: false,
      addProd: true,
      loadingProd: false,
      quickAdd: false,
      modifyTitle: false
    }
  },
  // props: ['id'],
  // watch: {
  //   $route (to, from) {
  //     return this.$store.getters.loadedPost(this.$route.params.id)
  //   }
  // },
  methods: {
    toggleVideoLoaded () {
      this.$store.dispatch('videoLoaded')
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
      // return true
    },
    videoLoaded () {
      return this.$store.getters.videoLoaded
    },
    loadedPost () {
      // console.log('postId: ' + this.id)
      return this.$store.getters.post
    }
  }
}
</script>

<style>
</style>
