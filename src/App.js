import React from 'react';
import GameListing from './GameListing'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      games: [],
      error: null,
      loaded: false
    };
  }

  componentDidMount() {
    const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT
    fetch(endpoint)
      .then(res => res.json())
      .then
      (
        result => {
          this.setState({
            games: result,
            loaded: true
          }) 
        },
        error => {
          this.setState({
            error: error.error,
            loaded: true
          })
        }
      )
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
              <GameListing data={this.state.games}></GameListing>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
