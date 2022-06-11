<template>
  <base-container title="Vuex" v-if="userAuthenticated">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addMore({ value: 10 })">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from '@/components/TheCounter';
import ChangeCounter from '@/components/ChangeCounter';
import FavoriteValue from '@/components/FavoriteValue';
import UserAuth from '@/components/UserAuth';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
    BaseContainer
  },
  computed: {
    ...mapGetters(['userAuthenticated'])
  },
  methods: {
    ...mapActions('counters',
      {
        addMore: 'increase'                                               // rename the action
      })
    // addMore() {
    // this.$store.commit('increase', { value: 10 })        // commit     -->   mutation
    // this.$store.dispatch({                                            // dispatch    -->   action
    //   type: 'increase',
    //   value: 10
    // })
    // }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>


