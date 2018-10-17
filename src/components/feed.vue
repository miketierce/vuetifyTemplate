<template>
  <v-content>
    <v-layout row
              wrap>
      <v-flex class="ma-3"
              xs12>
        <h2>Newly Added</h2>
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
                      v-for="post in loadedPosts"
                      :key="post.key"
                      id="slot-2">
                <v-card hover
                        height="auto"
                        class="productBox">
                  <v-img v-if="post.postType === 'YouTubeVideo'"
                         @click="goTo(post.key)"
                         cover
                         :src="post.ytVideoDetails.coverImgUrl"
                         aspect-ratio="1.77"></v-img>
                  <v-img v-if="post.postType === 'Clip'"
                         @click="goTo(post.key)"
                         cover
                         :src="post.ytVideoDetails.coverImgUrl"
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
                                  justify-end
                                  align-end>
                          <v-flex xs12>

                            <h2 class="white--text headline text-xs-right">Clip
                              {{post.time.duration |
                              timeInHours }}</h2>

                          </v-flex>
                        </v-layout>

                      </v-container>
                    </v-card>

                  </v-img>
                </v-card>
                <v-card-text class=" text--primary">
                  {{post.stvData.title}}
                </v-card-text>
              </v-flex>

              <v-flex xs3
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
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'

// import axios from 'axios'

export default {
  beforeMount () {
    // this.$store.dispatch('setPostId', this.$route.params.id)
  },
  components: {

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
      'loadedPosts',
      'loadedPost'
    ]
    )
  }
}
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.76) 0%,
    transparent 472px
  );
}
.productBox {
  border-radius: 5px;
  height: "200px";
  border: "1px";
  /* color: rgba(0, 0, 0, 0.16); */
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
