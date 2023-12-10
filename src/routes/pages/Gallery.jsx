import tunisia from '../../images/gallery/tunisia-carthage.jpg';
import palma from '../../images/gallery/palma.png';
import valdemosa from '../../images/gallery/valdemosa-mobile.png';
import egipt from '../../images/gallery/egipt.png';
import rodos from '../../images/gallery/rodos-mobile.png';
import barcelona from '../../images/gallery/barcelona-mobile.png';

import { Link } from 'react-router-dom';

const Gallery = () => {
  const bgImageTunisia = {
    backgroundImage: `url(${tunisia})`,
  };
  const bgImagePalma = {
    backgroundImage: `url(${palma})`,
  };
  const bgImageValdemosa = {
    backgroundImage: `url(${valdemosa})`,
  };
  const bgImageEgipt = {
    backgroundImage: `url(${egipt})`,
  };
  const bgImageRodos = {
    backgroundImage: `url(${rodos})`,
  };
  const bgImageBarcelona = {
    backgroundImage: `url(${barcelona})`,
  };

  return (
    <section>
      <Link to={'/gallery/gallery01'}>
        <article
          className='h-[60vh] bg-center bg-cover'
          style={bgImageTunisia}
        ></article>
      </Link>
      <article
        className='h-[75vh] bg-center bg-cover'
        style={bgImagePalma}
      ></article>
      <article
        className='h-[75vh] bg-center bg-cover'
        style={bgImageValdemosa}
      ></article>
      <article
        className='h-[75vh] bg-center bg-cover'
        style={bgImageEgipt}
      ></article>
      <article
        className='h-[80vh] bg-center bg-cover'
        style={bgImageRodos}
      ></article>
      <article
        className='h-[50vh] bg-center bg-cover'
        style={bgImageBarcelona}
      ></article>
    </section>
  );
};

export default Gallery;
