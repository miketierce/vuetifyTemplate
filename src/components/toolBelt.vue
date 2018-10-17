<template>
  <v-container grid-list-xs
               fluid>

    <v-layout justify-start
              column
              fill-height>

      <v-flex xs12>
        <v-tabs slot="extension"
                v-model="tabs"
                grow
                color="transparent"
                slider-color="primary">
          <v-tab v-for="n in TabContent"
                 :key="n.id">
            {{n.header}}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs">
          <v-card style="min-height: 200px"
                  class="grey lighten-3">
            <v-tab-item v-for="n in TabContent"
                        :key="n.id">
              <div class="mt-2 mr-2 ml-2"
                   v-show="n.id === 'details'">

                <mediaDetail />

              </div>
              <div class="mr-2 ml-2">
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

      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>

import notepad from '@/components/notepad.vue'
import mediaDetail from '@/components/mediaDetail.vue'

export default {
  // props: ['id'],
  components: {
    notepad,
    mediaDetail
  },
  // watch: {
  //   $route (to, from) {
  //     return this.$store.getters.loadedPost(this.$route.params.id)
  //   }
  // },
  computed: {
    loading () {
      return this.$store.getters.loading
      // return true
    },
    loadedPost () {
      // console.log('postId: ' + this.id)
      return this.$store.getters.post
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
          text: 'This section should pull in the transcriptions created via the captions api '
        },
        {
          header: 'Q&A',
          id: 'Q&A',
          text: 'Should look like a chat window. Users can ask questions while watching videos. Questions will be sent to a central source reviewed by admins answered then injected here beneath the question. The Q&A will be added to the askers notebook.'
        },
        {
          header: 'Fact Check Poll',
          id: 'poll',
          text: 'Will allow users to vote and provide supporting evidence for any fact check quests available for the video. '
        },
        {
          header: 'Reading List',
          id: 'additionalReading',
          text: 'Amazon links to books related to video'
        }
      ]
    }
  }
}
</script>

<style>
</style>
