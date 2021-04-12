import React from 'react';

const Country = (props) => {
    const {name, capital , region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {height: '50px'}
    return (
        <div style={{border: '1px solid grey', padding: '10px', margin: '5px'}}>
            <h4>This is {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Capital : {capital}</p>
            <p>Region : {region}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;