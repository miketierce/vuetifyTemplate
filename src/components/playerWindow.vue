<template>
  <div>

    {{this.videoId}}
    <!-- <vue-media-embed :source="'youtube://' + videoId"
                     :auto-play="0"
                     :allow-fullscreen="1" /> -->
  </div>
</template>

<script>
export default {
  props: ['videoId'],
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
