<template>
  <v-content>
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
                wrap>
        <v-flex xs12>
          <v-card flat
                  class="grey lighten-3">
            <v-card-text>
              <v-container>
                <v-form @submit.prevent="onSignup">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field name="regEmail"
                                    label="Email"
                                    v-model="regEmail"
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
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field v-if="regPassword.length !== 0"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    v-model="confirmPassword"
                                    type="Password"
                                    :rules="[comparePasswords]"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row
                            wrap>
                    <v-flex xs12>
                      <v-btn color="primary"
                             type="submit"
                             block>Register
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
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      regEmail: '',
      regPassword: '',
      confirmPassword: ''
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
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignup () {
      // vuex firebase action
      // console.log({ email: this.email, password: this.regPassword, confirmPassword: this.confirmPassword })
      this.$store.dispatch('signUserUp', { email: this.regEmail, password: this.regPassword })
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
