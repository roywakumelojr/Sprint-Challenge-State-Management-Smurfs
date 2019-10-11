import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf, fetchSmurfs } from "../actions";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  componentDidMount() {
    this.props.fetchSmurfs();
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    this.props.addSmurf(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='welcome'>Welcome to your state management version of Smurfs!</div>
        <form>
          <input
            placeholder="Enter Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            placeholder="Enter Age"
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            placeholder="Enter Height"
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <div className='card-container'>
          {this.props.smurfs.map(smurf => (
            <div className='card'>
              <h2>{smurf.name}</h2>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    addingSmurf: state.addingSmurf
  };
};

export default connect(mapStateToProps, {fetchSmurfs, addSmurf})(App);
