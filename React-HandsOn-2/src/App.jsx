import { useState, useEffect, useRef } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const debounceTimer = useRef(null);

  // Fetch all countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching data');
        setCountries([]);
        setFilteredCountries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Handle search with debounce
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);

    // Clear previous timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set new timer for debounce (300ms)
    debounceTimer.current = setTimeout(() => {
      if (searchQuery.trim() === '') {
        setFilteredCountries(countries);
      } else {
        const filtered = countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCountries(filtered);
      }
    }, 300);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🌍 Country Explorer</h1>
        <p>Discover countries around the world</p>
      </header>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div className="loading-state">
          <p>Loading countries...</p>
        </div>
      )}

      {error && (
        <div className="error-state">
          <p>❌ Error: {error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="results-info">
          <p>{filteredCountries.length} country(ies) found</p>
        </div>
      )}

      {!loading && !error && filteredCountries.length === 0 && query && (
        <div className="no-results">
          <p>No countries found matching "{query}"</p>
        </div>
      )}

      {!loading && !error && filteredCountries.length > 0 && (
        <CountryList countries={filteredCountries} />
      )}
    </div>
  );
}

export default App;
