import { App, plugin } from "@inertiajs/inertia-vue";
import Vue from "vue";

Vue.use(plugin);

// Register Skelly components
import Skelly from "sg-skelly";
Skelly.getComponents().forEach(component => {
    Vue.component(component.name, component.config);
});

import PortalVue from "portal-vue";
Vue.use(PortalVue);

// Query
const query = require("query-string");
Vue.prototype.$query = query;

// Route
Vue.prototype.$route = route;

// Layout
import Layout from "./Shared/Layout";

// Sample mixin to say things
Vue.mixin({
    methods: {
        query() {
            return this.$query.parse(window.location.search);
        },
        say(input) {
            console.log(input);
        }
    }
});

const el = document.getElementById("app");

new Vue({
    render: h =>
        h(App, {
            props: {
                initialPage: JSON.parse(el.dataset.page),
                resolveComponent: name =>
                    import(`./Pages/${name}`).then(({ default: page }) => {
                        page.layout =
                            page.layout === undefined ? Layout : page.layout;
                        return page;
                    })
            }
        })
}).$mount(el);
