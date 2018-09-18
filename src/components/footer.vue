<template>
  <v-content>
    <v-container fluid
                 fill-height>
      <v-layout row
                wrap
                fill-height>
        <v-flex xs12>
          <h2>Up Next</h2>

          <flickity ref="flickity"
                    :options="flickityOptions"
                    style="height:400px; overflow: visible;">

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
            <div class="carousel-cell mt-1 mb-5"
                 v-for="item in SeriesContent"
                 :key="item.id">

              <v-hover>

                <v-card slot-scope="{hover}"
                        class=" elevation-5 rounded"
                        width="300px"
                        height="auto"
                        hover>
                  <v-responsive v-on:mouseover="active = !active"
                                :aspect-ratio="16/9">
                    <v-img :src="item.src"
                           aspect-ratio="16/9"
                           height="200px">
                      <v-card-text class="white--text">
                        This card will always be 16:9 (unless you put more stuff in it)
                      </v-card-text>
                    </v-img>
                  </v-responsive>
                  <v-expand-transition>
                    <div v-if="hover"
                         style="height: 200px"
                         class="popup primary">

                      <h2>Peak A Boo</h2>
                    </div>
                  </v-expand-transition>
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

export default {
  components: {
    flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false,
        setGallerySize: true,
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
    }
  },
  computed: {
    SeriesContent () {
      // console.log(this.id)
      return this.$store.getters.loadedPosts
    },
    displayedPosts () {
      // console.log(this.displayedPosts)
      return this.paginate(this.SeriesContent)
    }
  }
}
</script>

<style scoped>
.popup {
  -webkit-transition: opacity 3s ease-in-out;
  -moz-transition: opacity 3s ease-in-out;
  -ms-transition: opacity 3s ease-in-out;
  -o-transition: opacity 3s ease-in-out;
}
.carousel {
  height: 160px;
}
.carousel-cell {
  width: 250px;
  height: auto;
  margin: 10px;
  margin-bottom: 100px;
  background-color: #99aeff;
  display: inline-block;
  background-size: cover;
  position: relative;
  /* cursor: pointer; */
  /* transition: all 0.4s ease-out; */
  box-shadow: 0px 13px 50px -17px rgba(0, 0, 0, 0.44);
  overflow: hidden;
  color: white;
  font-family: "Roboto";
  border-radius: 5px; /* 5px rounded corners */
}

.carousel-cell:hover {
  background-color: #99aeff;
  box-shadow: 0px 23px 77px -17px rgba(0, 0, 0, 0.64);

  /* height: 300px !important; */

  /* transition: all 0.1s ease-in; */
  /* transform: scale(1, 1.5); */
  /* transform-origin: top; */
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 0px;
}
.tile:hover img {
  opacity: 0.2;
}

.crop {
  width: 250px;
  height: 175px;
  overflow: hidden;
}

.crop img {
  width: 100%;
  height: 100%;
  /* margin: -75px 0 0 -100px; */
}

.wrap {
  margin: 20px auto 0 auto;
  width: 100%;
  display: flex;
  align-items: space-around;
  max-width: 1200px;
}
.tile {
  width: 250px;
  height: 175px;
  margin: 10px;
  margin-bottom: 100px;
  background-color: #99aeff;
  display: inline-block;
  background-size: cover;
  position: relative;
  /* cursor: pointer; */
  transition: all 0.4s ease-out;
  box-shadow: 0px 13px 50px -17px rgba(0, 0, 0, 0.44);
  overflow: hidden;
  color: white;
  font-family: "Roboto";
  border-radius: 5px; /* 5px rounded corners */
}
.tile img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: all 0.4s ease-out;
}
.tile .text {
  /*   z-index:99; */
  position: absolute;
  padding: 10px;
  height: calc(100% - 10px);
}
.tile h1 {
  font-weight: 400;
  margin: 0;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}
.tile h2 {
  font-weight: 300;
  margin: 5px 0 0 0;
  font-style: italic;
  transform: translateY(200px);
}
.tile p {
  font-weight: 300;
  margin: 20px 0 0 0;
  line-height: 25px;
  /*   opacity:0; */
  transform: translateX(-200px);
  transition-delay: 0.2s;
}
.animate-text {
  opacity: 0;
  transition: all 0.6s ease-in-out;
}
.tile:hover {
  background-color: #99aeff;
  box-shadow: 0px 23px 77px -17px rgba(0, 0, 0, 0.64);
  transform: scale(1, 1.5);
  transform-origin: top;
  border-radius: 5px; /* 5px rounded corners */
}
.tile:hover img {
  opacity: 0.2;
}
.tile:hover .animate-text {
  transform: translateX(0);
  opacity: 1;
}
.dots {
  position: absolute;
  top: 20px;
  right: 10px;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  color: currentColor;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.dots span {
  width: 5px;
  height: 5px;
  background-color: currentColor;
  border-radius: 50%;
  display: block;
  opacity: 0;
  transition: transform 0.4s ease-out, opacity 0.5s ease;
  transform: translateX(30px);
}

.tile:hover span {
  opacity: 1;
  transform: translateY(0px);
}
</style>
