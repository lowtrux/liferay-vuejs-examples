import Vue from 'vue';
import App from '../src/main/resources/META-INF/resources/lib/App.vue';
import { store } from '../src/main/resources/META-INF/resources/lib/store/store';

store.state.accessToken = '11085243931.be0cab3.7c1308b479ee488482f740ffc90f3cdd';

new Vue({
	el: `#devapp`,
	store,
	template: '<App/>',
	components: { App }
});
