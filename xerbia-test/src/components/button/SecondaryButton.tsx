import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const SecondaryButton = (props: any) => {
  return (
    <Button
      data-testid="buttonSecondary"
      onClick={props.onClick}
      variant={props.variant ? props.variant : ""}
      startIcon={props.icon ? props.icon : null}
    >
      {props.label}
    </Button>
  );
};

export default SecondaryButton;
