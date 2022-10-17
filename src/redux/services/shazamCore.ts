import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ArtistDetail } from 'types/ArtistDetail';
import { SearchResult } from 'types/SearchResult';
import { Song } from 'types/Song';
import { SongDetail } from 'types/SongDetail';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'c15f675bc8msh870e08eadd95f7cp13ecbfjsn71133ed23740');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<Song[], void>({ query: () => '/charts/world' }),
    getSongDetails: builder.query<SongDetail, string>({
      query: (songId: string) => `/tracks/details?track_id=${songId}`,
    }),
    getRelatedSongs: builder.query<Song[], string>({
      query: (songId: string) => `/tracks/related?track_id=${songId}`,
    }),
    getArtistDetails: builder.query<ArtistDetail, string>({
      query: (artistId: string) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongsByCountry: builder.query<Song[], string>({
      query: (countryCode: string) => `/charts/country?country_code=${countryCode}`,
    }),
    getSongsByGenre: builder.query<Song[], string>({
      query: (genre: string) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsBySearch: builder.query<SearchResult, string>({
      query: (searchTerm: string) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
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
