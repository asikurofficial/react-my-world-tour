import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const { name, flags, population, area, cca3 } = country || {}

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParams = () =>handleVisitedCountries(country);


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name : {name?.common}</h3>
            <img className='img' src={flags?.png} alt="" />
            <p>Population : {population}</p>
            <p>area : {area}</p>
            <p><small>code : {cca3}</small></p>
            <button className='btn' onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <br />
            <button className='btn' onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            {visited ? "I already visited" : "I'll visit soon"}
        </div>
    );
};

export default Country;