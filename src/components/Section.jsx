import img01 from '../images/tunisia/tunisia-01.png';
import img02 from '../images/tunisia/tunisia-02.png';
import img03 from '../images/tunisia/tunisia-03.png';
import img04 from '../images/tunisia/tunesia-04.png';

const Section = () => {
  const bgImage01 = {
    backgroundImage: `url(${img01}`,
  };
  const bgImage02 = {
    backgroundImage: `url(${img02}`,
  };
  const bgImage03 = {
    backgroundImage: `url(${img03}`,
  };
  const bgImage04 = {
    backgroundImage: `url(${img04}`,
  };
  return (
    <section>
      <article
        className='h-[75vh] bg-cover bg-center'
        style={bgImage01}
      ></article>
      <article
        className='h-[75vh] bg-cover bg-center'
        style={bgImage02}
      ></article>
      <article
        className='h-[75vh] bg-cover bg-center'
        style={bgImage03}
      ></article>
      <article
        className='h-[75vh] bg-cover bg-center'
        style={bgImage04}
      ></article>
      <article
        className='h-[75vh] bg-cover bg-center'
        style={bgImage01}
      ></article>
      <article
        className='h-[75vh] bg-cover bg-center'
        style={bgImage01}
      ></article>
      <article
        className='h-[75vh] bg-cover bg-center'
        style={bgImage01}
      ></article>
      <article
        className='h-[75vh] bg-cover bg-center'
        style={bgImage01}
      ></article>
      <article
        className='h-[75vh] bg-cover bg-center'
        style={bgImage01}
      ></article>
    </section>
  );
};

export default Section;
