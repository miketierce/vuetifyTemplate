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
        <v-list-tile v-if="userIsAuthenticated"
                     @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout
          </v-list-tile-content>
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
          <v-btn flat>
            Template
            <v-icon right
                    color="primary">tv</v-icon>
          </v-btn>
        </router-link>
      </v-toolbar-title>
    </v-toolbar>

  </div>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false

    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'lock_open', title: 'Login', link: '/login' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: 'account_balance', title: 'Home', link: '/galleryView/' + this.$store.state.user.id },
          { icon: 'dashboard', title: 'Temp Feed', link: '/about' },
          { icon: 'add_to_queue', title: 'Import Content', link: '/content-manager' }
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null & this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
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
