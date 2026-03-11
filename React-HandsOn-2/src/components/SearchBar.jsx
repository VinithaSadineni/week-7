import { useRef, useEffect } from 'react';

function SearchBar({ onSearch }) {
  const inputRef = useRef(null);

  // Auto-focus the search input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search countries by name..."
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
