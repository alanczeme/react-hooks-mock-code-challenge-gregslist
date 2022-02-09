import React from "react";
// import ListingCard from "./ListingCard";

function ListingsContainer({ originalListings }) {

  return (
    <main>
      <ul className="cards">
        {originalListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
