function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tempratureConversion(temprature,convert){
  const input = parseFloat(temprature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output*1000)/1000;
  return rounded.toString();
}

function BoilingPoint(props) {
  return (
    <p>
      The Water would {props.celsius != "" && props.celsius >= 100 ? "" : "not"} boil
    </p>
  );
}

class TempratureInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const temprature = this.props.temprature;
    const scale = this.props.scale;
    return (
      <div>
        <h5> Enter Temprature in {scale} </h5>
        <input value={temprature} />
      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {temprature:'',scale:"celsius"}
  }
  render() {
    return (
      <div>
        <TempratureInput temprature={100} scale="fahrenheit" />
        <TempratureInput temprature={100} scale="celsius" />
        <BoilingPoint celsius={100} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
