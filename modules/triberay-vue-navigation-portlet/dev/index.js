import app from '../src/main/resources/META-INF/resources/lib/index.es';

let siteLayouts= '[{"hasChildren":true,"parentLayoutId":"0","link":"/home","title":"Triberay Vue Examples","layoutId":"1"},{"hasChildren":false,"parentLayoutId":"1","link":"/mapbox","title":"Mapbox GL","layoutId":"2"},{"hasChildren":false,"parentLayoutId":"1","link":"/instagram","title":"Instagram","layoutId":"3"},{"hasChildren":false,"parentLayoutId":"1","link":"/svg","title":"SVG Graph","layoutId":"4"},{"hasChildren":false,"parentLayoutId":"1","link":"/todo","title":"To Do App","layoutId":"5"},{"hasChildren":false,"parentLayoutId":"1","link":"/routing","title":"Routing","layoutId":"6"},{"hasChildren":false,"parentLayoutId":"1","link":"/treeview","title":"Tree View","layoutId":"7"}]';

app(
    'devapp',
    siteLayouts,
    'http://localhost:8088',
    1,
    0
);
