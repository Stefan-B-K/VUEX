<template>
  <button @click="increment">Delayed Add {{  incrementBy  }}</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('counters', ['incrementBy'])
  },
  methods: {
   ...mapActions('counters', ['increment'])
  }
};
</script>