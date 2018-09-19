<template>
  <v-content>
    <v-container>
      <breadcrumbs v-bind:id="id"
                   class="breadcrumb" />
      <v-layout row
                wrap>
        <v-flex xs12
                xl8
                offset-xl2>
          <v-card id="player"
                  fluid
                  height="auto"
                  class="transparent rounded">
            <!-- <vue-media-embed :source="'youtube://' + CourseContent.contentDetails.videoId"
                             :auto-play="0"
                             :allow-fullscreen="1" /> -->
            <playerWindow v-bind:id="id" />
          </v-card>
          <v-card flat
                  class="grey lighten-3 headline">
            <div class="episode-title text-truncate">
              {{CourseContent.snippet.title}}
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-flex xs12
              xl8
              offset-xl2>
        <div>
          <v-toolbar color="grey lighten-3"
                     flat>
            <v-text-field append-icon="mic"
                          class="mx-3"
                          full-width
                          label="Search Lecture Contents"
                          prepend-inner-icon="search"
                          solo></v-text-field>
            <v-tabs slot="extension"
                    v-model="tabs"
                    centered
                    grow
                    color="transparent"
                    slider-color="primary">
              <v-tab v-for="n in TabContent"
                     :key="n.id">
                {{n.header}}
              </v-tab>
            </v-tabs>
          </v-toolbar>
          <v-tabs-items v-model="tabs">
            <v-card flat
                    style="min-height: 200px"
                    class="grey lighten-3">
              <v-tab-item v-for="n in TabContent"
                          :key="n.id">
                <div class="mt-2 mr-2 ml-2"
                     v-show="n.id === 'details'">
                  <div>
                    {{CourseContent.contentDetails.videoId}}
                  </div>
                  <div>
                    {{CourseContent.snippet.description}}
                  </div>
                </div>
                <div class="mt-2 mr-2 ml-2">
                  <notepad v-show="n.id === 'notepad'" />
                </div>
                <div class="mt-2 mr-2 ml-2"
                     v-show="n.id === 'transcript'">
                  <h3>Course Transcript</h3>
                  <span>
                    {{n.text}}
                  </span>
                </div>
                <div class="mt-2 mr-2 ml-2"
                     v-show="n.id === 'downloads'">
                  <h3>Downloads</h3>
                  <span>
                    {{n.text}}
                  </span>
                </div>
              </v-tab-item>
            </v-card>
          </v-tabs-items>
        </div>
      </v-flex>

      <v-layout row
                wrap
                class="grey lighten-3 pb-5"
                fill-height>

        <FooterContent />

      </v-layout>
    </v-container>

  </v-content>
</template>

<script>
import feed from '@/components/horizontal-scroll-feed.vue'
import notepad from '@/components/notepad.vue'
import FooterContent from '@/components/footer.vue'
import breadcrumbs from '@/components/breadcrumbs.vue'
import VueSticky from 'vue-sticky' // Es6 module
import swiper from '@/components/swiper.vue'
import playerWindow from '@/components/playerWindow.vue'

export default {
  props: ['id'],
  // mounted () {
  //   this.$watch('id', id => {
  //     this.videoLoad(id)
  //   }, { immediate: true })
  // },
  directives: {
    'sticky': VueSticky
  },
  components: {
    feed,
    notepad,
    breadcrumbs,
    VueSticky,
    FooterContent,
    swiper,
    playerWindow
  },
  watch: {
    $route (to, from) {
      return this.$store.getters.loadedPost(this.id)
    }
  },
  data () {
    return {
      tabs: null,

      TabContent: [
        {
          header: 'Details',
          id: 'details',
          component: 'notepad'
        },
        {
          header: 'Notepad',
          id: 'notepad',
          component: 'notepad'
        },
        {
          header: 'Transcript',
          id: 'transcript',
          text: 'dlaklkjdf ;lakdf laksdj asdlkjw saldkjfalkjf as; asdjfijlwk ejlasgoiuow asldkjgwoi agkjwoi ag jawoig uaojdg oag owejklajsd f aosigjlwekj '
        },
        {
          header: 'Downloads',
          id: 'downloads',
          text: 'dlaklkjdf ;lakdf laksdj asdlkjw saldkjfalkjf as; asdjfijlwk ejlasgoiuow asldkjgwoi agkjwoi ag jawoig uaojdg oag owejklajsd f aosigjlwekj '
        }
      ]
    }
  },
  computed: {
    CourseContent: {
      get: function () {
        console.log(this.id)
        return this.$store.getters.loadedPost(this.id)
      },
      set: function () {
        this.CourseContent.contentDetails.videoId = this.$store.getters.loadedPost(this.id).contentDetails.videoId
      }

    }
  }
}
</script>

<style>
</style>
