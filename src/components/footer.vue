<template>
  <v-content>
    <v-container fluid
                 fill-height>
      <v-layout row
                wrap
                fill-height>
        <v-flex xs12>
          <h1>Up Next</h1>

          <flickity ref="flickity"
                    :options="flickityOptions"
                    style="">

            <!-- <div class="carousel-cell tile"
               v-for="item in SeriesContent"
               :key="item.id">
            <img :src="item.src" />
            <div class="text"
                 style="width:100%;">
              <h1 @click="goTo(item.id)">{{item.name}}</h1>
              <h2 class="animate-text">{{item.description}}</h2>
              <v-btn absolute
                     class="dots transparent white--text"
                     fab
                     flat
                     right
                     top>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </div>
          </div> -->
            <div class="carousel-cell mt-5 mb-5 mx-2"
                 v-for="item in loadedPosts"
                 :key="item.id">

              <v-hover>

                <v-card slot-scope="{hover}"
                        class=" elevation-5 rounded "
                        aspect-ratio="16/9"
                        height="180px"
                        hover>
                  <v-responsive @mouseover="active = true"
                                @mouseleave="active = false"
                                :aspect-ratio="16/9">
                    <v-img :src="item.ytThumbnailHigh"
                           aspect-ratio="16/9"
                           height="180px">
                      <!-- <transition name="fade">
                        <v-layout v-if="hover"
                                  row
                                  wrap>
                          <div class="text-xs-left white--text">
                            <h2>{{item.name}}</h2>
                          </div>
                        </v-layout>
                      </transition> -->
                      <transition name="fade">
                        <v-layout v-if="hover"
                                  align-center
                                  justify-center
                                  row
                                  fill-height
                                  fluid>

                          <div class="text-xs-center">
                            <v-btn fab
                                   dark
                                   large
                                   flat
                                   @click="goTo(item.id)"
                                   v-scroll-to="'#nav'">
                              <v-icon class="text-xs-center"
                                      dark
                                      x-large>play_circle_filled</v-icon>
                            </v-btn>
                          </div>

                        </v-layout>

                      </transition>

                    </v-img>
                  </v-responsive>
                  <transition name="fade">
                    <div v-if="hover">
                      <h2>{{item.stvTitle}}</h2>
                    </div>
                  </transition>
                </v-card>
              </v-hover>
            </div>
          </flickity>

          <!-- if you don't want to use the buttons Flickity provides -->
          <!-- <button @click="previous()">Custom Previous Button</button>
          <button @click="next()">Custom Next Button</button> -->
        </v-flex>
      </v-layout>

    </v-container>
  </v-content>

</template>

<script>
import flickity from 'vue-flickity'
import { mapGetters } from 'vuex'

export default {
  components: {
    flickity
  },
  data () {
    return {
      active: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false,
        setGallerySize: false,
        freeScroll: true,
        contain: true,
        adaptiveHeight: true
        // any options from Flickity can be used
      }
    }
  },
  methods: {

    next () {
      this.$refs.flickity.next()
    },

    previous () {
      this.$refs.flickity.previous()
    },
    goTo (post) {
      this.$router.push({ name: 'postView', params: { id: post } })
    }
  },
  computed: {
    ...mapGetters([
      'loadedPosts'
    ]
    )
  }
}
</script>

<style scoped>
.carousel-cell {
  width: 50%; /* half-width */
  height: 160px;
  margin-right: 10px;
}
</style>
