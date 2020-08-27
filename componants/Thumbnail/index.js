import './style.scss';
import Link from 'next/link';

const Thumbnail = ({
  imageUrl = 'https://via.placeholder.com/210x295?text=?', 
  caption,
  href = '',
  as = '',
  small = false
  }) => {
  return (
    <div className="thumbnail">
      <Link href={href} as={as}>
        <a>
          <img src={imageUrl} className="thumbnail_img" />
          <h3 className="thumbnail_caption">{caption}</h3>
        </a>
      </Link>
      <style jsx>{`
        .thumbnail_img {
          width: ${small ? '100px' : 'auto'}
        }
      `}</style>
    </div>
  )
}

export default Thumbnail;