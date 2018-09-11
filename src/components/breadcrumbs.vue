<template>
  <v-flex xs12
          xl8
          offset-xl2>
    <span :to='"/"'
          class="body-2">{{id}} > From Here > To Here </span>
  </v-flex>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style>
</style>
