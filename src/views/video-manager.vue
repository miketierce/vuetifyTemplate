<template>
  <v-content>
    <v-container fluid>
      <v-flex xs12
              sm10
              offset-sm1>
        <v-layout row>
          <upload />
        </v-layout>
      </v-flex>
    </v-container>
  </v-content>
</template>

<script>
import upload from '@/components/video-upload.vue'
export default {
  components: {
    upload
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
