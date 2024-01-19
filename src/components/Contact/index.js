function Contact() {
  return (
    <section className="contact section" id="contactme" aria-labelledby="label-contact">
      <h2 className="section_title">Contact Me</h2>
      <span className="section_subtitle">Get in touch</span>

      <ul className="contact_container container grid">
        <li className="contact_information">
          <i className="uil uil-phone contact_icon" />

          <div>
            <h3 className="contact_title">Call Me</h3>
            <span className="contact_subtitle">11 94924-5875</span>
          </div>
        </li>

        <li className="contact_information">
          <i className="uil uil-envelope contact_icon" />

          <div>
            <h3 className="contact_title">Email</h3>
            <span className="contact_subtitle">
              <a
                href="mailto:cavalho.devel@gmail.com?Subject=Olá André"
                target="_new"
                rel="external"
                className="contact_email"
              >
                cavalho.devel@gmail.com
              </a>
            </span>
          </div>
        </li>

        <li className="contact_information">
          <i className="uil uil-map-marker contact_icon" />

          <div>
            <h3 className="contact_title">Location</h3>
            <span className="contact_subtitle">Brazil - São Paulo</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
