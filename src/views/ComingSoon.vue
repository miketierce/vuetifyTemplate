<template>

  <v-container fluid
               fill-height>
    <v-layout justify-center
              align-center>
      <v-flex xs12
              text-xs-center>
        <div v-for="item in header_images"
             :key="item.id">
          <img class="header-img"
               :src="item.src"
               alt="">
        </div>
        <div class="title mb-5 ">
          Coming Soon
        </div>
      </v-flex>

    </v-layout>
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
          src: require('../assets/comingsoon.gif'),
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
  padding: 0 !important;
}
.section {
  background-color: grey lighten-2;
}
.card-text {
  margin-top: -20px;
}
.title {
  font-family: "Raleway", sans-serif !important;
  font-size: 48px !important;
  font-weight: 900;
  color: #7e57c2;
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
