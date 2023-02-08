import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Text } from "../Quiz/styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 590,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Text color="#000" fontSize="1.4rem" letterSpacing="2px">
            Como usar:
          </Text>
          <ol
            style={{ color: "#000", fontSize: "1.4rem", letterSpacing: "2px" }}
          >
            <li
              style={{
                color: "#000",
                fontSize: "1.4rem",
                letterSpacing: "2px",
              }}
            >
              Clique em qualquer pokébola
            </li>
            <li
              style={{
                color: "#000",
                fontSize: "1.4rem",
                letterSpacing: "2px",
              }}
            >
              Clique na interrogação quando souber o nome do Pokémon
            </li>
            <li
              style={{
                color: "#000",
                fontSize: "1.4rem",
                letterSpacing: "2px",
              }}
            >
              Clique no Nome do Pokémon para fechar o Modal
            </li>
            <li
              style={{
                color: "#000",
                fontSize: "1.4rem",
                letterSpacing: "2px",
              }}
            >
              Clique no botão de aleatorizar, quando quiser trocar os pokémons
              que aparecem
            </li>
          </ol>
        </Box>
      </Modal>
    </div>
  );
}
