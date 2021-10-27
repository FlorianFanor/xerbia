import "./scss/Header.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import HomeIcon from "@mui/icons-material/Home";

import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Header = (props: any) => {
  const [badgeNum, setBadgeNum] = useState(0);

  useEffect(() => {
    setBadgeNum(props.Cart.length);
  }, [props.Cart.length]);

  return (
    <nav className="header">
      <div className="headerLogo">
        <LocalLibraryIcon color="action" fontSize="large" />
      </div>
      <div className="header__cart">
        <Link to="/">
          <IconButton>
            <HomeIcon color="action" fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/cart">
          <IconButton>
            <Badge badgeContent={badgeNum} color="success">
              <ShoppingCartIcon color="action" fontSize="large" />
            </Badge>
          </IconButton>
        </Link>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: any) => {
  return {
    Cart: state.CartReducer,
  };
};

export default connect(mapStateToProps)(Header);
