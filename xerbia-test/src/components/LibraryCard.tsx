import { useState } from "react";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./scss/LibraryCard.scss";

type AppProps = {
  id: string;
  title: string;
  description: string;
  cover: string;
  price: number;
};

const LibraryCard = ({ id, title, description, cover, price }: AppProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="cardLibraryContainer" key={id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              {/* <MoreVertIcon /> */}
            </IconButton>
          }
          title={title}
          subheader={`${price} €`}
        />
        <CardMedia component="img" height="500" image={cover} alt={cover} />
        <CardContent></CardContent>
        <CardActions disableSpacing>
          <div className="cardLibraryBtn">
            <IconButton aria-label="add to favorites">
              <ShoppingCartIcon />
            </IconButton>

            <IconButton aria-label="share" onClick={handleExpandClick}>
              <Button color="secondary">Voir plus</Button>
            </IconButton>
          </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default LibraryCard;
