// Import Vue
import Vue from 'vue';
// Import Onsen
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'
// Imports
import VueRouter from 'vue-router';
import store from './store';
import middleware from './middleware';
import './filters/shortDate';
import routes from './routes';


Vue.config.productionTip = false;
// Vue.prototype.$http = axios


/* eslint-disable no-new */
const Phonegap = {
    initialize() {
        this.bindEvents();
    },
    bindEvents() {
        Phonegap.recievedEvent();
    },
    recievedEvent() {
        // init onsen
        Vue.use(VueOnsen);
        // init du router
        Vue.use(VueRouter);
        const router = new VueRouter({routes});
        // on lance les différents middlewares
        middleware(router, store);
        // Init de l'application vue
        new Vue({
            el: '#app',
            router,
            store,
            render: createElement => createElement('div', {attrs: {id: 'app'}}, [
                createElement('router-view', {class: ['view', 'view-main']}),
            ]),
        });
    },
};

Phonegap.initialize();
