import Vue from 'vue/dist/vue.common';
import App from '../src/main/resources/META-INF/resources/lib/App.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: `#devapp`,
    template: '<App/>',
    components: { App }
});
