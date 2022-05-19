
import './style.css';
import { Link } from 'react-router-dom';
import Test from './components/Test';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';

export function HomePage() {
  const [propertyName, setPropertyName] = useState("");
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState({});

  useEffect(() => {
    console.log(properties);
    console.log(property);
  }, [property]);

  const getProperty = async (e) => {
    console.log(propertyName);
    e.preventDefault();
    const response = await fetch(`https://api.ouka.fi/v1/properties_basic_information?property_name=like.${propertyName}*`, {
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    setProperties(data);
    setProperty(data[0]);
  }

  const formGrid = <div style={{width: "50%"}}>
        <form onSubmit={e => getProperty(e)} style={{margin: "2%"}} >
            <fieldset style={{margin:0,padding:0,border:"solid"}}>
              <div style={{float: "left"}}>
              <h4>Hae kiinteistö</h4> <br/>
              <label>Kiinteistön nimi <input onChange={event => setPropertyName(event.target.value)} value={propertyName} type="text" id="fname" name="fname"/></label><br/><br/>
              <input type="submit" value="Submit"/>
              </div>
            </fieldset>
        </form>
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
            <tr>
              <th>Kiinteistö</th>
              <th>Osoite</th>
              <th>Postinumero</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
              {properties.map((prop, i) => {
                return <tr key={i}>
                  <td key={prop.property_name}>{prop.property_name}</td>
                  <td key={prop.property_address}>{prop.property_address}</td>
                  <td key={prop.postal_code}>{prop.postal_code}</td>
                  <td key={prop.property_id}>{prop.property_id}</td>
                </tr>
              })}
          </tbody>
        </table></div>

  return (
    <div className='Container'>

      {formGrid}

      <div className="App-line"></div>
      
      <main className="App-main">
        <p>
          Page 1
        </p>

        <Link to="/page2" className="App-link">
          Next Page
        </Link>
      </main>
    </div>
  );
}
