<template>
  <v-container text-xs-center>
    <v-layout v-if="error"
              id="alert"
              row
              wrap>
      <v-flex xs12>
        <v-card flat
                class="grey lighten-3">
          <app-alert @dismissed="onDismissed"
                     :text="error.message" />
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row
              align-center
              justify-center
              wrap>
      <v-flex xs12>
        <v-card flat
                class="grey lighten-3">
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="onSignIn">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="email"
                                  label="Email"
                                  v-model="email"
                                  type="email"
                                  required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="password"
                                  label="Password"
                                  v-model="regPassword"
                                  type="password"
                                  required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row
                          wrap>
                  <v-flex xs12>
                    <v-btn block
                           color="primary"
                           type="submit">Sign In
                    </v-btn>
                    <v-progress-linear v-if="loading"
                                       :indeterminate="true">
                    </v-progress-linear>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      regPassword: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    },
    comparePasswords () {
      return this.regPassword !== this.confirmPassword ? 'Passwords must match.' : ''
    },
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/home')
      }
    }
  },
  methods: {
    onSignIn () {
      // vuex firebase action
      // console.log({ email: this.email, password: this.regPassword, confirmPassword: this.confirmPassword })
      this.$store.dispatch('signUserIn', { email: this.email, password: this.regPassword })
    },
    onDismissed () {
      console.log('Dismissed Alert!')
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style>
</style>
