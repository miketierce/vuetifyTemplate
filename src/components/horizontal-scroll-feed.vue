<template>
  <v-content>
    <v-container fluid
                 class="grey lighten-3">
      <v-layout row
                align-content-center
                class="horiz-scroll">

        <v-flex v-for="media in series"
                :key="media.id"
                px-2
                pb-1>
          <div class="pos-relative">
            <v-card width="200px"
                    height="auto"
                    raised
                    ripple
                    hover
                    :to="'/theatre/view/'+ media.id">
              <v-card-media height="100px"
                            :src="media.src">

              </v-card-media>

              <div fill-height
                   fluid>
                <v-layout fill-height>
                  <v-flex xs12>
                    <v-card-actions>
                      <span class="subheading">{{ media.name }}</span>
                      <v-spacer></v-spacer>
                      <v-btn icon
                             @click="show = !show">
                        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                  </v-flex>
                </v-layout>
              </div>

              <v-slide-y-transition>
                <v-card flat
                        v-show="show">
                  <v-card-title>
                    <div>
                      <span class="grey--text">{{ media.description }}</span><br>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat
                           color="orange">Watch</v-btn>
                    <v-btn flat
                           color="orange">Explore</v-btn>
                  </v-card-actions>

                </v-card>
              </v-slide-y-transition>

            </v-card>
            <!-- <img :src="media.src"
                 height="200px"
                 width="200px"> -->
          </div>
        </v-flex>

      </v-layout>

    </v-container>
  </v-content>
</template>

<script>

export default {
  data () {
    return {
      show: false

    }
  },
  computed: {
    series () {
      return this.$store.getters.featuredPosts
    }
  }
}
</script>
