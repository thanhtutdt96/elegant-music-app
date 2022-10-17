import { Song } from 'types/Song';

export type SearchResult = {
  artists: Artists;
  tracks: Tracks;
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
  track: Song;
};
