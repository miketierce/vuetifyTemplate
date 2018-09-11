<template>
  <v-container fluid
               grid-list-lg
               class="grey lighten-3"
               align-center>

    <v-layout row
              wrap>
      <v-flex xs12
              mb-5
              text-xs-center>
        <div v-for="item in header_images"
             :key="item.id">
          <img class="header-img"
               :src="item.src"
               alt="">
        </div>
      </v-flex>

    </v-layout>

    <!-- <v-layout row
              wrap
              align-center>
      <v-layout align-center
                justify-center
                row
                fill-height>
        <v-flex xs12
                md10>
          <div class="mt-2 mb-2">
            <h3 class="display-1 font-weight-light mt-2 mb-2">Writer's Council Recap Videos</h3>
          </div>
          <v-container fluid
                       grid-list-md>
            <v-layout row
                      wrap>
              <v-flex v-for="card in watchlist"
                      xs12
                      md3
                      :key="card.title">
                <v-card hover
                        :href="card.url">
                  <v-card-media :src="card.src"
                                height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <h3>{{card.title}}</h3>
                  </v-card-title>
                  <v-card-text class="card-text">
                    <div :class="card.class">{{card.description | truncate(90, '...')}}</div>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon color="primary">favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon color="primary">share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout> -->

    <!-- </v-layout> -->

  </v-container>

</template>

<script>
import toolbar from '@/views/toolbar'

export default {
  components: {
    toolbar
  },
  data () {
    return {
      gradient: 'to top, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%',
      header_images: [
        {
          src: require('../assets/typewriter.gif'),
          title: 'Innerversity Season 1',
          description: 'loreum epsum'
        }
      ],
      watchlist: [
        {
          src: require('../assets/sevan-thumbnail.png'),
          title: 'Sevan Introduces Writers Council',
          description: 'Episode 1 | An introduction and outline of the Writers Council objectives.',
          epID: 'wcm-s01e00',
          url: 'https://zoom.us/recording/share/P0O_HSSmBmpjO3bz_PH6UNpUDDFzACY1S9ovxHwCkEywIumekTziMw'
        },

        {
          src: require('../assets/writers-series-thumbnail.png'),
          title: 'The Meeting That Never Happened',
          description: "Episode 2 | If you weren't around to catch the live version. This is what you needed to see.",
          epID: 'wcm-s01e01',
          url: 'https://vimeo.com/285776158/46c2a4b037'
        },
        {
          src: require('../assets/writers-series-thumbnail.png'),
          title: 'Navigating DropBox Paper',
          description: 'Episode 3 | Longer than it needed to be but I think it got the point across.',
          epID: 'wcm-s01e02',
          url: 'https://vimeo.com/286609312'
        },
        {
          src: require('../assets/sevan-thumbnail.png'),
          title: 'Designing the Launchpad',
          description: 'Episode 4 | Over achievers build launchpads not just rockets. In this episode we talk about the format of a foundation post and tighten down workflow expectations.',
          epID: 'wcm-s01e03',
          url: 'https://zoom.us/recording/share/P0O_HSSmBmpjO3bz_PH6UNpUDDFzACY1S9ovxHwCkEywIumekTziMw'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'Ep4 - TBD',
          description: 'Air Date 8/31/2018 6PM CST',
          epID: 'wcm-s01e04',
          url: 'https://youtu.be/oPkNQyUKSvE'
        }
      ],
      trending: [
        {
          src: require('../assets/heru.jpeg'),
          title: 'Orgonite Workshop',
          description: 'Episode 2: Conductive Materials',
          length: '3:42',
          url: 'https://youtu.be/oPkNQyUKSvE'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          title: 'THE KEYMAKER',
          description: 'Episode 3: THE INNOVATIST',
          url: 'https://youtu.be/oPkNQyUKSvE'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          title: 'Secret Energy TV',
          description: 'Streaming Live Now > > >',
          class: 'red--text',
          url: 'https://youtu.be/oPkNQyUKSvE'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'Innerversity Season 1',
          description: 'loreum epsum',
          url: 'https://youtu.be/oPkNQyUKSvE'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.carousel {
  padding: 0 !important;
}
.section {
  background-color: grey lighten-2;
}
.card-text {
  margin-top: -20px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header-img {
  width: 100%;
  max-width: 500px;
}
</style>
