import { playlist } from './models/playlist.model.js';
import { ButtonTypes, EventListeners, TagType } from './types/base.types.js';
import { IPlaylistItem } from './types/playlist.types.js';

export function createElement<T extends HTMLElement>(
  tag: TagType = TagType.DIV,
  classes: string = ''
): T {
  const el: T = document.createElement(tag) as T;
  el.classList.add(classes);
  return el;
}

// Function that creates and show pop up
const createModal = (element: IPlaylistItem, audio: HTMLAudioElement) => {
  // * Creating modal
  // Modal
  const modal: HTMLDivElement = createElement<HTMLDivElement>(
    TagType.DIV,
    'modal'
  );

  // Modal background
  const modalBackground: HTMLDivElement = createElement<HTMLDivElement>(
    TagType.DIV,
    'modal__background'
  );
  modalBackground.addEventListener(EventListeners.CLICK, removePopUp);
  modal.appendChild(modalBackground);

  // Modal wrapper
  const modalWrapper: HTMLDivElement = createElement<HTMLDivElement>(
    TagType.DIV,
    'modal__wrapper'
  );
  modal.appendChild(modalWrapper);

  // * Creating modal content
  // Image
  const image: HTMLImageElement = createElement<HTMLImageElement>(
    TagType.IMG,
    'modal__image'
  );
  image.style.backgroundImage = `url(./assets/songs/images/${element.name}.jpg)`;
  modalWrapper.appendChild(image);

  // Content
  const content = createElement(TagType.DIV, 'modal__content');

  // Title
  const title: HTMLDivElement = createElement<HTMLDivElement>(
    TagType.DIV,
    'modal__title'
  );
  title.innerText = `${element.song}`;
  content.appendChild(title);

  // Subtitle
  const subtitle: HTMLDivElement = createElement<HTMLDivElement>(
    TagType.DIV,
    'modal__subtitle'
  );
  subtitle.innerText = `${element.author}`;
  content.appendChild(subtitle);

  // Button
  const button: HTMLButtonElement = createElement<HTMLButtonElement>(
    TagType.BUTTON,
    'modal__button'
  );
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
  const app: HTMLElement | null = document.getElementById('app');

  // Audio
  const audio: HTMLAudioElement | null = document.getElementById('js-audio') as HTMLAudioElement;

  // Creating songs list
  const list: HTMLOListElement = createElement<HTMLOListElement>(
    TagType.OL,
    'list'
  );
  playlist.forEach((element) => {
    // Creating item
    const item: HTMLLIElement = createElement<HTMLLIElement>(
      TagType.LI,
      'item'
    );
    const text: HTMLSpanElement = createElement<HTMLSpanElement>(
      TagType.SPAN,
      'item__text'
    );
    text.innerText = `${element.song} - ${element.author}`;
    item.appendChild(text);

    // Add click event
    item.addEventListener(EventListeners.CLICK, () => {
      createModal(element, audio);
      audio?.setAttribute('src', `./assets/songs/audio/${element.name}.mp3`);
      audio.play();
    });
    list.appendChild(item);
  });
  app?.appendChild(list);
};
