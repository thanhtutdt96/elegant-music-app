import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

export const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;
export const GEO_IPIFY_KEY = import.meta.env.VITE_GEO_IPIFY_API_KEY;
export const JSONBIN_API_KEY = import.meta.env.VITE_JSONBIN_MASTER_KEY;

export const SONGS_BY_GENRE_MAPPING_ID: Record<string, string> = {
  POP: '6967b8afd0ea881f406bbd74',
  HIP_HOP_RAP: '6967b95cd0ea881f406bbf37',
  DANCE: '6967bc5a43b1c97be9307179',
  ELECTRONIC: '6967b8afd0ea881f406bbd74',
  SOUL_RNB: '6967b8afd0ea881f406bbd74',
  ALTERNATIVE: '6967b8afd0ea881f406bbd74',
  ROCK: '6967b8afd0ea881f406bbd74',
  LATIN: '6967b8afd0ea881f406bbd74',
  FILM_TV: '6967b8afd0ea881f406bbd74',
  COUNTRY: '6967b8afd0ea881f406bbd74',
};
