import { TextField, Typography } from "@mui/material";
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
      if (name.value !== "" && email.value !== "") {
        await emailjs.sendForm(
          "service_dy0so26",
          "template_jgiwoyg",
          form.current,
          "O2PFAojLhQYTGSaZH"
        );
        setFormSent(true);
      } else {
        alert("Name and email fields are required!");
      }
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
          <Typography>
            First time here? Fill out the fields and hit the SEND button!
          </Typography>
          <TextField
            variant="filled"
            id="name"
            name="name"
            label="Name"
            required
            {...name}
          />
          <TextField
            variant="filled"
            id="email"
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
