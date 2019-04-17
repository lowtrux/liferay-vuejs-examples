import Vue from 'vue';
import App from './App';

const vueConfig = require('vue-config');
const configs = {
	spritemap: Liferay.ThemeDisplay.getPathThemeImages() + '/clay/icons.svg#'
};
Vue.use(vueConfig, configs);
Vue.config.productionTip = false;

export default function(portletNamespace) {

	/* eslint-disable no-new */
	new Vue({
		el: `#${portletNamespace}-1`,
		components: { App },
		template: '<App/>',
	})
}
