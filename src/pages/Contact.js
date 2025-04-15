//import './contact.css'; // styling later

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>I'd love to hear from you! Whether you have a question, project idea, or just want to chat, feel free to drop me a message below.</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label><br></br>

          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label><br></br>

          <input type="email" id="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label><br></br>

          <textarea id="message" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>

    </div>
  );
};

export default Contact;
