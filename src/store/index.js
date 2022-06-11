import { createStore } from 'vuex'
import auth from '@/store/modules/auth'
import counters from '@/store/modules/counters';

const store = createStore({
  modules: { auth, counters },
});

export default store