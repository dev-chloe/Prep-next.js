// import {useEffect} from 'react';
import axios from 'axios';
import Thumbnail from '../../componants/Thumbnail';
import './style.scss';

const Home = ({ shows, country }) => {
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
    const country = context.query.country || us;
    const response = await axios.get(
      `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)
    return {
      shows: response.data,
      country
    }
  }

export default Home;