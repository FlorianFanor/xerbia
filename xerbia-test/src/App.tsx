import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import MainPage from "./screens/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
