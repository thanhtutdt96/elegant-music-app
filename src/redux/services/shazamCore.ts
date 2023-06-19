import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RAPID_API_KEY } from 'assets/constants';
import { ArtistDetail } from 'types/ArtistDetail';
import { SearchResult } from 'types/SearchResult';
import { Song } from 'types/Song';
import { SongDetail } from 'types/SongDetail';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<Song[], void>({ query: () => 'v1/charts/world' }),
    getSongDetails: builder.query<SongDetail, string>({
      query: (songId: string) => `/v1/tracks/details?track_id=${songId}`,
    }),
    getRelatedSongs: builder.query<Song[], string>({
      query: (songId: string) => `/v1/tracks/related?track_id=${songId}`,
    }),
    getArtistDetails: builder.query<ArtistDetail, string>({
      query: (artistId: string) => `/v2/artists/details?artist_id=${artistId}`,
    }),
    getSongsByCountry: builder.query<Song[], string>({
      query: (countryCode: string) => `/v1/charts/country?country_code=${countryCode}`,
    }),
    getSongsByGenre: builder.query<Song[], string>({
      query: (genre: string) => `/v1/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsBySearch: builder.query<SearchResult, string>({
      query: (searchTerm: string) => `/v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
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
