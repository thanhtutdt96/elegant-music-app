import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { JSONBIN_API_KEY, SONGS_BY_GENRE_MAPPING_ID } from 'assets/constants';
import { ArtistDetail } from 'types/ArtistDetail';
import { Song } from 'types/Song';
import { SongDetail } from 'types/SongDetail';

const rawBaseQuery = fetchBaseQuery({
  baseUrl: 'https://api.jsonbin.io/v3/b',
  prepareHeaders: (headers) => {
    headers.set('X-MASTER-KEY', JSONBIN_API_KEY);

    return headers;
  },
});

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: rawBaseQuery,
  endpoints: (builder) => ({
    getTopCharts: builder.query<Song[], void>({
      query: () => `/6967b8e7d0ea881f406bbdd9`,
      transformResponse: (response: { record: Song[] }) => response.record,
    }),
    getSongDetails: builder.query<SongDetail, string>({
      query: () => `/6967bb6a43b1c97be9306fb9`,
      transformResponse: (response: { record: SongDetail }) => response.record,
    }),
    getRelatedSongs: builder.query<Song[], string>({
      query: () => `/6967bdffd0ea881f406bc8d2`,
      transformResponse: (response: { record: Song[] }) => response.record,
    }),
    getArtistDetails: builder.query<ArtistDetail, string>({
      query: () => `/6967c21fd0ea881f406bd16e`,
      transformResponse: (response: { record: ArtistDetail }) => response.record,
    }),
    getSongsByCountry: builder.query<Song[], string>({
      query: () => `/6967c2dcd0ea881f406bd2c8`,
      transformResponse: (response: { record: Song[] }) => response.record,
    }),
    getSongsByGenre: builder.query<Song[], string>({
      query: (genre = 'POP') => `/${SONGS_BY_GENRE_MAPPING_ID[genre]}`,
      transformResponse: (response: { record: Song[] }) => response.record,
    }),
    getSongsBySearch: builder.query<Song[], string>({
      query: () => `/6967c4de43b1c97be93082e3`,
      transformResponse: (response: { record: Song[] }) => response.record,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
