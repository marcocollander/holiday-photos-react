import Photo from '../components/Photo/Photo';

const Gallery = () => {
  return (
    <section className='fotos wrapper' id='gallery'>
      <div className='fotos-box'>
        <Photo />
        <Photo />
        <Photo />
      </div>
    </section>
  );
};

export default Gallery;
