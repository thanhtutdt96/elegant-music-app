import { Song } from 'types/Song';

export type ArtistDetail = {
  albums: { [key: string]: Album };
  artists: { [key: string]: Artists };
  songs: { [key: string]: Song };
};

export type Album = {
  attributes?: AlbumAttributes;
  href: string;
  id: string;
  type: string;
};

export type AlbumAttributes = {
  albumName?: string;
  artistName: string;
  artwork: Artwork;
  audioLocale?: string;
  audioTraits: string[];
  composerName?: string;
  copyright?: string;
  discNumber?: number;
  durationInMillis?: number;
  editorialNotes?: PurpleEditorialNotes;
  genreNames: string[];
  hasLyrics?: boolean;
  hasTimeSyncedLyrics?: boolean;
  isAppleDigitalMaster?: boolean;
  isCompilation?: boolean;
  isComplete?: boolean;
  isMasteredForItunes: boolean;
  isPrerelease?: boolean;
  isSingle?: boolean;
  isrc?: string;
  name: string;
  playParams: PlayParams;
  previews?: Preview[];
  recordLabel?: string;
  releaseDate: Date;
  trackCount?: number;
  trackNumber?: number;
  upc?: string;
  url: string;
};

export type Artwork = {
  bgColor: string;
  hasP3: boolean;
  height: number;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  url: string;
  width: number;
};

export type PurpleEditorialNotes = {
  short: string;
  standard?: string;
};

export type PlayParams = {
  id: string;
  kind: Kind;
};

export enum Kind {
  Album = 'album',
  Song = 'song',
}

export type Preview = {
  url: string;
};

export type Artists = {
  attributes: Attributes;
  href: string;
  id: string;
  meta: {
    views: MetaViews;
  };
  relationships: Relationships;
  type: string;
  views: {
    'latest-release': LatestRelease;
    'top-songs': Albums;
  };
};

export type Attributes = {
  artwork: Artwork;
  genreNames: string[];
  name: string;
  url: string;
};

export type MetaViews = {
  order: string[];
};

export type Relationships = {
  albums: Albums;
};

export type Albums = {
  attributes?: AlbumsAttributes;
  data: AlbumsDatum[];
  href: string;
  next: string;
};

export type AlbumsAttributes = {
  title: string;
};

export type AlbumsDatum = {
  href: string;
  id: string;
  type: string;
};

export type LatestRelease = {
  attributes: AlbumsAttributes;
  data: LatestReleaseDatum[];
  href: string;
};

export type LatestReleaseDatum = {
  attributes?: DatumAttributes;
  href: string;
  id: string;
  type: string;
};

export type DatumAttributes = {
  artistName: string;
  artwork: Artwork;
  audioTraits: string[];
  copyright: string;
  editorialNotes?: PurpleEditorialNotes;
  genreNames: string[];
  isCompilation: boolean;
  isComplete: boolean;
  isMasteredForItunes: boolean;
  isPrerelease: boolean;
  isSingle: boolean;
  name: string;
  playParams: PlayParams;
  recordLabel: string;
  releaseDate: Date;
  trackCount: number;
  upc: string;
  url: string;
};

export type SongAttributes = {
  albumName?: string;
  artistName: string;
  artwork: Artwork;
  audioLocale?: string;
  audioTraits: string[];
  composerName?: string;
  copyright?: string;
  discNumber?: number;
  durationInMillis?: number;
  editorialNotes?: FluffyEditorialNotes;
  genreNames: string[];
  hasLyrics?: boolean;
  hasTimeSyncedLyrics?: boolean;
  isAppleDigitalMaster?: boolean;
  isCompilation?: boolean;
  isComplete?: boolean;
  isMasteredForItunes: boolean;
  isPrerelease?: boolean;
  isSingle?: boolean;
  isrc?: string;
  name: string;
  playParams: PlayParams;
  previews?: Preview[];
  recordLabel?: string;
  releaseDate: Date;
  trackCount?: number;
  trackNumber?: number;
  upc?: string;
  url: string;
};

export type FluffyEditorialNotes = {
  short: string;
};
