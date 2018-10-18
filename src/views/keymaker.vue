<template>
  <div id="app">
    <v-app id="inspire">
      <v-layout row
                wrap
                fill-height>
        <v-flex xs12
                fill-height>
          <v-card color="red"
                  flat
                  height="100%">
            <player class="fullwidth">
              <v-toolbar flat
                         absolute
                         dark
                         class="transparent">
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-toolbar>

            </player>

          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
import player from '@/components/player'

export default {
  components: {
    player
  },

  data: () => ({
    header_images: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ]
  })
}
</script>

<style>
</style>
