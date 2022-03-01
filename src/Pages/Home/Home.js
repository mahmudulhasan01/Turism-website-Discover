import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <h3>This is Home</h3>
      <Footer></Footer>
    </div>
  );
};

export default Home;
