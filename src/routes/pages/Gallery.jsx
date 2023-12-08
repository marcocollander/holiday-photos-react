import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <section>
      <Link to={'/gallery/tunezja'}>
        <article className='h-[85vh]  bg-amber-300 border-2 bg-[url("./images/splash/tunezja-cartagina.jpg")] bg-center bg-cover'></article>
      </Link>
      <article className='h-[85vh] bg-amber-300 border-2 bg-[url("./images/splash/palma-mobile.png")] bg-center bg-cover'></article>
      <article className='h-[70vh] bg-amber-300 border-2 bg-[url("./images/splash/valdemosa-mobile.png")] bg-center bg-cover'></article>
      <article className='h-[85vh] bg-amber-300 border-2 bg-[url("./images/splash/egipt-mobile.png")] bg-center bg-cover'></article>
      <article className='h-[70vh] bg-amber-300 border-2 bg-[url("./images/splash/rodos-mobile.png")] bg-center bg-cover'></article>
      <article className='h-[70vh] bg-amber-300 border-2 bg-[url("./images/splash/barcelona-mobile.png")] bg-center bg-cover'></article>
    </section>
  );
};

export default Gallery;
