import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
Vue.config.productionTip = false;

export default function(portletNamespace) {

	Vue.config.productionTip = false;

	/* eslint-disable no-new */
	new Vue({
		el: `#${portletNamespace}-1`,
		components: { App },
		template: '<App/>',
	})
}
