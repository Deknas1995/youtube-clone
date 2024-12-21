import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return(
    <div>
      <input className="search-input"
        type="text"
        placeholder="Sök"
        value={searchQuery}
        onChange={handleInputChange}

      />
    </div>
  )
}
