import React, { useState } from 'react';
import './Country.css'
const Country = ({country , handleVisitedCountries, handleVisitedFlags}) => {
  const [visited, setVisited] = useState(false);

  const handleClk = () => {
    // if(visited){
    //   setVisited(false);
    // }else{
    //   setVisited(true);
    // }

    setVisited(visited ? false : true);
    handleVisitedCountries(country);
    
  
  }
  return (
    <div className={`country ${visited && 'country-visit'}`}>
      <img src={country.flags.flags.png} alt="" />
      <h3>Country name: {country.name.common}</h3>
      <h3>Population: {country.population.population}</h3>
      <h3>Area: {country.area.area} 
        {country.area.area > 300000 ? <p>big area </p> : <p>small area</p>}
      </h3>
      <button onClick={handleClk}>
        {visited ? 'Visited' : 'Not Visited'}
      </button>
      <button onClick={() => { handleVisitedFlags(country.flags.flags.png)}}>Add flag</button>
    </div>
  );
};

export default Country;