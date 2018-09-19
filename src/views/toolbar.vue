<template>
  <div id="nav">
    <v-navigation-drawer temporary
                         v-model="sideNav"
                         flat
                         absolute
                         dense
                         class="">
      <v-list>
        <v-list-tile v-for="item in menuItems"
                     :key="item.title"
                     :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar flat
               class="transparent"
               height="50px">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"
                           class=""></v-toolbar-side-icon>
      <!-- <v-toolbar-items class="">
        <v-btn flat
               v-for="item in menuItems"
               :key="item.title"
               :to="item.link">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items> -->
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <router-link to="/"
                     tag="span"
                     style="cursor: pointer">
          <v-icon color="primary">tv</v-icon>&nbsp;STV
        </router-link>
      </v-toolbar-title>
    </v-toolbar>

  </div>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'lock_open', title: 'Login', link: '/login' }
      ]
    }
  }
}
</script>

<style>
.toolbar {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
  /* background: -moz-linear-gradient(top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0.65)), color-stop(100%,rgba(0,0,0,0)));
background: -webkit-linear-gradient(top, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
background: -o-linear-gradient(top, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
background: -ms-linear-gradient(top, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); */
}
</style>
