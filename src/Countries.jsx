import React, {use} from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <p>In the Countries: {countries.length}</p>
      {countries.map(country => <Country country={country}></Country>)}
    </div>
  );
};

export default Countries;
