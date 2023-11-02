import swan from '../../images/swan_640.jpg'

const Contact = () => {
  return (
    <section className='contact wrapper' id='contact'>
      <img src={swan} alt="łabędź" />
      <h2 className='section-title'>kontakt</h2>

      {/* <p>
        <i className='fas fa-phone'>&nbsp;&nbsp;&nbsp;780 026 241</i>
      </p> */}
      <p className="contact__description">
        <i className='fas fa-envelope'></i>
          m.raubuc@wp.pl
      </p>

      {/* <h3>Adres</h3>
      <p>ul. Kwaśna 4</p>
      <p>53-425 Wrocław</p> */}
    </section>
  );
}

export default Contact;