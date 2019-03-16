import Vue from 'vue/dist/vue.common';
import App from '../src/main/resources/META-INF/resources/lib/Main.vue';

new Vue({
    el: `#devapp`,
    render: h => h(App)
});
