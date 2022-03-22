import React, { Component } from "react";
import { robots } from './components/robots';
import CardList from './components/CardList';

class App extends Component {
  render() {
    return (
      <CardList robots={robots}/>
    );
  }
}

export default App;
