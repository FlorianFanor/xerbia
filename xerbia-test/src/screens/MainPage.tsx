import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./MainPage.scss";
import { Button, IconButton, TextField } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import LibraryCard from "../components/LibraryCard";

type Book = {
  isbn: string;
  title: string;
  price: number;
  cover: string;
  synopsis: string;
};

const MainPage = () => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    fetch("https://henri-potier.techx.fr/books")
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
      });
  };

  // const filterSearch = (inputId: string) => {
  //   // setSearchText(inputText);

  //   const newData = books.filter((item: Book) => {
  //     // myArray.filter(x => x.id === '45');
  //     if (inputId === "") {
  //       return getBooks();
  //     }

  //     item.cover === inputId;

  //     // return itemData.indexOf(textData) > -1;
  //   });

  //   setBooks(newData);
  // }; // End FilterSearch

  // const FilterSearch = (inputText) => {
  //   setSearchText(inputText);

  //   const newData = formationDataFilter.filter((item) => {
  //     const itemData = `${item.titre.toUpperCase()} ${item.description.toUpperCase()}`;

  //     const textData = inputText.toUpperCase();

  //     setSortType('');

  //     if (inputText === '') {
  //       return getFormation();
  //     }

  //     return itemData.indexOf(textData) > -1;
  //   });

  //   setFormationData(newData);
  // }; // End FilterSearch

  return (
    <div className="mainPage">
      <div className="mainPage search">
        <TextField
          error={false}
          id="outlined-error"
          label="Recherche"
          defaultValue="Henri Potier à l'école des sorciers. . ."
          fullWidth
        />
        <div className="filterBtn">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </div>
      </div>

      <div className="cardContainer">
        {books.map((book: Book) => (
          <LibraryCard
            id={book.isbn}
            title={book.title}
            description={book.synopsis}
            cover={book.cover}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
