import Vue from 'vue/dist/vue.common';
import App from './Main'

export default function(portletNamespace) {

	Vue.config.productionTip = false

	/* eslint-disable no-new */
	new Vue({
		el: `#${portletNamespace}-1`,
		template: '<App/>',
		components: { App }
	})

}
