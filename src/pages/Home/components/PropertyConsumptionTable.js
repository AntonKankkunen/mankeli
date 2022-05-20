const PropertyConsumptionTable = (props) => {
    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Kiinteistö</th>
            <th>Kulutuslaji</th>
            <th>Määrä</th>
            <th>Vuosi</th>
          </tr>
        </thead>
        <tbody>
            {props.propertyConsumptions.length === 0 ? <tr><td>{props.propertyName}</td><td>Ei</td><td>kulutus</td><td>tietoja</td></tr> : props.propertyConsumptions.map((prop, i) => {
              return <tr key={i}>
                  <td key={prop.property_name}>{prop.property_name}</td>
                  <td key={prop.consumption_measure}>{prop.consumption_measure}</td>
                  <td key={prop.consumption}>{prop.consumption}</td>
                  <td key={prop.year}>{prop.year}</td>
                </tr>
            })}
        </tbody>
      </table>
    );
}

export default PropertyConsumptionTable;