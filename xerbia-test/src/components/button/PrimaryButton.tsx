import { Button } from "@mui/material";

const PrimaryButton = (props: any) => {
  return (
    <Button
      data-testid="buttonPrimary"
      aria-label="share"
      onClick={props.onClick}
    >
      <div className="cardLibrary__text">{props.label}</div>
    </Button>
  );
};

export default PrimaryButton;
