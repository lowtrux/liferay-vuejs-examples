import Vue from 'vue/dist/vue.common';
import App from './App.vue';
import Home from './Home.vue';

export default function(portletNamespace) {

	Vue.component('app-server-status', Home);

	new Vue({
		el: `#${portletNamespace}-1`,
		render: h => h(App)
	});
}

