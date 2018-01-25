import {EntityState} from '@ngrx/entity';

export interface Book {
  id: number,
  author: string,
  country: string,
  imageLink: string,
  language: string,
  link: string,
  pages: number,
  title: string,
  year: number,
}
