import { createStore } from 'vuex';
import authentication from './authen/index';
export default createStore({
  modules: {
    authentication,
  },
});
