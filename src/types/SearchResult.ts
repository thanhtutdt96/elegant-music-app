import { SongAttributes } from './ArtistDetail';
import { Artist, Hub, Images, Share } from 'types/Song';

export type SearchResult = {
  artists: Artists;
  tracks: Tracks;
  properties: Record<string, unknown>;
};

export type Artists = {
  hits: ArtistsHit[];
};

export type ArtistsHit = {
  artist: HitArtist;
};

export type HitArtist = {
  adamid: string;
  avatar: string;
  name: string;
  verified: boolean;
  weburl: string;
};

export type Tracks = {
  hits: TracksHit[];
};

export type TracksHit = {
  track: SearchSong;
};

export type SearchSong = {
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
