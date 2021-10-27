import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./scss/LibraryCard.scss";
import { addToCart } from "./actions/CartActions";
import { connect } from "react-redux";
import PrimaryButton from "./button/PrimaryButton";

const LibraryCard = (
  props: any
  // { id, title, description, cover, price }: AppProps,
) => {
  const [expanded, setExpanded] = useState(false);
  const [displayedCart, setDisplayedCart] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToShoppingCart = () => {
    props.dispatch(addToCart(props.book));
  };

  const checkIfExistinCart = () => {
    if (
      props.Cart.findIndex((item: any) => item.id === props.book.isbn) !== -1
    ) {
      setDisplayedCart(false);
    }
  };

  useEffect(() => {
    checkIfExistinCart();
  }, [props.Cart]);

  return (
    <div className="cardLibrary__container" data-testid={"cart"}>
      <Card sx={{ maxWidth: 375 }}>
        <CardHeader
          action={<IconButton aria-label="settings"></IconButton>}
          title={props.book.title}
          subheader={`${props.book.price} €`}
        />
        <CardMedia
          component="img"
          height="500"
          image={props.book.cover}
          alt={props.book.cover}
        />
        <CardContent></CardContent>
        <CardActions disableSpacing>
          <div className="cardLibrary__btn">
            <PrimaryButton onClick={handleExpandClick} label={"Voir plus"} />
            {displayedCart ? (
              <IconButton aria-label="add to cart" onClick={addToShoppingCart}>
                <ShoppingCartIcon />
              </IconButton>
            ) : (
              <div className="cardLibrary__text">Ajouté au panier</div>
            )}
          </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {props.book.synopsis.map((description: string, index: number) => {
              return (
                <Typography
                  key={index.toString()}
                  variant="body2"
                  color="text.secondary"
                >
                  {description}
                </Typography>
              );
            })}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    Cart: state.CartReducer,
  };
};

export default connect(mapStateToProps)(LibraryCard);
