import Vue from 'vue/dist/vue.common';
import App from './App.vue';

export const eventBus = new Vue();

export default function(portletNamespace, accessToken) {

	new Vue({
		el: `#${portletNamespace}-1`,
		render: h => h(App),
		mounted() {
			eventBus.$emit('setToken', accessToken);
		}
	});
}

new Vue({
	el: `#devapp`,
	render: h => h(App),
	mounted() {
		eventBus.$emit('setToken', 'replaceToTestInWebpackDevServer');
	}
});
