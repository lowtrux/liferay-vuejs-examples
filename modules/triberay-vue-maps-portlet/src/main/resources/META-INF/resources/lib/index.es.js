import Vue from 'vue/dist/vue.common';
import App from './App'

Vue.config.productionTip = false;

export default function(portletNamespace) {
	new Vue({
		el: `#${portletNamespace}-1`,
		template: '<App/>',
		components: { App }
	});
}
