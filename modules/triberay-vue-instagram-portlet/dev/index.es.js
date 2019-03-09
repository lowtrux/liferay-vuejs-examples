import Vue from 'vue/dist/vue.common';
import App from '../src/main/resources/META-INF/resources/lib/Main.vue';

new Vue({
	el: `#devapp`,
	render: h => h(App),
	mounted() {
		eventBus.$emit('setToken', '11085243931.be0cab3.7c1308b479ee488482f740ffc90f3cdd');
	}
});
