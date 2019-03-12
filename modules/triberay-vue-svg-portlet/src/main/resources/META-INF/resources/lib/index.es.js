import Vue from 'vue/dist/vue.common';
import App from './components/Main';

export default function(portletNamespace, stats) {

	new Vue({
		el: `#${portletNamespace}-1`,
		data: {
			stats: stats
		},
		render: h => h(App)
	});
}
