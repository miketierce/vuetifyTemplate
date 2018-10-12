<template>
  <v-content>
    <v-container grid-list-xs>
      <!-- row 1 this is the top of page loading indicator -->
      <v-layout row
                wrap
                justify-end>
        <v-flex xs12
                v-show="loading">
          <v-card id="loading-block"
                  flat
                  height="85px"
                  class="grey lighten-3 ">
            <v-card-text>
              <v-progress-linear :indeterminate="true">
              </v-progress-linear>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4
                offset-xs8
                v-show="videoLoaded">
          <v-card id="loading-block"
                  flat
                  height="85px"
                  class="grey lighten-3 ">
            <v-card-text>
              <v-text-field append-icon="mic"
                            color="elevation-10"
                            hover
                            solo-inverted
                            full-width
                            hide-details
                            label="Search Lecture Contents"
                            prepend-inner-icon="search">
              </v-text-field>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- row 2 player & toolbelt -->
      <v-layout row
                wrap
                fill-height
                align-start>
        <v-flex xs12
                sm6>
          <v-card id="player-window"
                  height="auto"
                  color="grey lighten-3">
            <v-container fluid
                         grid-list-xs>
              <v-layout row
                        wrap
                        justify-center
                        align-center
                        fill-height>
                <player />
                <!-- <playerWindow /> -->
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs12
                sm6>
          <v-card id="toolBelt"
                  height="auto"
                  color="grey lighten-3 ma-2"
                  class="ma-0">
            <toolBelt />
          </v-card>
        </v-flex>
      </v-layout>
      <!-- row 3 resources -->
      <v-layout row
                wrap>
        <v-flex xs12>
          <v-card id="resources"
                  height="auto"
                  class="grey lighten-3 scroll-y">
            <!-- this container needs a bad ass fad intro... -->
            <v-container fluid>
              <v-layout align-center
                        justify-start
                        row
                        fill-height>
                <v-container grid-list-xs>
                  <!-- product form -->
                  <v-flex xs12
                          class="">
                    <v-divider class="mt-0 ml-5 mr-5 mb-5"></v-divider>
                    <div class="ma-3 headline font-weight-bold">Resources</div>
                    <v-layout row
                              wrap>
                      <v-flex xs4
                              v-for="i in 3"
                              :key="i">
                        <v-card hover
                                class="productBox">
                          <v-container fluid
                                       fill-height>
                            <v-layout row
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
                    <div class="ma-3 headline font-weight-bold">Clips</div>
                    <v-layout row
                              wrap>
                      <v-flex xs4
                              v-for="i in 3"
                              :key="i">
                        <v-card hover
                                class="productBox">
                          <v-container fluid
                                       fill-height>
                            <v-layout row
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
import toolBelt from '@/components/toolBelt'
import player from '@/components/player'

export default {

  components: {
    toolBelt,
    player
  },
  // watch: {
  //   $route (to, from) {
  //     this.id = this.$route.params.id
  //     return this.$store.getters.loadedPost(this.$route.params.id)
  //   }
  // }
  data () {
    return {
      addProd: true,
      loadingProd: false,
      quickAdd: false
    }
  },
  mounted () {
    this.$store.dispatch('setVideoLoaded', true)
    // this.id = this.$route.params.id
    // this.$store.dispatch('setPost', this.$route.params.id)
  },
  computed: {
    loading () {
      return this.$store.getters.loading
      // return true
    },
    loadedPost () {
      // console.log('postId: ' + this.id)
      return this.$store.getters.loadedPost(this.id)
    },
    videoLoaded () {
      return this.$store.getters.videoLoaded
    },
    id () {
      return this.$route.params.id
    }
    // videoLoaded () {
    //   return true
    // }
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
