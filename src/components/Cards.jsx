import React from 'react';
import Card from './Card';

const Cards = ({data, loading, error}) => {
  return (
    
    <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data.length > 0 && !loading && !error &&
        data.map(({ name, phone, site, logoURL, code, alliance }) => (
          <Card
            key={code}
            name={name}
            phone={phone}
            site={site}
            logoURL={`https://www.kayak.com/${logoURL}`}
            code={code}
            alliance={alliance}
          />
        ))}
    </div>
  );
}

export default Cards
