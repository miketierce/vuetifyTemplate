<template>
  <v-container fluid>
    <v-layout row
              align-center>
      <v-flex xs12
              sm6
              offset-sm3>
        <v-tabs slot="extension"
                v-model="tabs"
                centered
                fixed-tabs
                color="transparent"
                slider-color="primary">
          <v-tab v-for="n in TabContent"
                 :key="n.id">
            {{n.header}}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs">
          <v-tab-item v-for="n in TabContent"
                      :key="n.id">
            <signIn class="mt-2 mr-2 ml-2"
                    v-show="n.id === 'LoginForm'" />
            <register class="mt-2 mr-2 ml-2"
                      v-show="n.id === 'Register'" />
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import register from '@/components/signUp.vue'
import signIn from '@/components/signIn.vue'
import gridTest from '@/components/gridTest.vue'

export default {
  data: () => ({
    tabs: null,
    TabContent: [
      {
        header: 'Login',
        id: 'LoginForm',
        component: 'Login'
      },
      {
        header: 'Register',
        id: 'Register',
        component: 'Register'
      }
    ],
    activeUser: false,
    drawer: null
  }),
  components: {
    register,
    signIn,
    gridTest
  },
  props: {
    source: String
  }
}
</script>
