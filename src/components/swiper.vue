<template>
  <v-content>
    <v-container fluid
                 class="grey lighten-3">
      <v-layout row
                align-content-center
                class="horiz-scroll">

        <swiper :options="swiperOption"
                class="pt-5 pb-5">
          <v-flex px-2
                  pb-1>

            <div class="pos-relative">
              <swiper-slide v-for="(media, index) in load"
                            :key="index">
                <v-card width="200px"
                        height="auto"
                        class="rounded"
                        raised
                        ripple
                        hover
                        elevation-12
                        :to="'/theatre/view/'+ media.id">
                  <v-img height="125px"
                         :src="media.src"
                         class="pos-relative rounded ">
                    <v-spacer></v-spacer>
                    <div class="thumbText text-xs-left pl-1 subheading text--white">{{
                      media.name }}</div>
                  </v-img>

                  <!-- <v-slide-y-transition>
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
                  </v-slide-y-transition> -->

                </v-card>
              </swiper-slide>
            </div>
          </v-flex>
          <div class="swiper-button-prev"
               slot="button-prev"></div>
          <div class="swiper-button-next"
               slot="button-next"></div>
        </swiper>
      </v-layout>

    </v-container>

  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'loadedPosts'
    ]
    )
  },
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted () {
    // setInterval(() => {
    //   console.log('simulate async data')
    //   if (this.swiperSlides.length < 10) {
    //     this.swiperSlides.push(this.swiperSlides.length + 1)
    //   }
    // }, 3000)
  }
}
</script>
<style scoped>
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
  margin: 50px;
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
  transform: scale(1.05);
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
