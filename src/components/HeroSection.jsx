import React from 'react';
import Cards from './Cards';

const HeroSection = ({data, filterHandler, loading, error}) => {
  return (
    <div className="m-4 p-4 space-y-4">
      <h1>Airlines</h1>
      <h3>Filter by Alliances</h3>
      {/* Filtering div  */}
      <div className="flex gap-[22px] text-sm md:text-base">
        <div className="flex gap-[5px] items-center">
          <input type={"checkbox"} value={"OW"} onChange={filterHandler} />
          <label>Oneworld</label>
        </div>
        <div className="flex gap-[5px] items-center">
          <input type={"checkbox"} value={"ST"} onChange={filterHandler} />
          <label>Sky Team</label>
        </div>
        <div className="flex gap-[5px] items-center">
          <input type={"checkbox"} value={"SA"} onChange={filterHandler} />
          <label>Star Allience</label>
        </div>
      </div>
      {/* Card container  */}

      
      <Cards data={data} loading={loading} error={error}/>
    </div>
  );
}

export default HeroSection