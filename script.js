function BoilingPoint(props){
    return (<p>The Water would {(props.celsius !='' && props.celsius >=100) ? "" : "not"} boil</p>);
}

ReactDOM.render(
    <BoilingPoint celsius = {100}/>,
    document.getElementById('root')
);
