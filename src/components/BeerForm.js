import React, { Component } from 'react';
// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { createBeerService } from './../beer.service';


/******** SOLUTION WITH CLASSES ********/

class BeerForm extends Component {
  state = {
    name: '',
    description: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]:  value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await createBeerService(this.state);
    this.props.history.push('/beers');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={this.state.name} 
          onChange={this.handleChange}   
        />
  
        <label htmlFor="description">Description</label>
        <textarea 
          name="description" 
          id="description" 
          cols="30" 
          rows="10" 
          value={this.state.description} 
          onChange={this.handleChange}  
        />
  
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default withRouter(BeerForm);


/******** SOLUTION WITH HOOKS ********/

// function BeerForm() {
//   const initialState = {
//     name: '',
//     description: '',
//   }
//   const { push } = useHistory();

//   const [ state, setState ] = useState(initialState);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setState({ ...state, [name]:  value });
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const { data } = await createBeerService(state);
//     console.log('data', data);
//     push('/beers');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input 
//         type="text" 
//         name="name" 
//         id="name" 
//         value={state.name} 
//         onChange={handleChange}   
//       />

//       <label htmlFor="description">Description</label>
//       <textarea 
//         name="description" 
//         id="description" 
//         cols="30" 
//         rows="10" 
//         value={state.description} 
//         onChange={handleChange}  
//       />

//       <button type="submit">Add</button>
//     </form>
//   )
// }

// export default BeerForm;