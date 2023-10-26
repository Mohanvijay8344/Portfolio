import { Component, createRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import emailjs from "@emailjs/browser";

class Contact extends Component {
  constructor() {
    super();
    this.form = createRef();
  }
  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this.form.current,
        "YOUR_USER_ID"
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
  }
  render() {
    return (
      <section id="contact">
        <h2 className="contact_me">Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <div className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>Mohanvijay8344@gmail.com</h5>
              <a href="mailto:Mohanvijay8344@gmail.com">Send a message</a>
            </div>
            <div className="contact__option">
              <BiLogoInstagram className="contact__option-icon" />
              <h4>Instagram</h4>
              <h5>mr.bean_off</h5>
              <a href="https://www.instagram.com/mr.bean_off/?target_user_id=59888779073&ndid=6079abf29aab2G24bc3acca07f41G6079b08bfad86G9e4&utm_medium=email&utm_campaign=ig_suspicious_login&__bp=1">Send a message</a>
            </div>
            <div className="contact__option">
              <RiWhatsappLine className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+91 8344116557</h5>
              <a href="https://wa.me/+918344116557">
                Send a message
              </a>
            </div>
            <div className="contact__option">
              <BiLogoLinkedinSquare className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>Mohanraj Senthilnathan</h5>
              <a href="https://www.linkedin.com/in/mohanraj-senthilnathan-64209a15a/">
                Send a message
              </a>
            </div>
          </div>
          <form ref={this.form} onSubmit={this.sendEmail} action="">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
