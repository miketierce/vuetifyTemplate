<template>

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

              <v-form>
                <v-text-field prepend-icon="person"
                              name="login"
                              label="Login"
                              type="text"></v-text-field>
                <v-text-field id="password"
                              prepend-icon="lock"
                              name="password"
                              label="Password"
                              type="password"></v-text-field>
                <v-layout row
                          wrap>
                  <v-flex xs12>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary">Login</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <register />

  </v-container>

</template>

<script>
// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL_LtcH31mPi87PZgkyjgaYsmNcKSitCYE&key=AIzaSyDHCo-BGYvaOVj4XA8OzJCU0DFYme-3uTE
import register from '@/components/signUp.vue'
export default {
  data: () => ({
    activeUser: false,
    drawer: null
  }),
  components: {
    register
  },
  props: {
    source: String
  }
}
</script>
