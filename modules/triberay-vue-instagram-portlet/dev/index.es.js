
import Vue from 'vue/dist/vue.common';
import App from '../src/main/resources/META-INF/resources/lib/App.vue';
import Home from '../src/main/resources/META-INF/resources/lib/Home.vue';

Vue.component('app-server-status', Home);

new Vue({
    el: `#app`,
    render: h => h(App)
});
