export function Result(props) {

    return (
    <div className="App1">
        {props.answers.map((item) => {
            return <p>{item}</p>
        })}
    </div>
  );
}