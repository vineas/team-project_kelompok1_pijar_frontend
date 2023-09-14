import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style>
        footer {"{"}
        background-color: #efc81a; height: auto; justify-content: center;
        {"}"}
        .footer {"{"}
        text-align: center; width: auto; height: auto;
        {"}"}
        .text1 {"{"}
        font-family: sans-serif; font-style: normal; font-weight: 400;
        font-size: 62px; color: #2e266f; padding-top: 100px;
        {"}"}
        .text2 {"{"}
        font-family: sans-serif; font-style: normal; font-weight: 400;
        font-size: 20px; color: #707070; padding-bottom: 50px;
        {"}"}
        .footer2 {"{"}
        padding: 20px;
        {"}"}
        .footer2 a {"{"}
        list-style: none; padding: 10px; font-size: 16px; margin: 0;
        {"}"}
        @media screen and (max-width: 428px) {"{"}
        .text1 {"{"}
        font-size: 27px; padding-top: 30px;
        {"}"}
        .text2 {"{"}
        font-size: 10px; padding-bottom: 10px;
        {"}"}
        .footer2 {"{"}
        padding: 0 0 15px;
        {"}"}
        .footer2 a {"{"}
        list-style: none; padding: 10px; font-size: 6px; margin: 0;
        {"}"}
        {"}"}
      </style>

      <footer className="mt-5">
        <div className="footer container">
          <h1 className="text1">Eat, Cook, Repeat</h1>
          <h5 className="text2">Share your best recipe by uploading here !</h5>
        </div>
        <div className="footer2">
          <div
            className="produk"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <Link to="">Product</Link>
            </div>
            <div>
              <Link to="">Company</Link>
            </div>
            <div>
              <Link to="">Learn more</Link>
            </div>
            <div>
              <Link to="">Get in touch</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
