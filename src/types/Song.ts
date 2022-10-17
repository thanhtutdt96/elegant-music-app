import { SongAttributes } from 'types/ArtistDetail';

export type Song = {
  artists: Artist[];
  hub: Hub;
  images: Images;
  key: string;
  layout: string;
  share: Share;
  subtitle: string;
  title: string;
  type: string;
  url: string;
  attributes?: SongAttributes;
  href: string;
  id: string;
};

export type Artist = {
  adamid: string;
  alias: string;
  id: string;
};

export type Hub = {
  actions: Action[];
  displayname: string;
  explicit: boolean;
  image: string;
  options: Option[];
  type: string;
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

export type Images = {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
};

export type Share = {
  avatar?: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
};
