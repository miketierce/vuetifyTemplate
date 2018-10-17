<template>
  <v-content>
    <v-container grid-list-xs>
      <v-layout row
                wrap>
        <v-flex class="ma-3"
                xs12>
          <h2>Explore</h2>
        </v-flex>
      </v-layout>
      <v-layout row
                wrap>
        <v-flex xs12>
          <v-card flat
                  color="grey lighten-3"
                  id="page-block"
                  height="auto">
            <v-container fluid
                         grid-list-lg>
              <v-layout row
                        wrap>
                <v-flex xs3
                        id="slot-1">
                  <v-card height="auto"
                          class="productBox">
                    <v-responsive :aspect-ratio="16/9">
                      <v-layout row
                                wrap
                                justify-center
                                align-center
                                fill-height>
                        <v-card-text class="text-xs-center">
                          <v-progress-circular v-if="loading"
                                               indeterminate
                                               color="primary">
                          </v-progress-circular>
                          <v-text-field v-model="query"
                                        label="Enter YouTube Id">
                          </v-text-field>
                          <v-btn @click="fetch">
                            Search
                          </v-btn>
                        </v-card-text>
                      </v-layout>
                    </v-responsive>
                  </v-card>
                </v-flex>
                <!-- <v-flex xs3
                        id="slot-1">
                  <v-card hover
                          height="200px"
                          class="productBox">
                    <v-container fluid
                                 fill-height>
                      <v-flex xs12>
                        <v-layout row
                                  wrap
                                  justify-center
                                  align-center
                                  fill-height>

                        </v-layout>
                      </v-flex>
                    </v-container>
                  </v-card>
                </v-flex> -->

                <!-- searched videoID result block -->
                <v-flex xs3
                        v-for="post in queryVideoResult"
                        :key="post.id"
                        id="slot-2">
                  <v-card hover
                          height="auto"
                          class="productBox">
                    <v-img @click="loadVideoToPlayer(post.ytVideoDetails.videoId)"
                           cover
                           :src="post.ytVideoDetails.coverImgUrl"
                           aspect-ratio="1.77"></v-img>
                  </v-card>
                  <v-card-text class=" text--primary">
                    {{post.ytVideoDetails.title}}
                  </v-card-text>
                </v-flex>

                <!-- Related Videos Block -->
                <v-flex xs3
                        v-for="post in relatedVideos"
                        :key="post.id"
                        id="slot-2">
                  <v-card @click="loadVideoToPlayer(post.id)"
                          hover
                          height="auto"
                          class="productBox">
                    <v-img @click="loadVideoToPlayer(post.id)"
                           cover
                           :src="post.coverImgUrl"
                           aspect-ratio="1.77"></v-img>

                  </v-card>
                  <v-card-text class=" text--primary">
                    {{post.title}}
                  </v-card-text>
                </v-flex>

                <!-- View More Button Block -->
                <v-flex xs3
                        v-if="nullQueryState"
                        id="slot-end">
                  <v-card height="auto"
                          class="productBox">
                    <v-responsive :aspect-ratio="16/9">
                      <v-layout row
                                wrap
                                justify-center
                                align-center
                                fill-height>

                        <v-card-text class="text-xs-center">
                          <v-progress-circular v-if="loading"
                                               indeterminate
                                               color="primary">
                          </v-progress-circular>
                          <v-btn @click="">
                            View More
                          </v-btn>
                        </v-card-text>
                      </v-layout>
                    </v-responsive>
                  </v-card>

                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- {{loadedPosts}} -->
      <feed />
    </v-container>
    <!-- {{query}} -->
    <!-- {{relatedVideos}} -->
    <!-- {{queryVideoResult}} -->
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'
import feed from '@/components/feed.vue'
// import axios from 'axios'

export default {
  beforeMount () {
    // this.$store.dispatch('setPostId', this.$route.params.id)
  },
  components: {
    feed
  },

  data () {
    return {
      query: '',
      nullQueryState: false,
      userProfile: {
        themeOption: 'light',
        velocityId: 'highest ranking ytId for next related content alignment',
        role: 'viewer',
        stream: []
      }
    }
  },
  methods: {
    goTo (post) {
      this.$store.dispatch('setPostId', post)
      this.$store.dispatch('newPlayer')
      this.$router.push({ name: 'studioView', params: { id: post } })
    },
    fetch () {
      this.$store.dispatch('fetchQueryVideo', this.query)
      this.$store.dispatch('fetchRelatedVideos', this.query)
      this.nullQueryState = true
    },
    loadVideoToPlayer (id) {
      // if the video is clicked import it to firebase and route to studio view
      console.log('load video: ' + id)
      // you can't just pass the youtube id to the insertNewVideoPost method. You ned to call get query video
      this.$store.dispatch('insertNewVideoPost', id, 'routed')
    }
  },
  computed: {
    ...mapGetters([
      'relatedVideos',
      'loading',
      'queryVideoResult',
      'videoLoaded',
      'loadedPosts'
    ]
    )
  }
}
</script>

<style scoped>
.productBox {
  border-radius: 5px;
  height: "200px";
  border: "1px";
  color: rgba(0, 0, 0, 0.16);
  /* box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12); */
  background: rgba(0, 0, 0, 0.16);
}
.carousel-cell {
  width: 50%; /* half-width */
  height: 160px;
  margin-right: 10px;
}
</style>
