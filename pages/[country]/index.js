// import {useEffect} from 'react';
import Error from 'next/error';
import axios from 'axios';
import cookies from 'nookies';

import './style.scss';
import Thumbnail from '../../componants/Thumbnail';

const Home = ({ shows, country, statusCode }) => {

  if(statusCode) {
    return <Error statusCode={statusCode} />
  }

  const rendershows = () => {
    return shows.map((showItems,index) => {
      const { show } = showItems;
      return (
      <li key={index}>
        <Thumbnail 
        imageUrl = { (show.image && show.image.medium || undefined) } 
        caption = {show.name}
        href = "/[country]/[showId]"
        as = {`/${country}/${show.id}`}
        />
      </li>
      )
    })
  }
  
  return (
   <ul className="tvshows">{ rendershows() }</ul>
  )
}

  Home.getInitialProps = async context => {
    try {
      const { defaultCountry } = cookies.get(context); 
      const country = context.query.country || defaultCountry || us;
      const response = await axios.get(
        `https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)
      return {
        shows: response.data,
        country
      }
    } catch (error) {
      return {
        statusCode: error.response ? error.response.status : 500 
      }
    }
    
  }

export default Home;