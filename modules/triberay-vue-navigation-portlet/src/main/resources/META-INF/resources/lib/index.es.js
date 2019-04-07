import Vue from 'vue'
import App from './App'
import { store } from './store'

Vue.config.productionTip = false;

export default function (portletNamespace, siteLayouts, siteUrl, currentLayoutId, parentLayoutId, isMobile, spritemap) {
  store.state.siteLayouts = siteLayouts;
  store.state.siteUrl = siteUrl;
  store.state.currentLayoutId = currentLayoutId;
  store.state.parentLayoutId = parentLayoutId;
  store.state.isMobile = isMobile;
  store.state.spritemap = spritemap;

  /* eslint-disable no-new */
  new Vue({
    el: `#${portletNamespace}-1`,
    store,
    components: { App },
    template: '<App/>'
  })
}

