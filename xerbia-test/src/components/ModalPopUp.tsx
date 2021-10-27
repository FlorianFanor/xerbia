import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import "./scss/ModalPopUp.scss";
import SecondaryButton from "./button/SecondaryButton";

const ModalPopUp = (props: any) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <div className="modal__box">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Votre commande est enregistrée
            </Typography>
            <SecondaryButton
              onClick={props.handleClose}
              variant={"contained"}
              label={"Fermer"}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPopUp;
