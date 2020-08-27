import './style.scss';
import axios from 'axios';
import parser from 'html-react-parser';
import Cast from '../../componants/Cast';

const ShowDetails = ({ show }) => {
  const { name, image, summary, _embedded } = show;

  return (
    <div className="show_details">
      <div 
        className="show_details_poster"
        style={{ backgroundImage: `url(${image.original})` }}
        >
      </div>
      <h1>{name}</h1>
      {parser(summary)}

      { _embedded.cast.length > 0 && <Cast cast={_embedded.cast}/>}
    </div>
  )
}

// 구버전
// ShowDetails.getInitialProps = async () => {
//   const response = await  axios.get('http://api.tvmaze.com/shows/1?embed=cast');
//   return {
//     show: response.data
//   }
// }

// 신버전 getInitialProps 보다 getServerSideProps를 사용하는 것을 권장함
export const getServerSideProps = async ({ query }) => {
  const { showId } = query;
 
  try {
    const response = await axios.get(
      `https://api.tvmaze.com/shows/${showId}?embed=cast`
    );
 
    return {
      props: {
        show: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.error,
      },
    };
  }
};

export default ShowDetails;