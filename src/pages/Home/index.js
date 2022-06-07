
import './style.css';
import { Link } from 'react-router-dom';
import PropertyInformationTable from './components/PropertyInformationTable';
import PropertyConsumptionTable from './components/PropertyConsumptionTable';
import SearchPropertyForm from './components/SearchPropertyForm'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';

export function HomePage() {
  const [propertyName, setPropertyName] = useState("");
  const [properties, setProperties] = useState([]);
  const [consumptionRate, setConsumptionRate] = useState("yearly");
  const [propertyConsumptions, setPropertyConsumptions] = useState([]);
  const [showConsumptionTable, negateShowConsumptionTable] = useState(false);
  const [ta, setTa] = useState("hei \nhei");

  const getProperty = async (e) => {
    console.log(propertyName);
    e.preventDefault();
    const response = await fetch(`https://api.ouka.fi/v1/properties_basic_information?property_name=like.${propertyName}*`, {
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    setProperties(data);

    if (showConsumptionTable) negateShowConsumptionTable(!showConsumptionTable);
  }

  useEffect(() => {
    console.log(propertyConsumptions);
  }, [propertyConsumptions]);

  const handleConsumpltionChange = (e) => {
    setConsumptionRate(e.target.value);
  }

  const getPropertyConsumption = async (selectedPropertyName) => {
    const response = await fetch(`https://api.ouka.fi/v1/properties_consumption_${consumptionRate}?property_name=like.${selectedPropertyName}&order=year.desc`, {
      headers: { 'Content-Type': 'application/json' }
     });
    const data = await response.json();
    setPropertyConsumptions(data);
    setPropertyName(selectedPropertyName);
    negateShowConsumptionTable(!showConsumptionTable);
  }
  const taChange = (e) => {
    setTa(e.target.value);
  }
  const showTable = showConsumptionTable ? 
  <PropertyConsumptionTable propertyConsumptions={propertyConsumptions} propertyName={propertyName}/> :
  <PropertyInformationTable properties={properties} getPropertyConsumption={getPropertyConsumption} />

  const formGrid = <div style={{width: "50%"}}>
        <SearchPropertyForm taChange={taChange} ta={ta} getProperty={getProperty} setPropertyName={setPropertyName} propertyName={propertyName} handleConsumpltionChange={handleConsumpltionChange}/>
        {showTable}
        </div>

  return (
    <div className='ontainer'>

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
