<template>
  <v-container class="carousel" fluid >
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <v-carousel dark hide-controls align-end justify-start row fill-height delimiter-icon="stop" >
            <toolbar class="carousel"/>
            <v-carousel-item
              v-for="(item,i) in header_images"
              :gradient="gradient"
              :key="i"
              :src="item.src"
            >
            <v-container fill-height>
              <v-layout align-center justify-start>
                <v-flex text-xs-left>
                  <h3 class="headline white--text font-weight-black pl-1">{{item.title}}</h3>
                  <h3 class="headline white--text font-weight-light pl-1">{{item.description}}</h3>
                  <br>
                  <v-btn outline color="white">Watch Now</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
    <!-- Watch List Row *Needs Horizontal Scroll -->
        <v-flex xs12 >
          <v-container fluid grid-list-lg class="grey lighten-3">
            <v-layout row full-width wrap>
              <v-flex xs12>
                <div class="mt-2 mb-2">
                  <h3 class="display-1 font-weight-light mt-2 mb-2">Watch List</h3>
                </div>
                <v-container fluid grid-list-md >
                  <v-layout row wrap>
                    <v-flex v-for="card in watchlist" xs12 md3 :key="card.title" >
                      <v-card hover>
                        <v-card-media :src="card.src" height="200px" >
                        <!-- <v-container fill-height fluid pa-2 >
                          <v-layout fill-height >
                            <v-flex xs12 align-end flexbox>
                                <v-icon color="yellow lighten-1">star</v-icon>
                                <v-icon color="yellow lighten-1">star</v-icon>
                                <v-icon color="yellow lighten-1">star</v-icon>
                                <v-icon color="yellow lighten-1">star</v-icon>
                                <v-icon color="yellow lighten-1">star_half</v-icon>
                            </v-flex>
                          </v-layout>
                        </v-container> -->
                        </v-card-media>
                        <v-card-title primary-title>
                          <div>
                            <h3 class="headline mb-0">{{card.title}}</h3>
                            <div :class="card.class">{{card.description}}</div>
                          </div>
                        </v-card-title>
                        <v-card-actions>
                          <v-card-actions class="pa-3">
                            <v-icon color="yellow darken-2">star</v-icon>
                            <v-icon color="yellow darken-2">star</v-icon>
                            <v-icon color="yellow darken-2">star</v-icon>
                            <v-icon color="yellow darken-2">star</v-icon>
                            <v-icon color="yellow darken-2">star_half</v-icon>
                          </v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                            <v-icon>favorite</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon>share</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>

<!-- Trending Videos Row *Needs Horizontal Scroll -->
        <v-flex xs12 >
          <v-container fluid grid-list-lg class="grey lighten-3">
            <v-layout row full-width wrap>
              <v-flex xs12>
                <div class="mt-2 mb-2">
                  <h3 class="display-1 font-weight-light mt-2 mb-2">Trending Videos</h3>
                </div>
                <v-container fluid grid-list-md >
                  <v-layout row wrap>
                    <v-flex v-for="card in trending" xs12 md3 :key="card.title" >
                      <v-card hover>
                        <v-card-media :src="card.src" height="200px" >
                        <!-- <v-container fill-height fluid pa-2 >
                          <v-layout fill-height >
                            <v-flex xs12 align-end flexbox>
                                <v-icon color="yellow lighten-1">star</v-icon>
                                <v-icon color="yellow lighten-1">star</v-icon>
                                <v-icon color="yellow lighten-1">star</v-icon>
                                <v-icon color="yellow lighten-1">star</v-icon>
                                <v-icon color="yellow lighten-1">star_half</v-icon>
                            </v-flex>
                          </v-layout>
                        </v-container> -->
                        </v-card-media>
                        <v-card-title primary-title>
                          <div>
                            <h3 class="headline mb-0">{{card.title}}</h3>
                            <div :class="card.class">{{card.description}}</div>
                            <!-- <div :class="card.class">{{card.length}}</div> -->
                          </div>
                        </v-card-title>
                        <v-card-actions>
                          <v-card-actions class="pa-3">
                            <v-icon color="yellow darken-2">star</v-icon>
                            <v-icon color="yellow darken-2">star</v-icon>
                            <v-icon color="yellow darken-2">star</v-icon>
                            <v-icon color="yellow darken-2">star</v-icon>
                            <v-icon color="yellow darken-2">star_half</v-icon>
                          </v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                            <v-icon>favorite</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon>share</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>

      </v-layout>
    </v-slide-y-transition>
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
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          title: 'Innerversity Season 1',
          description: 'loreum epsum'
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
      ],
      watchlist: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          title: '7 Day Virtual Cleanse',
          description: 'Episode 2: loreum epsum'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          title: 'THE KEYMAKER',
          description: 'Episode 3: THE INNOVATIST'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          title: 'Secret Energy TV',
          description: 'Streaming Live Now > > >',
          class: 'red--text'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'Innerversity Season 1',
          description: 'loreum epsum'
        }
      ],
      trending: [
        {
          src: require('../assets/heru.jpeg'),
          title: 'Orgonite Workshop',
          description: 'Episode 2: Conductive Materials',
          length: '3:42'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          title: 'THE KEYMAKER',
          description: 'Episode 3: THE INNOVATIST'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          title: 'Secret Energy TV',
          description: 'Streaming Live Now > > >',
          class: 'red--text'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'Innerversity Season 1',
          description: 'loreum epsum'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.carousel {
  padding: 0!important
}
.section {
  background-color: grey lighten-2;

}

h1, h2 {
  font-weight: normal;
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
</style>
