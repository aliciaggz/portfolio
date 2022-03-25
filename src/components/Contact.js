const Contact = (props) => {
  return (
    <section className="contact">
      <h1 className="contact__title">Contacto</h1>
      <form className="contact__form" id="form">
        <input
          className="contact__form--input"
          type="text"
          placeholder="Nombre"
        />
        <input
          className="contact__form--input"
          type="text"
          placeholder="E-mail"
        />
        <textarea id="message" type="text" placeholder="Mensaje"></textarea>
        <input
          className="contact__form--input"
          id="submit"
          type="submit"
          value="Enviar"
        ></input>
      </form>
    </section>
  );
};
export default Contact;
