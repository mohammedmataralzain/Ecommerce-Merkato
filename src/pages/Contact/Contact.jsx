import { Button } from "../../styles/Button";
import { Wrapper } from "./styled";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">feel free to contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.270819450541!2d34.47714424717128!3d31.5016941875565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2z2LrYstip!5e0!3m2!1sar!2s!4v1685515003789!5m2!1sar!2s"
        width="90%"
        height="450"
        style={{ marginLeft: "5%", border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contact-form">
        <form method="POST" action="https://formspree.io/f/xjvddqqn">
          <input
            type="text"
            placeholder="USER NAME"
            name="name"
            autoComplete="off"
            required
          />

          <input
            type="email"
            placeholder="EMAIL"
            name="email"
            autoComplete="off"
            required
          />

          <textarea
            rows={5}
            cols={30}
            name="message"
            placeholder="ENTER YOU MESSAGE"
            autoComplete="off"
            required
          ></textarea>
          <Button type="submit">SEND</Button>
        </form>
      </div>
      
    </Wrapper>
  );
};

export default Contact;
