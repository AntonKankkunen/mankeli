const PropertyInformationTable = (props) => {
    return (
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
            {props.properties.map((prop, i) => {
              return <tr key={i}>
                  <td key={prop.property_name}><button className='propertyName' onClick={() => props.getPropertyConsumption(prop.property_name)}>{prop.property_name}</button></td>
                  <td key={prop.property_address}>{prop.property_address}</td>
                  <td key={prop.postal_code}>{prop.postal_code}</td>
                  <td key={prop.property_id}>{prop.property_id}</td>
                </tr>
            })}
        </tbody>
      </table>
    );
}

export default PropertyInformationTable;