// import {useEffect} from 'react';
import axios from 'axios';

const Home = (props) => {
  // console.log(props.shows)
  // useEffect(() => {
  //   axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
  //     .then(response => console.log(response.data))
  // }, [])

  return (
    <h1>CountryTest</h1>
  )
}

  Home.getInitialProps = async () => {
    const response = await axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
    // console.log(response.data)
    return {
      shows: response.data
    }
  }

export default Home;