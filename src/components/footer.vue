<template>
  <v-content>
    <v-container fluid
                 class="grey lighten-3">
      <v-layout row
                align-content-center
                class="horiz-scroll">
        <v-flex v-for="item in SeriesContent"
                :key="item.id"
                px-2
                pb-5
                pt-2>
          <div class="pos-relative">
            <div class="">
              <div class="tile">
                <div class="">
                  <img :src="item.src" />
                  <div class="text"
                       style="width: 100%;">
                    <h1>{{item.name}}</h1>
                    <h2 class="animate-text">{{item.description}}</h2>
                    <v-btn absolute
                           class=" dots transparent white--text"
                           fab
                           flat
                           right
                           top>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

</template>

<script>
export default {
  computed: {
    SeriesContent () {
      console.log(this.id)
      return this.$store.getters.loadedPosts
    }
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
  margin: 0px;
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
