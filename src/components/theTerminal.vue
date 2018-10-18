<template>
  <v-content class="mt-3">
    <v-layout row
              fill-height
              align-end>
      <v-flex xs12>

        <!-- <v-flex xs12>
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
      </v-flex> -->

        <v-flex xs12>
          <v-btn @click="editing = !editing"
                 block
                 color="primary"
                 dark>toggle editor</v-btn>

          <v-flex xs12
                  v-if="editing">

            <v-textarea class="mt-1"
                        v-model="input"
                        :value="update"
                        full-width
                        auto-grow
                        hide-details
                        solo-inverted>
            </v-textarea>

          </v-flex>

          <v-flex xs12
                  v-if="!editing">
            <v-card fluid
                    max-height="auto"
                    height="300px">

              <v-card-text v-html="compiledMarkdown">
                <!-- <h2>Viewing</h2> -->

              </v-card-text>

            </v-card>
          </v-flex>

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
      exportObject: [],
      input: '',
      editing: false
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
    // exportObject () {
    //   let obj = []
    //   obj.push({
    //     terminalText: this.terminalEntry
    //   })
    //   return obj
    // }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300),
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

<style scoped>
html,
body,
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
