import React, {use, useState} from 'react';
import Country from './Country';
import './Countries.css';


const Countries = ({countriesPromise}) => {

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log('handle visited country is clicked',country);
    const newVisitedCountries = [...visitedCountries,country];
    setVisitedCountries(newVisitedCountries);
  }

  const handleVisitedFlags = (flag) => {
    // console.log('handle visited flags are clicked');
    const newVisitedFlags = [...visitedFlags,flag];
    setVisitedFlags(newVisitedFlags);
  }


  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);

  return (
    <div>
      <p>In the Countries: {countries.length}</p>
      
      <h3 className='visited-countries'>Total Visited Countries: {visitedCountries.length}</h3>

      <ol className='visited-countries'>
        {visitedCountries.map(country => <li>{country.name.common}</li>)}
      </ol>

      <h3>Visited Flags: {visitedFlags.length}</h3>

      {visitedFlags.map(flag => <img src={flag}></img>)}

      <div className="countries">
        {countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)}
      </div>
    </div>
  );
};

export default Countries;
