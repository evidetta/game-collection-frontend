import React from 'react';
import GameListing from './GameListing'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = [
      {
        name: "Sonic the Hedgehog",
        release_year: 1991
      },
      {
        name: "Sonic the Hedgehog 2",
        release_year: 1992
      },
      {
        name: "Sonic the Hedgehog 3",
        release_year: 1994
      },
      {
        name: "Sonic & Knuckles",
        release_year: 1994
      },
      {
        name: "Toy Story",
        release_year: 1995
      }
    ];
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">Game Collection</a>
        </nav>
        <div className="container mt-5">
          <div className="row">
            <div className="col"></div>
            <div className="col-8">
              <GameListing data={this.state}></GameListing>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
