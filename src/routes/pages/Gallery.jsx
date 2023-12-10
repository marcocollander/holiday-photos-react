import { Link } from 'react-router-dom';

import { galleryData } from '../../galleryData';

const Gallery = () => {
  return (
    <section>
      {galleryData.map((item, index) => {
        return (
          <Link key={index} to={`/gallery/${item.id}`}>
            <article
              className="h-[70vh] bg-center bg-cover"
              style={item.bgImage}>
            </article>
          </Link>
        );
      })}


    </section>
  );
};

export default Gallery;
