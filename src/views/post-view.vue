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
          <v-card fluid
                  height="auto"
                  class="transparent rounded">
            <vue-media-embed :source="CourseContent.VideoUrl"
                             :auto-play="0"
                             :allow-fullscreen="1" />
          </v-card>
          <v-card flat
                  class="grey lighten-3 headline">
            <div class="episode-title text-truncate">
              {{CourseContent.EpisodeTitle}}
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
                  <h3>Course Details</h3>
                  <span>
                    {{n.text}}
                  </span>
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
    </v-container>
    <v-layout row
              wrap
              class="grey lighten-3">
      <v-flex xs12
              class="mt-2">
        <v-flex xs12
                xl8
                offset-xl2>
        </v-flex>
        <feed />
      </v-flex>
    </v-layout>
    <v-layout row
              wrap
              class="grey lighten-3">
      <FooterContent />
    </v-layout>
  </v-content>
</template>

<script>
import feed from '@/components/horizontal-scroll-feed.vue'
import notepad from '@/components/notepad.vue'
import FooterContent from '@/components/footer.vue'
import breadcrumbs from '@/components/breadcrumbs.vue'
import VueSticky from 'vue-sticky' // Es6 module

export default {
  props: ['id'],
  directives: {
    'sticky': VueSticky
  },
  components: {
    feed,
    notepad,
    breadcrumbs,
    VueSticky,
    FooterContent
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
    CourseContent () {
      console.log(this.id)
      return this.$store.getters.loadedPost(this.id)
    }
  }
}
</script>

<style>
</style>
