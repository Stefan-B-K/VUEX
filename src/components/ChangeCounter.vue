<template>
  <button @click="increment">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
   ...mapActions('counters', ['increment'])
  }
};
</script>