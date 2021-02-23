import React from 'react';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/Navbar';
import BeerCard from '../components/BeerCard';

import { getBeerService } from './../beer.service';


/******** SOLUTION WITH CLASSES ********/

class SingleBeer extends React.Component {
  state = {
    beer: {}
  }
  
  componentDidMount() {
    const { beerId } = this.props.match.params;
    getBeerService(beerId)
    .then( ({data}) => this.setState({ beer: data }))
    .catch( (err) => console.log(err));
  }

  render() {
    return (  
      <div>
        <Navbar />
        <BeerCard {...this.state.beer} />
      </div>
    )
  }
}

export default withRouter(SingleBeer);


/******** SOLUTION WITH HOOKS ********/

// function SingleBeer() {
//   const [ beer, setBeer ] = useState({});
//   const { beerId } = useParams();

//   useEffect(() => {
//     getBeerService(beerId)
//     .then( ({data}) => setBeer(data))
//     .catch( (err) => console.log(err));
//   }, [])

//   // console.log('beer details => ', beer)

//   return (  
//     <div>
//       <Navbar />
//       <BeerCard {...beer} />
//     </div>
//   )
// }

// export default SingleBeer;
