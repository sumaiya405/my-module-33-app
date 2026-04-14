import React from 'react';
import './Country.css'
const Country = ({country}) => {
  return (
    <div className='country'>
      <img src={country.flags.flags.png} alt="" />
      <h3>Country name: {country.name.common}</h3>
      <h3>Population: {country.population.population}</h3>
    </div>
  );
};

export default Country;