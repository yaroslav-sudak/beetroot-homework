import { trafficLights } from "./trafficLights.js";
import { createList } from "./base.js"

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app?.appendChild(createList());
  app?.appendChild(trafficLights());
})

// const div = createElement(TagType.DIV, 'clas');
