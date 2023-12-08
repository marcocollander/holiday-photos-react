const Section = ({ text, title, children }) => {
  return (
    <section className='relative'>
      <h2 className='absolute top-5 left-1/2 -translate-x-1/2'>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
