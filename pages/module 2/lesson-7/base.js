import { playlist } from './models/playlist.model.js';
import { EventListeners, TagType } from './types/base.types.js';
export function createElement(tag, classes) {
    if (tag === void 0) { tag = TagType.DIV; }
    if (classes === void 0) { classes = ''; }
    var el = document.createElement(tag);
    el.classList.add(classes);
    return el;
}
// Function that creates and show pop up
var createModal = function (element, audio) {
    // * Creating modal
    // Modal
    var modal = createElement(TagType.DIV, 'modal');
    // Modal background
    var modalBackground = createElement(TagType.DIV, 'modal__background');
    modalBackground.addEventListener(EventListeners.CLICK, removePopUp);
    modal.appendChild(modalBackground);
    // Modal wrapper
    var modalWrapper = createElement(TagType.DIV, 'modal__wrapper');
    modal.appendChild(modalWrapper);
    // * Creating modal content
    // Image
    var image = createElement(TagType.IMG, 'modal__image');
    image.setAttribute('src', "./assets/songs/images/".concat(element.name, ".jpg"));
    modalWrapper.appendChild(image);
    // Content
    var content = createElement(TagType.DIV, 'modal__content');
    // Title
    var title = createElement(TagType.DIV, 'modal__title');
    title.innerText = "".concat(element.song);
    content.appendChild(title);
    // Subtitle
    var subtitle = createElement(TagType.DIV, 'modal__subtitle');
    subtitle.innerText = "".concat(element.author);
    content.appendChild(subtitle);
    // Remove element function
    function removePopUp() {
        modal.removeEventListener(EventListeners.CLICK, removePopUp);
        modal.style.opacity = '0';
        setTimeout(function () {
            audio.pause();
            modal.remove();
        }, 350);
    }
    modalWrapper.appendChild(content);
    // Add pop up in DOM
    document.body.appendChild(modal);
    setTimeout(function () {
        modal.style.opacity = '1';
    });
};
// Function that creates and show list of songs
export var createList = function () {
    // Audio
    var audio = document.getElementById('js-audio');
    // Creating songs list
    var list = createElement(TagType.OL, 'list');
    playlist.forEach(function (element) {
        // Creating item
        var item = createElement(TagType.LI, 'item');
        var text = createElement(TagType.SPAN, 'item__text');
        text.innerText = "".concat(element.song, " - ").concat(element.author);
        item.appendChild(text);
        // Add click event
        item.addEventListener(EventListeners.CLICK, function () {
            createModal(element, audio);
            audio === null || audio === void 0 ? void 0 : audio.setAttribute('src', "./assets/songs/audio/".concat(element.name, ".mp3"));
            audio.volume = 0.05;
            audio.play();
        });
        list.appendChild(item);
    });
    return list;
};
