export interface Book {
  key: string;
  title: string;
  title_suggest: string;
  author_name: string[];
  author_key: string[];
  publish_date: string[];
  publisher: string[];
  publish_year: number[];
  first_publish_year: number;
  edition_key: string[];
  isbn: string[];
  oclc: string[];
  has_fulltext: boolean;
  edition_count: number;
  seed: string[];
  text: string[];
  type: string;
  ebook_count_i: 0;
  last_modified_i: number;
}
