import { trafficLights } from "./trafficLights.js";
import { createList } from "./base.js";
document.addEventListener('DOMContentLoaded', function () {
    var app = document.getElementById('app');
    app === null || app === void 0 ? void 0 : app.appendChild(createList());
    app === null || app === void 0 ? void 0 : app.appendChild(trafficLights());
});
// const div = createElement(TagType.DIV, 'clas');
