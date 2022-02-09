import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingCard from "./ListingCard";

function App() {
  const [ listings, setListings ] = useState([]);
  const [ search, setSearch ] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, []);

  function handleDeleteListing(listingToDelete) {
    const updatedListings = originalListings.filter((listing) => listing.id !== listingToDelete.id);
    setListings(updatedListings);
  }

  const originalListings = listings.map((listing) => (
    <ListingCard 
      key={listing.id} 
      listing={listing}
      onDeleteListing={handleDeleteListing}
    />
  ));

  const filteredListings = originalListings.filter((listing) => 
  listing.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app">
      <Header originalListings={originalListings} search={search} setSearch={setSearch}/>
      <ListingsContainer originalListings={filteredListings} handleDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
