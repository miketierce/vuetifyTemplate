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

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'relatedVideos',
      'loading',
      'queryVideoResult',
      'videoLoaded',
      'loadedPosts'
    ]
    )
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
