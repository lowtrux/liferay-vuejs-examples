import app from '../src/main/resources/META-INF/resources/lib/index.es';

let siteLayouts= '[{"hasChildren":false,"parentLayoutId":"0","link":"/home","title":"Home","layoutId":"9"},{"hasChildren":true,"parentLayoutId":"0","link":"/vuejs","title":"Vue.js examples","layoutId":"1"},{"hasChildren":false,"parentLayoutId":"0","link":"/search","title":"Search","layoutId":"2"},{"hasChildren":true,"parentLayoutId":"0","link":"/test","title":"Test","layoutId":"10"},{"hasChildren":false,"parentLayoutId":"1","link":"/svg-graph","title":"SVG Graph","layoutId":"5"},{"hasChildren":false,"parentLayoutId":"1","link":"/mapbox","title":"Mapbox","layoutId":"6"},{"hasChildren":false,"parentLayoutId":"1","link":"/to-do-app","title":"To Do App","layoutId":"7"},{"hasChildren":false,"parentLayoutId":"1","link":"/routing","title":"Routing","layoutId":"8"},{"hasChildren":false,"parentLayoutId":"10","link":"/sublevel","title":"Sublevel","layoutId":"11"}]';

app(
    'devapp',
    siteLayouts,
    'http://localhost:8088',
    9,
    0,
    '/o/classic-theme/images/clay/icons.svg',
    false
);
