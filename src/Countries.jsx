import React, {use} from 'react';
import Country from './Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <p>In the Countries: {countries.length}</p>
      <h3>Total Visited Countries:</h3>
      <div className="countries">
        {countries.map(country => <Country country={country}></Country>)}
      </div>
    </div>
  );
};

export default Countries;
