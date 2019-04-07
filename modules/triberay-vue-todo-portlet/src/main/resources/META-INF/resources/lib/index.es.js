import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

export default function(portletNamespace) {

	/* eslint-disable no-new */
	new Vue({
		el: `#${portletNamespace}-1`,
		components: { App },
		template: '<App/>',
	})
}
