const SearchPropertyForm = (props) => {
    return (<form onSubmit={e => props.getProperty(e)} style={{margin: "2%"}} >
    <fieldset style={{margin:0,padding:0,border:"solid"}}>
      <div style={{display: "flex"}}>
        <div style={{float: "left"}}>
          <h4>Hae kiinteistö</h4> <br/>
          <label>Kiinteistön nimi <input onChange={event => props.setPropertyName(event.target.value)} value={props.propertyName} type="text"/></label><br/><br/>
          <input type="submit" value="Submit"/>
          <textarea style={{"resize": "none"}} onChange={props.taChange} value={props.ta} />
        </div>
        <div style={{marginTop: "10px", marginLeft:"10px"}}>
          Kulutus
          <br/>
          <label style={{float:"right"}}>Vuosi <input onChange={e => props.handleConsumpltionChange(e)} type="radio" value="yearly" name='consumption'/></label>
          <br/>
          <label>Kuukausi <input onChange={e => props.handleConsumpltionChange(e)} type="radio" value="monthly" name='consumption'/></label>
          <br/>
          <label style={{float:"right"}}>Päivä <input onChange={e => props.handleConsumpltionChange(e)} type="radio" value="daily" name='consumption'/></label>
          <br/>
          <label style={{float:"right"}}>Tunti <input onChange={e => props.handleConsumpltionChange(e)} type="radio" value="hourly" name='consumption'/></label>
        </div>
      </div>
    </fieldset>
</form>);
}

export default SearchPropertyForm;