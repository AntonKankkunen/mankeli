export function Question(props) {

    function whatInput() {
        if (props.isRadio) {
            return props.kysymykset.slice(1).map((item) => {
                return <label>{item}<input name="radio" value={item} onChange={props.radioOnChange} type="radio"/></label>
            })
        }
        else {
            return props.kysymykset.slice(1).map((item) => {
                return <label>{item}<input value={item} onChange={props.checkboxOnChange} type="checkbox"/></label>
            })
        }
    }
    var input = whatInput();
    return (
    <div className="App1">
        <p>{props.kysymykset[0]} ?</p>
        {input}
    </div>
  );
}