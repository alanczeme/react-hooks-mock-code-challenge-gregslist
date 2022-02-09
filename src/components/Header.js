import React from "react";
import Search from "./Search";

function Header({originalListings, search, setSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search originalListings={originalListings} search={search} setSearch={setSearch}/>
    </header>
  );
}

export default Header;
