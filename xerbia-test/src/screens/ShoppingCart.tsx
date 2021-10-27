import "./scss/ShoppingCart.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../components/actions/CartActions";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalPopUp from "../components/ModalPopUp";
import SecondaryButton from "../components/button/SecondaryButton";

const columns = [
  {
    field: "title",
    headerName: "Titre",
    width: 350,
    editable: false,
  },

  {
    field: "price",
    headerName: "Prix",
    type: "number",
    width: 70,
    editable: false,
  },
];

const ShoppingCart = (props: any) => {
  const [removedBook, setRemovedBooks] = useState([]);
  const [totalPriceBeforeDiscount, setTotalPriceBeforeDiscount] = useState(0);
  const [bestOffers, setBestOffers] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  //handle remove from cart
  const handleDelete = () => {
    props.dispatch(removeFromCart(removedBook));
    setBestOffers(0);
  };

  //Loop through the state books to find the prices and the books id
  const getBooksDetails = () => {
    let total: number = 0;
    let bookId: any = [];

    props.Cart.map((book: any) => {
      total += book.price;
      bookId.push(book.id);
    });

    setTotalPriceBeforeDiscount(total);
    getBooksId(bookId, total);
  };

  //Stringify and concatenate the ids (isbn) and call the getDiscount method
  const getBooksId = (books: [], total: number) => {
    let book = books.join();
    if (book) {
      getDiscount(book, total);
    }
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const calculateTotal = () => {
    return (totalPriceBeforeDiscount - bestOffers).toFixed(2);
  };
  //Call the commercial offers API
  const getDiscount = (selectedBooksId: string, total: number) => {
    let url = `https://henri-potier.techx.fr/books/${selectedBooksId}/commercialOffers`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        return result.offers;
      })
      .then((offer: any) => calculateBestOffer(offer, total));
  };

  const calculateBestOffer = (offers: any, total: number) => {
    // Calculate the final price with all of the 3 offers applied (under certain conditions)

    //Percentage
    if (offers.find((x: any) => x.type === "percentage")) {
      let percentageOffer = offers.find((x: any) => x.type === "percentage");
      let bestOffer = total * (percentageOffer.value / 100);
      percentageOffer.bestOffer = bestOffer;
    }

    //Minus
    if (offers.find((x: any) => x.type === "minus")) {
      let minusOffer = offers.find((x: any) => x.type === "minus");
      if (minusOffer.value < total) {
        minusOffer.bestOffer = minusOffer.value;
      } else {
        minusOffer.bestOffer = 0;
      }
    }

    //Slice
    if (offers.find((x: any) => x.type === "slice")) {
      let sliceOffer = offers.find((x: any) => x.type === "slice");
      if (sliceOffer.sliceValue < total) {
        let slicedNum = Math.floor(total / sliceOffer.sliceValue);

        let bestOffer = slicedNum * sliceOffer.value;

        sliceOffer.bestOffer = bestOffer;
      } else {
        sliceOffer.bestOffer = 0;
      }
    }
    //Get the best offer

    offers.sort(
      (a: any, b: any) => parseFloat(b.bestOffer) - parseFloat(a.bestOffer)
    );

    setBestOffers(offers[0].bestOffer.toFixed(2));
  };

  useEffect(() => {
    getBooksDetails();
  }, [props.Cart]);

  return (
    <div className="shoppingCart">
      <div className="shoppingCart__left">
        <div className="shoppingCart__title">
          <h3>Votre panier:</h3>
        </div>

        <div className="shoppingCart__grid">
          <DataGrid
            rows={props.Cart}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(selected: any) =>
              setRemovedBooks(selected)
            }
          />
        </div>
        {removedBook.length > 0 ? (
          <SecondaryButton
            onClick={handleDelete}
            variant={"outlined"}
            icon={<DeleteIcon />}
            label={"Supprimer"}
          />
        ) : null}
      </div>
      <div className="shoppingCart__right">
        <div className="shoppingCart__box">
          <div className="shoppingCart__box-details" data-testid="subtotal">
            <h3>Sous-total</h3>€ {totalPriceBeforeDiscount.toFixed(2)}
          </div>
          <div className="shoppingCart__box-details" data-testid="offers">
            <h3>offres commerciales: </h3> € {bestOffers}
          </div>
          <div className="shoppingCart__box-details">
            <h3>Total: </h3>
            <h3 data-testid="totalPrice">€ {calculateTotal()} </h3>
          </div>
          <SecondaryButton
            onClick={handleModal}
            variant={"contained"}
            label={"Passer la commande"}
          />
        </div>
      </div>
      <ModalPopUp open={modalOpen} handleClose={handleModal} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    Cart: state.CartReducer,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
