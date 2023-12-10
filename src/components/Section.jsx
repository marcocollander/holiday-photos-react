import { galleryData } from '../galleryData';

const Section = ({ galleryId }) => {

  let images = galleryData.find(item => item.id === galleryId)

  if (images.bgImages === undefined) {
    return (
      <h2>Brak zdjęć</h2>
    )
  }

  return (
    <section>
      {
        images.bgImages.map((item, index) => {
        return (
          <article key={index} className="h-[45vh] bg-cover bg-center" style={item}></article>
        );
      })}

    </section>
  );
};

export default Section;
