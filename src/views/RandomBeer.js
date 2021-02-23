import React, { Component } from 'react';
// import { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import Navbar from '../components/Navbar';
import { getRandomBeer } from './../beer.service';


/******** SOLUTION WITH CLASSES ********/

class RandomBeer extends Component {
  state = {
    randomBeer: {}
  }

  componentDidMount() {
    getRandomBeer()
    .then( ({ data }) => this.setState({ randomBeer: data }))
    .catch( (err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar />
        <BeerCard {...this.state.randomBeer} />
      </div>
    )
  }
}

export default RandomBeer;


/******** SOLUTION WITH HOOKS ********/

// function RandomBeer() {
//   const [ randomBeer, setRandomBeer ] = useState({});

//   useEffect(() => {
//     getRandomBeer()
//     .then( ({ data }) => setRandomBeer(data))
//     .catch( (err) => console.log(err));
//   }, [])

//   // console.log('randomBeer => ', randomBeer);

//   return (
//     <div>
//       <Navbar />
//       <BeerCard {...randomBeer} />
//     </div>
//   )
// }

// export default RandomBeer;