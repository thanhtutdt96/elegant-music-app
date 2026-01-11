import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RAPID_API_KEY } from 'assets/constants';
import songsByCountryMock from 'mocks/songsByCountry.json';
import songsByGenreMock from 'mocks/songsByGenre.json';
import topChartsMock from 'mocks/topCharts.json';
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
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<Song[], { countryCode?: string }>({
      // query: ({ countryCode = 'US' }) => `v2/charts/world?country_code=${countryCode}`,
      queryFn: async () => ({ data: topChartsMock as unknown as Song[] }),
    }),
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
      queryFn: async () => ({ data: songsByCountryMock as unknown as Song[] }),
    }),
    getSongsByGenre: builder.query<Song[], { genre: string; countryCode?: string }>({
      queryFn: async () => ({ data: songsByGenreMock as unknown as Song[] }),
    }),
    getSongsBySearch: builder.query<SearchResult, string>({
      query: (searchTerm: string) => `/v1/search/multi?search_type=SONGS&query=${searchTerm}`,
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
