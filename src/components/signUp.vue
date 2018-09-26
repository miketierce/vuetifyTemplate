<template>
  <v-content>

    <v-container fluid
                 fill-height>
      <v-layout row
                align-center
                justify-center
                wrap>
        <v-flex xs12>
          <v-card flat
                  class="grey lighten-3">
            <v-card-text>
              <v-container>
                <v-form @submit.prevent="onSignup">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field name="email"
                                    label="Email"
                                    id="email"
                                    v-model="email"
                                    type="email"
                                    required></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field name="password"
                                    label="password"
                                    id="regPassword"
                                    v-model="regPassword"
                                    type="password"
                                    required></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field v-if="regPassword.length !== 0"
                                    name="confirmPassword"
                                    label="confirmPassword"
                                    id="confirmPassword"
                                    v-model="confirmPassword"
                                    type="Password"
                                    :rules="[comparePasswords]"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row
                            wrap>
                    <v-flex xs12>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary"
                               type="submit">Register</v-btn>
                      </v-card-actions>
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
      email: '',
      regPassword: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.regPassword !== this.confirmPassword ? 'Passwords must match.' : ''
    }
  },
  methods: {
    onSignup () {
      // vuex firebase action
      // console.log({ email: this.email, password: this.regPassword, confirmPassword: this.confirmPassword })
      this.$store.dispatch('signUserUp', { email: this.email, password: this.regPassword })
    }
  }
}
</script>

<style>
</style>
