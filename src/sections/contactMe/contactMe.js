import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import Titles from "../../components/titles/titles";
import "./contactMe.css";
import { GoPaperAirplane } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { useTranslation } from "react-i18next";

function ContactMe() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage(t("error_fields"));
      setSuccess(false);
      setOpen(true);
      return;
    }

    emailjs
      .send(
        "service_es78bwg", // Substituir pelo Service ID do EmailJS
        "template_lbu49m6", // Substituir pelo Template ID do EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "CtHdIg08RHhCd0gXV" // Substituir pela Public Key do EmailJS
      )
      .then(() => {
        setResponseMessage(t("message_return"));
        setSuccess(true);
        setOpen(true);
      })
      .catch(() => {
        setResponseMessage("Error to send message. Please, try again later.");
        setSuccess(false);
        setOpen(true);
      });
  };

  return (
    <div className="section-container contact-me">
      <Titles title={t("contact-me")} />
      <div className="input-container">
        <input
          className="nome"
          name="name"
          placeholder={t("your_name")}
          onChange={handleChange}
        />
        <input
          className="nome"
          name="email"
          placeholder={t("your_email")}
          onChange={handleChange}
        />
        <textarea
          className="message"
          name="message"
          placeholder={t("your_message")}
          onChange={handleChange}
        />
        <button className="button-contact" onClick={handleSubmit}>
          <GoPaperAirplane />
        </button>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#222",
            color: "#fff",
            borderRadius: "10px",
            padding: "20px",
            width: "400px",
            height: "auto",
          },
        }}
      >
        <DialogContent>
          <p>{responseMessage}</p>
          {success === true ? (
            <DotLottieReact
              src="https://lottie.host/9377a6ff-7bc2-46da-bd40-d3fd2dd10224/FHsY5G9mUn.lottie"
              autoplay
            />
          ) : null}

          <Button onClick={() => setOpen(false)}>Fechar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ContactMe;
