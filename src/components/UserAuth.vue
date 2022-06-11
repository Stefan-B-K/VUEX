<template>
  <button @click="login" v-if="!userAuthenticated">Log in</button>
  <button @click="logout" v-else>Log out</button>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userAuthenticated'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>

<style scoped></style>