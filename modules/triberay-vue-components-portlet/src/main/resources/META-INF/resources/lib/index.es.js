import Vue from 'vue/dist/vue.common';
import App from './Main.vue'

export default function(portletNamespace) {

	new Vue({
		el: `#${portletNamespace}-1`,
		render: h => h(App)
	});
}
