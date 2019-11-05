import React, { Component } from 'react'
import axios from 'axios';

/*
Axios -  Promise based http request library which allows us to interface with rest api's.
  easy to use api

  install
    npm instal axios

  import
    import axios from 'axios';

  use
    axios.get('url').then(res => {
      console.log(res); // verify content
      this.setState({
        persons: res.data.map(person => <li>{person.name}</li>)
      });
*/

let resp = [];

export default class People extends Component {
  
  state = {
    persons: ["apple"]
  };

  componentDidMount = () => {
    axios('http://localhost:8080/people')
      .then(res => {
        resp = res.data;
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <h1>People Component</h1>
        <p>{this.state.persons[0]}</p>
      </div>
    )
  }
}
