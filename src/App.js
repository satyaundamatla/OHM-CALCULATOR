import React from 'react';
import Band from './Band';
import calculate from './calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    //Took these values from standard values avaialable on web
    this.bandValues = [{key: 0, label: "Black (0)", value: "0"}, {key:1, label: "Brown (1)", value: "1"}, {key:2, label: "Red (2)", value: "2"}, 
    {key:3, label: "Orange (3)", value: "3"}, {key:4, label: "Yellow (4)", value: "4"}, {key:5, label: "Green (5)", value: "5"}, {key:6, label: "Blue (6)", value: "6"},
    {key:7, label: "Violet (7)", value: "7"}, {key:8, label: "Gray (8)", value: "8"}, {key:9, label: "White (9)", value: "9"}];

    this.toleranceValues = [{key: 0, label: "Gold (\u00B1 5%)", value: "10"}, {key:1, label: "Silver (\u00B1 10%)", value: "11"}];
    
    this.state = {
      firstFigure: "0",
      secondFigure: "0",
      decimalMultiplier: "0",
      tolerance: "0",
      ohmValueText: "",
    };
  }

  getFirstFigure = (value) => {
     this.setState({firstFigure : value}, () => {
        this.setState(calculate(this.state))
     });   
  }
  
  getSecondFigure = (value) => {
     this.setState({secondFigure : value}, () => {
        this.setState(calculate(this.state));
     });
  }
  
  getDecimalMultiplier = (value) => {
     this.setState({decimalMultiplier : value}, () => {
        this.setState(calculate(this.state));
     });
  }

  getTolerance = (value) => {
     this.setState({tolerance : value}, () => {
        this.setState(calculate(this.state));
     });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">OHM CALCULATOR</h1>
        </header>
        <div className="Wrapper">
          <Band changeHandler={this.getFirstFigure} data={this.bandValues}/>
          <Band changeHandler={this.getSecondFigure} data={this.bandValues}/>
          <Band changeHandler={this.getDecimalMultiplier} data={this.bandValues}/>
          <Band changeHandler={this.getTolerance} data={this.toleranceValues}/>
          <label>Resistance: {this.state.ohmValueText}</label>
        </div>
      </div>
    );
  }
}

export default App;
