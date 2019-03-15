import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';

export default function(portletNamespace, accessToken) {

	store.state.accessToken = accessToken;

	new Vue({
		el: `#${portletNamespace}-1`,
		store,
		template: '<App/>',
		components: { App }
	});
}
