import { Typography } from "@mui/material";
import { InputUnstyled } from "@mui/base";
import SpotifyButton from "../ui/SpotifyButton";
import emailjs from "emailjs-com";
import "./styles.sass";
import { useRef, useState } from "react";
import useForm from "../../hooks/use-form";

const ContactForm = () => {
  const form = useRef();
  const name = useForm();
  const email = useForm();
  const [formSent, setFormSent] = useState(false);

  const send = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_dy0so26",
        "template_jgiwoyg",
        form.current,
        "O2PFAojLhQYTGSaZH"
      );
      setFormSent(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {formSent ? (
        <p>Request submitted succesfully. Please wait for confirmation.</p>
      ) : (
        <form ref={form} className="contact-form-container" onSubmit={send}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            First time here?
          </Typography>
          <Typography id="modal-modal-description">
            Fill out the fields and hit the SEND button!
          </Typography>
          <InputUnstyled
            placeholder="Enter your name"
            className="name"
            name="name"
            label="Name"
            required
            {...name}
          />
          <InputUnstyled
            placeholder="Enter your email"
            className="email"
            name="email"
            type="email"
            label="Email"
            required
            {...email}
          />
          <SpotifyButton>SEND</SpotifyButton>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
