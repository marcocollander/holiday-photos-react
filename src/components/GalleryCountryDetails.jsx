// import { galleryData } from '../galleryData.js';

const GalleryCountryDetails = ({ countryId }) => {
  // let img = galleryData[0].images[0];
  // console.log(img);
  // let img0 = `bg-[url(${img})]`;
  // const classes = 'h-[85vh] bg-amber-300 border-2  bg-center bg-cover';
  return (
    countryId === 'tunezja' && (
      <section>
        <h1>{countryId}</h1>
        {/*<article className={classes + img0}></article>*/}
        <article className='h-[85vh] bg-amber-300 border-2  bg-center bg-cover'></article>
        <article className='h-[85vh] bg-amber-300 border-2  bg-center bg-cover'></article>
        <article className='h-[85vh] bg-amber-300 border-2  bg-center bg-cover'></article>
        <article className='h-[85vh] bg-amber-300 border-2  bg-center bg-cover'></article>
        <article className='h-[85vh] bg-amber-300 border-2  bg-center bg-cover'></article>
        <article className='h-[85vh] bg-amber-300 border-2  bg-center bg-cover'></article>
        <article className='h-[85vh] bg-amber-300 border-2  bg-center bg-cover'></article>
        <article className='h-[85vh] bg-amber-300 border-2  bg-center bg-cover'></article>
        <article className='h-[85vh] bg-amber-300 border-2  bg-center bg-cover'></article>
      </section>
    )
  );
};

export default GalleryCountryDetails;
