import React, { useEffect, useState } from "react";
import "./scss/MainPage.scss";
import { TextField } from "@mui/material";
import LibraryCard from "../components/LibraryCard";

type Book = {
  isbn: string;
  title: string;
  price: number;
  cover: string;
  synopsis: string;
};

const MainPage = (props: any) => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  const onchangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filterSearch = books.filter((book: Book) => {
    return book.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
  });

  return (
    <div className="mainPage">
      <div className="mainPage__search">
        <TextField
          inputProps={{ "data-testid": "recherche" }}
          error={false}
          id="outlined-error"
          label="Recherche"
          defaultValue=""
          onChange={onchangeText}
          fullWidth
        />
      </div>

      {/* <div data-testid="cart"></div>
      <div data-testid="cart"></div>
      <div data-testid="cart"></div>
      <div data-testid="cart"></div>
      <div data-testid="cart"></div>
      <div data-testid="cart"></div> */}

      <div className="mainPage__cardContainer">
        {filterSearch.map((book: Book, index: number) => (
          <div data-testid="cart" key={index}>
            <LibraryCard book={book} key={index.toString()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
