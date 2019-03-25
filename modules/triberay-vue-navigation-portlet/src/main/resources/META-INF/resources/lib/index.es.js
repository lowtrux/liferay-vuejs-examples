import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';
import { store } from './store/store';

Vue.use(Vuetify);
Vue.config.productionTip = false;

export default function(portletNamespace, siteLayouts, siteUrl) {

	store.state.siteLayouts = siteLayouts;
	store.state.siteUrl = siteUrl;

	/* eslint-disable no-new */
	new Vue({
		el: `#${portletNamespace}-1`,
		store,
		components: { App },
		template: '<App/>',
	})
}
