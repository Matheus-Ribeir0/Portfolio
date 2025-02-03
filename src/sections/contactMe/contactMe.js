import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";

import Titles from "../../components/titles/titles";
import './contactMe.css'
import { GoPaperAirplane } from "react-icons/go";

function ContactMe() { // Renomeie a função para começar com uma letra maiúscula

  const [open, setOpen] = useState(false);
  return (
    <div className='section-container contact-me'>
      <Titles title="Contact-me"/>
      <div className='input-container'>
        <input className="nome"/>
        <input className="nome"/>
        <input className="message"/>
        <button className='button-contact'  variant="contained" onClick={() => setOpen(true)}><GoPaperAirplane /></button>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)} sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#222", // Fundo escuro
            color: "#fff", // Texto branco
            borderRadius: "10px", // Bordas arredondadas
            padding: "20px",
            width: "400px", // Largura do modal
          },
        }}>
        <DialogTitle>Meu Modal</DialogTitle>
        <DialogContent>
          <p>Isso é um modal usando Material-UI!</p>
          <Button onClick={() => setOpen(false)}>Fechar</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ContactMe; // Atualize a exportação para corresponder ao novo nome