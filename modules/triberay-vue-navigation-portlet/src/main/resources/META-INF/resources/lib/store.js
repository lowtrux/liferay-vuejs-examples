import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    siteLayouts: '',
    siteUrl: '',
    currentLayoutId: 0,
    parentLayoutId: 0,
    spritemap: ''
  }
});
