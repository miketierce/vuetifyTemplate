<template>
  <v-container grid-list-lg>
    <v-layout row
              wrap>
      <v-flex xs12
              xl6
              offset-xl3>
        <v-progress-linear v-show="loading"
                           class="mb-0"
                           :indeterminate="true">
        </v-progress-linear>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12
              xl6
              offset-xl3>
        <v-container grid-list-xl>
          <v-layout v-for="post in loadedPosts"
                    :key="post.id"
                    row
                    wrap>
            <v-flex xs12>
              <v-card color="white"
                      class="elevation-10">
                <v-layout row
                          wrap>
                  <v-flex xs12
                          sm7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">{{post.stvTitle}}</div>
                        <div class="subheading">{{post.ytChannelTitle}}</div>
                        <div class="body-1">Published:
                          {{post.ytPublishedAt |
                          date}}</div>
                        <div class="body-2  pt-1">{{post.stvDescription, 140,
                          '...' |
                          truncate}}</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-flex xs12
                          sm5>
                    <v-card class="elevation-5">
                      <v-img :src="post.ytThumbnailHigh"
                             height="150px"
                             cover></v-img>
                    </v-card>
                    <div class="subheading text-xs-right mr-2 mt-1 text--secondary">
                      21 clips |
                      {{post.stvPlayCount | formatNumber}} views
                    </div>
                  </v-flex>
                </v-layout>
                <v-layout row
                          wrap>
                  <v-btn class="primary"
                         @click="goTo(post.id)">Watch Now</v-btn>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  Imported By: {{post.uploadUser}}
                  <v-spacer></v-spacer>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>

        </v-container>
        <!-- {{loadedPosts}} -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    goTo (post) {
      this.$router.push({ name: 'studioView', params: { id: post } })
    }
  }
}
</script>

<style>
</style>
