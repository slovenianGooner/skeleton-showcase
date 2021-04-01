import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";

import Layout from "./Shared/Layout";

const el = document.getElementById("app");

const app = createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) =>
                import(`./Pages/${name}`).then(({ default: page }) => {
                    page.layout =
                        page.layout === undefined ? Layout : page.layout;
                    return page;
                }),
        }),
}).use(plugin);

import Skelly from "sg-skelly";
Skelly.getComponents().forEach((component) => {
    app.component(component.name, component.config);
});

Skelly.getSolidIcons().forEach((component) => {
    app.component(component.name, component.config);
});

Skelly.getOutlineIcons().forEach((component) => {
    app.component(component.name, component.config);
});

// Query
const query = require("query-string");
app.mixin({
    data() {
        return {
            route: route,
        };
    },
    methods: {
        say(say) {
            console.log(say);
        },
        query() {
            return query.parse(window.location.search);
        },
    },
});

app.mount(el);
