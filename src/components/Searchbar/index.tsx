import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchMatch = useMatch('/search/:searchTerm');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const routeSearchTerm = searchMatch?.params?.searchTerm;
    if (routeSearchTerm) {
      setSearchTerm(decodeURIComponent(routeSearchTerm));
      return;
    }

    if (!location.pathname.startsWith('/search')) {
      setSearchTerm('');
    }
  }, [location.pathname, searchMatch?.params?.searchTerm]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const next = searchTerm.trim();
    if (!next) return;

    navigate(`/search/${encodeURIComponent(next)}`);
  };

  return (
    <form
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
      onSubmit={handleSubmit}>
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex-row flex justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          type="search"
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search for songs"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
