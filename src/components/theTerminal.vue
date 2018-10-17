<template>
  <v-content class="mt-3">
    <v-layout row
              fill-height
              align-end>
      <v-flex xs12>
        <v-flex xs12>
          <v-card fluid
                  height="auto">
            <v-layout row
                      wrap>
              <v-card-text>
                <h2>theTerminal</h2>
                <v-list two-line>
                  <v-list-tile v-for="(cmd, n) in exportObject"
                               :key="n"
                               avatar>
                    <v-list-tile-avatar>
                      <v-icon>language</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{cmd.command}}</v-list-tile-title>
                      <v-list-tile-sub-title>Submitted: {{cmd.timeStamp |
                        date}}
                        <v-divider></v-divider>
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card-text>
            </v-layout>
          </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12>
          <v-form v-on:submit.prevent="terminalCommand">
            <v-text-field class="ma-1"
                          label="command line"
                          v-model="presentCommand"
                          append-outer-icon="label_important"
                          @click:append-outer="terminalCommand">
            </v-text-field>
          </v-form>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      terminalEntry: '',
      presentCommand: '',
      exportObject: []
    }
  },
  computed: {
    // exportObject () {
    //   let obj = []
    //   obj.push({
    //     terminalText: this.terminalEntry
    //   })
    //   return obj
    // }
  },
  methods: {
    terminalCommand () {
      const payload = {
        ...this.exportObject,
        timeStamp: new Date(),
        command: this.presentCommand
      }
      console.log(payload)
      this.exportObject.push(payload)
      this.presentCommand = ''
    }
  }
}
</script>

<style>
</style>
