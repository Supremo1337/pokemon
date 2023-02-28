import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Title } from "../Quiz/styles";
import { TutorialImage } from "./styles";
import BasicTabs from "../BasicTabs";
import useMediaQuery from "@mui/material/useMediaQuery";

function style(mediaQuery: boolean) {
  return {
    width: mediaQuery ? "715px" : "95%",
    height: mediaQuery ? "515px" : "90%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background:
      "transparent linear-gradient(234deg, #23242E 0%, #181821 100%) 0% 0% no-repeat padding-box",
    border: "2px solid #000",
    boxShadow: "16px 12px 25px #00000069",
    borderRadius: "21px",
    p: 2,
    outline: "none",
  };
}

export default function TutorialModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const matches = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style(matches) }}>
        <BasicTabs />
      </Box>
    </Modal>
  );
}
