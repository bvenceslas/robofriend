import React, { Component } from "react";
import { robots } from './components/robots';
import CardList from './components/CardList';
import SearchBox from "./components/SearchBox";


class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: robots
    }
  }

  onSearchChange = (event) => {
    console.log(event)
  }

  render() {
      return (
        <div className="tc">
          <h2>RoboFriends</h2>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList robots={this.state.robots}/>
        </div>
      );
  }
}

export default App;
