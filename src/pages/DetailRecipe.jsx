import React from "react";
// import DetailVedeoIsi from "../component/DetailVideo/DetailVedeoIsi";
import DetailResepIsi from "../component/DetailResep/DetailResepIsi";
import Nav from "../component/navbar/Nav";
import Footer from "../component/footer/footer";
// import CommetIsi from "../component/Commet/CommetIsi";

const DetailResep = () => {
  return (
    <>
      <Nav />
      <DetailResepIsi />
      {/* <CommetIsi /> */}
      <Footer />
      {/* <DetailVedeoIsi /> */}
    </>
  );
};

export default DetailResep;
