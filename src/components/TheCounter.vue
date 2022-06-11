<template>
  <h3>{{ theCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('counters', ['theCounter'])
  }
};
</script>
