function BoilingPoint(props){
    return (<p>The Water would {(props.celsius !='' && props.celsius >=100) ? "" : "not"} boil</p>);
}

class TempratureInput extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const temprature = this.props.temprature;
        const scale = this.props.scale;
        return(
            <div>
                <h5> Enter Temprature in {scale} </h5>
                <input value={temprature}/>
            </div>
        )
    }
}

class Main extends React.Component{
    render(){
        return(
            <div>
                <TempratureInput temprature = {100} scale ='farehenite' />
                <TempratureInput temprature = {100} scale ='celsius' />
                <BoilingPoint celsius = {100}/>
            </div>
        )
    }

}


ReactDOM.render(
    <Main />
    ,document.getElementById('root')
);