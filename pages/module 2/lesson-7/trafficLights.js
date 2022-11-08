import { TagType } from './types/base.types.js';
import { createElement } from './base.js';
export var trafficLights = function () {
    // Lights
    var lights = createElement(TagType.DIV, 'lights');
    // Wrapper
    var wrapper = createElement(TagType.DIV, 'lights__wrapper');
    lights.appendChild(wrapper);
    // Number of lights
    var lightsCount = 3;
    // Active light
    var activeLight = 3;
    // List of lights elements
    var lightsList = [];
    // List of colors for lights
    var colorsList = [
        {
            passive: '#490e0e',
            active: '#ca0f0f'
        },
        {
            passive: '#4a3509',
            active: '#c78500'
        },
        {
            passive: '#0f361f',
            active: '#00a545'
        },
    ];
    // Creating of lights
    for (var i = 0; i < lightsCount; i++) {
        var light = createElement(TagType.DIV, 'lights__light');
        light.style.backgroundColor = colorsList[i].passive;
        wrapper.appendChild(light);
        lightsList.push(light);
    }
    // Creating button
    var button = createElement(TagType.BUTTON, 'lights__button');
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
