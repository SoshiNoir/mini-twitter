// src/types/post.ts (or just /types/post.ts depending on your setup)

export interface Comment {
  id: number;
  text: string;
  date: string;
  author?: string;
}

export type Mood =
  | 'happy'
  | 'tired'
  | 'stressed'
  | 'missing-you'
  | 'grateful'
  | 'calm';

export type PostKind =
  | 'random-thought'
  | 'memory'
  | 'compliment'
  | 'daily-update';

export interface Post {
  id: string | number;
  date: string;      // '2025-09-12'
  time?: string;     // '21:37'

  text: string;

  media?: string[];
  comments?: Comment[];

  mood?: Mood;
  kind?: PostKind;
  title?: string;
  songUrl?: string;
  isPinned?: boolean;
}
