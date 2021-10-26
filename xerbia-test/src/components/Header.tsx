import "./scss/Header.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Badge, Button, IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <LocalLibraryIcon color="action" fontSize="large" />
      </div>
      <div className="headerCart">
        <Button>Home</Button>
        <IconButton>
          <Badge badgeContent={4} color="success">
            <ShoppingCartIcon color="action" fontSize="large" />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
