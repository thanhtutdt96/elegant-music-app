import { SearchSong } from 'types/SearchResult';

export type SongDetail = SearchSong & {
  albumadamid: string;
  alias: string;
  genres: Genres;
  isrc: string;
  releasedate: string;
  sections: Section[];
  trackadamid: string;
  urlparams: Urlparams;
};

export type Genres = {
  primary: string;
};

export type Action = {
  id?: string;
  name: string;
  type: string;
  uri?: string;
};

export type Option = {
  actions: Action[];
  beacondata: Beacondata;
  caption: string;
  colouroverflowimage: boolean;
  image: string;
  listcaption: string;
  overflowimage: string;
  providername: string;
  type: string;
};

export type Beacondata = {
  providername: string;
  type: string;
};

export type Section = {
  metadata?: Metadatum[];
  metapages?: Metapage[];
  tabname: string;
  type: string;
  text?: string[];
};

export type Metadatum = {
  text: string;
  title: string;
};

export type Metapage = {
  caption: string;
  image: string;
};

export type Urlparams = {
  '{trackartist}': string;
  '{tracktitle}': string;
};
