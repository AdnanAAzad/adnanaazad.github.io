import React from "react";
import "./contact.css";
import { MdMarkEmailRead } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5zd439h",
        "template_qamkwzq",
        form.current,
        "I0F1u4mUJBZiO_mB-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>— Contact Me —</h2>

      <div className="container contact__container">
        {/* _____________________________________________________________ */}
        {/* CONTACT OPTIONS */}
        <div className="contact__options">
          {/* EMAIL */}
          <article className="contact__option">
            <MdMarkEmailRead className="contact__option-icon" />
            <h4>Email</h4>
            <h5>adnan.al.azad@gmail.com</h5>
            <a
              href="mailto:adnan.al.azad@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Send A Message
            </a>
          </article>

          {/* FB MESSENGER */}
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Facebook Messenger</h4>
            <h5>Adnan Azad</h5>
            <a
              href="https://m.me/plusroti"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Send A Message
            </a>
          </article>

          {/* WHATSAPP */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Adnan Azad</h5>
            <a
              href="https://api.whatsapp.com/send?phone+16477715614"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Send A Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {/* _____________________________________________________________ */}
        {/* PERSONALIZED CONTACT FORM */}
        
        <form ref={form} onSubmit={sendEmail}>
          <h4>Send a Personalized Message Right From This Webpage!</h4>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {/* _____________________________________________________________ */}
      </div>
    </section>
  );
};

export default Contact;
