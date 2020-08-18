import Thumbnail from '../Thumbnail';
import './style.scss';

const Cast = ( { cast } ) => {
  const renderCast = () => {
    return cast.map(( castItem, index ) => {
      const { image, name } = castItem.person;

      return (
        <li key={index}>
          <Thumbnail
            imageUrl={ (image && image.medium) || undefined }
            caption={name}
          ></Thumbnail>
        </li>
      )
    })
  }

  return (
    <div className="cast">
      <h3>Cast</h3>
      <ul className="cast_list">
        { renderCast() }
      </ul>
    </div>
  )
}

export default Cast;