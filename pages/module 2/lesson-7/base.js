import { playlist } from './models/playlist.model.js';
import { ButtonTypes, EventListeners, TagType } from './types/base.types.js';
export function createElement(tag = TagType.DIV, classes = '') {
    const el = document.createElement(tag);
    el.classList.add(classes);
    return el;
}
// Function that creates and show pop up
const createModal = (element, audio) => {
    // * Creating modal
    // Modal
    const modal = createElement(TagType.DIV, 'modal');
    // Modal background
    const modalBackground = createElement(TagType.DIV, 'modal__background');
    modalBackground.addEventListener(EventListeners.CLICK, removePopUp);
    modal.appendChild(modalBackground);
    // Modal wrapper
    const modalWrapper = createElement(TagType.DIV, 'modal__wrapper');
    modal.appendChild(modalWrapper);
    // * Creating modal content
    // Image
    const image = createElement(TagType.IMG, 'modal__image');
    image.style.backgroundImage = `url(./assets/songs/images/${element.name}.jpg)`;
    modalWrapper.appendChild(image);
    // Content
    const content = createElement(TagType.DIV, 'modal__content');
    // Title
    const title = createElement(TagType.DIV, 'modal__title');
    title.innerText = `${element.song}`;
    content.appendChild(title);
    // Subtitle
    const subtitle = createElement(TagType.DIV, 'modal__subtitle');
    subtitle.innerText = `${element.author}`;
    content.appendChild(subtitle);
    // Button
    const button = createElement(TagType.BUTTON, 'modal__button');
    button.type = ButtonTypes.BUTTON;
    button.addEventListener(EventListeners.CLICK, removePopUp);
    content.appendChild(button);
    // Remove element function
    function removePopUp() {
        button.removeEventListener(EventListeners.CLICK, removePopUp);
        modal.removeEventListener(EventListeners.CLICK, removePopUp);
        modal.style.opacity = '0';
        setTimeout(() => {
            audio.pause();
            modal.remove();
        }, 350);
    }
    modalWrapper.appendChild(content);
    // Add pop up in DOM
    document.body.appendChild(modal);
    setTimeout(() => {
        modal.style.opacity = '1';
    });
};
// Function that creates and show list of songs
export const createList = () => {
    // App
    const app = document.getElementById('app');
    // Audio
    const audio = document.getElementById('js-audio');
    // Creating songs list
    const list = createElement(TagType.OL, 'list');
    playlist.forEach((element) => {
        // Creating item
        const item = createElement(TagType.LI, 'item');
        const text = createElement(TagType.SPAN, 'item__text');
        text.innerText = `${element.song} - ${element.author}`;
        item.appendChild(text);
        // Add click event
        item.addEventListener(EventListeners.CLICK, () => {
            createModal(element, audio);
            audio === null || audio === void 0 ? void 0 : audio.setAttribute('src', `./assets/songs/audio/${element.name}.mp3`);
            audio.play();
        });
        list.appendChild(item);
    });
    app === null || app === void 0 ? void 0 : app.appendChild(list);
};
//# sourceMappingURL=base.js.map