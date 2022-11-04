export interface IPlaylistItem {
  isActive: boolean;
  author: Author;
  name: string;
  song: string;
  id: number;
}

export enum Author {
  LYNYRD_SKYNYRD = 'LYNYRD SKYNYRD',
  LED_ZEPPELIN = 'LED ZEPPELIN',
  JIMI_HENDRIX = 'JIMI HENDRIX',
  DEEP_PURPLE = 'DEEP PURPLE',
  METALLICA = 'METALLICA',
  QUEEN = 'QUEEN',
  AC_DC = 'AC/DC',
}