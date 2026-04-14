import './App.css'
import Countries from './Countries'
import { Suspense } from 'react';

function App() {

  ///.then() is used when you want to fetch something imediately
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json());
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<p>Nadir on the go......</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}


export default App
