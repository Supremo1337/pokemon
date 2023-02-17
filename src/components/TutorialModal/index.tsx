import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Title } from "../Quiz/styles";
import { TutorialImage } from "./styles";
import BasicTabs from "../BasicTabs";

const style = {
  width: "95%",
  height: "80%",
  display: "flex",
  alignItems: "center",
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
  p: 2,
  outline: "none",
};

export default function TutorialModal() {
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
          <BasicTabs />
        </Box>
      </Modal>
    </div>
  );
}

