import React, {use, useState} from 'react';
import Country from './Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log('handle visited country is clicked',country);
  }


  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);

  return (
    <div>
      <p>In the Countries: {countries.length}</p>
      <h3>Total Visited Countries:</h3>
      <div className="countries">
        {countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)}
      </div>
    </div>
  );
};

export default Countries;
