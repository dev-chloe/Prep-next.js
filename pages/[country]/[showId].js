import './style.scss';
import axios from 'axios';
import parser from 'html-react-parser';
import Cast from '../../componants/Cast';
import Error from 'next/error';
import CustomError from '../_error';
import { withAuthorization }from '../../utils/withAuthorization';

const ShowDetails = ({ show = {}, statusCode }) => {
  const { name, image, summary, _embedded } = show;

  if(statusCode) {
    return <CustomError statusCode = {statusCode} title="go back"/>
  }

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
ShowDetails.getInitialProps = async ({ query }) => {
  const { showId } = query;
  try {
    const response = await  axios.get(`http://api.tvmaze.com/shows/${showId}?embed=cast`);
    return {
      show: response.data
    }
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500
    }
  }
}

// 신버전 getInitialProps 보다 getServerSideProps를 사용하는 것을 권장함
// export const getServerSideProps = async ({ query }) => {
//   const { showId } = query;
 
//   try {
//     const response = await axios.get(
//       `https://api.tvmaze.com/shows/${showId}?embed=cast`
//     );
 
//     return {
//       props: {
//         show: response.data,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         statusCode: error.response ? error.response.status : 500
//       }
//       // props: {
//       //   error: error.error,
//       // },
//     };
//   }
// };

export default withAuthorization(ShowDetails);