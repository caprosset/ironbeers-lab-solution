import React, { Component } from 'react';
// import { useState } from 'react';


/******** SOLUTION WITH CLASSES ********/

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ query: target.value }, 
      () => this.props.searchBeer(this.state.query)
    );
  }

  render() {
    return (
      <div>
        <input
          type="text" 
          name="query" 
          id="query"
          value={this.state.query}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Searchbar;


/******** SOLUTION WITH HOOKS ********/

// function Searchbar({ searchBeer }) {
//   const [ query, setQuery ] = useState('');

//   const handleChange = ({ target }) => {
//     searchBeer(target.value);
//     setQuery(target.value);
//   }

//   return (
//     <div>
//       <input
//         type="text" 
//         name="query" 
//         id="query"
//         value={query}
//         onChange={handleChange}
//       />
//     </div>
//   )
// }

// export default Searchbar;