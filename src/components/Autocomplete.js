import React, { useState } from "react";

const Autocomplete = ({ suggestions, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelect = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="autocomplete">
      <input
        className="form-control select_patient"
        type="text"
        placeholder="Select the patient"
        value={searchTerm}
        onChange={handleChange}
      />
      {showSuggestions && (
        <ul className="suggestions">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelect(suggestion)}
                className="suggestion-item"
              >
                {suggestion}
              </li>
            ))
          ) : (
            <li className="no-suggestions">No suggestions available</li>
          )}
        </ul>
      )}
      <button className="btn-search" type="button" onClick={handleSearch}>
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default Autocomplete;


