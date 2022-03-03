import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import useFirebase from "../../Hooks/useFirebase";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
  const { user } = useFirebase;
  console.log(user);

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>

      <Services></Services>

      <h3>This is Home</h3>
      <Footer></Footer>
    </div>
  );
};

export default Home;
