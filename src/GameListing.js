import React from 'react';

class GameListing extends React.Component {
    render() {
        const data = this.props.data
        const listItems = data.map((d) => (
            <tr>
                <td>{d.name}</td>
                <td>{d.release_year}</td>
            </tr>
        ))

        return (
            <table className="table table-striped">
              <thead>
                <th scope="col">Name</th>
                <th scope="col">Release Year</th>
              </thead>
              <tbody>
                  {listItems}
              </tbody>
            </table>
        )
    }
}

export default GameListing;