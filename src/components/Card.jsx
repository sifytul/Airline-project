import React, { useState } from 'react';

const Card = ({name, phone, logoURL, site, alliance}) => {
    const [showDetails, setShowDetails] = useState(false)
  return (
    <div
      className="h-[185px] flex items-center border p-4 shadow-sm rounded"
      onMouseEnter={() => setShowDetails(!showDetails)}
      onMouseLeave={() => setShowDetails(!showDetails)}
    >
      <div className="w-1/3">
        <img loading="lazy" src={logoURL} className="h-15 w-15 object-cover" />
      </div>
      <div className={`p-4 w-2/3 overflow-hidden text-ellipsis `}>
        <p className="font-bold">{name}</p>
        <div
          className={`text-sm text-gray-500 ${
            showDetails ? "" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <p>{alliance}</p>
          <p>{phone}</p>
          <button className="mx-4 my-2 px-2 py-1 bg-[#ff9452] text-white italic rounded hover:bg-[#FF690F] duration-200">
            <a href={site}>Explore more</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card