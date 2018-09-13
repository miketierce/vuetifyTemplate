<template>

  <v-container fluid
               fill-height>
    <v-layout align-center
              justify-center>
      <v-flex xs12
              sm8
              md4>
        <v-card flat
                class="grey lighten-3">
          <v-card-text>
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
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL_LtcH31mPi87PZgkyjgaYsmNcKSitCYE&key=AIzaSyDHCo-BGYvaOVj4XA8OzJCU0DFYme-3uTE
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
