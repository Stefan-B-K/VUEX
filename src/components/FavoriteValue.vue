<template>
  <h3>{{ limitedCounter }}</h3>
  <p>We do more here...</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('counters', ['limitedCounter'])
  },
};
</script>
