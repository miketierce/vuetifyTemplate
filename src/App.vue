<template>
  <v-app class="grey lighten-3">
    <toolbar />
    <v-content>
      <router-view />
    </v-content>

    <!-- <v-footer :fixed="fixed"
              app>
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import toolbar from '@/views/toolbar.vue'
export default {
  components: {
    toolbar
  },
  name: 'App',
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Sovereignty TV'
    }
  }
}
</script>

<style>
.container {
  /* overflow: hidden; */
}
.rounded {
  border-radius: 5px; /* 5px rounded corners */
}
.pos-relative {
  position: relative;
  min-height: 150px;
}
.transparent {
  background-color: transparent !important;
}
.thumbText {
  position: absolute;
  /* top: 100px; */
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  /* font-size: 1em; */
  /* padding: 20px; */
  width: 100%;
  /* height: 100%; */
  bottom: 0;
  left: 0;
  font-family: "Roboto";
}
.card-image {
  display: block;
}
.overflow-hidden {
  overflow: hidden;
}
.horiz-scroll {
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  /* Styles */
  .container {
    padding-left: 5px;
    padding-right: 5px;
    /* padding-bottom: 10px; */
  }
  .episode-title {
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
  }
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width: 321px) {
  /* Styles */
  .container {
    padding-left: 5px;
    padding-right: 5px;
  }
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width: 320px) {
  /* Styles */
  .container {
    padding-left: 5px;
    padding-right: 5px;
  }
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Styles */
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  /* Styles */
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  /* Styles */
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  /* Styles */
  .episode-title {
    font-size: 22px;
    font-weight: 500;
    margin-left: 5px;
  }
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
  /* Styles */
  .episode-title {
    font-size: 22px;
    font-weight: 500;
    margin-left: 5px;
  }
}

::-webkit-scrollbar {
  background: #eeeeee;
  width: 5px;
  height: 10px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  background: #757575;
  /* border: 14px none #ff9800; */
  border-radius: 50px;
}

::-webkit-scrollbar-thumb:hover {
  background: #5e35b1;
}
::-webkit-scrollbar-thumb:active {
  background: #5e35b1;
}
::-webkit-scrollbar-track {
  background: transparent;
  border: 61px none #ffffff;
  border-radius: 50px;
}

::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
