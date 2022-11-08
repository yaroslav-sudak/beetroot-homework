import { IColorsList } from './types/traffic.types.js';
import { TagType } from './types/base.types.js';
import { createElement } from './base.js';

export const trafficLights = () => {
  // Lights
  const lights: HTMLDivElement = createElement<HTMLDivElement>(
    TagType.DIV,
    'lights'
  );

  // Wrapper
  const wrapper: HTMLDivElement = createElement<HTMLDivElement>(
    TagType.DIV,
    'lights__wrapper'
  );
  lights.appendChild(wrapper);

  // Number of lights
  const lightsCount: number = 3;

  // Active light
  let activeLight: number = 3;

  // List of lights elements
  const lightsList: HTMLDivElement[] = [];

  // List of colors for lights
  const colorsList: IColorsList[] = [
    {
      passive: '#490e0e',
      active: '#ca0f0f',
    },
    {
      passive: '#4a3509',
      active: '#c78500',
    },
    {
      passive: '#0f361f',
      active: '#00a545',
    },
  ];

  // Creating of lights
  for (let i = 0; i < lightsCount; i++) {
    const light: HTMLDivElement = createElement<HTMLDivElement>(
      TagType.DIV,
      'lights__light'
    );
    light.style.backgroundColor = colorsList[i].passive;
    wrapper.appendChild(light);
    lightsList.push(light);
  }

  // Creating button
  const button: HTMLButtonElement = createElement<HTMLButtonElement>(
    TagType.BUTTON,
    'lights__button'
  );
  button.addEventListener('click', switchLight);
  button.setAttribute('type', 'button');
  button.innerText = 'Next';
  lights.appendChild(button);

  // Switch light function
  function switchLight() {
    if (lightsList[activeLight]) {
      lightsList[activeLight].style.backgroundColor =
        colorsList[activeLight].passive;
    }
    activeLight--;
    activeLight === -1 ? (activeLight = 2) : true;
    lightsList[activeLight].style.backgroundColor =
      colorsList[activeLight].active;
  }

  // Return element
  return lights;
};
