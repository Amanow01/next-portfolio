import Image from "next/image";
import "./Project-cart.css";
import React from "react";
import image from "../Public/no-image.jpg";
import UniBtn from "@/components/uniBtn/UniBtn";
import Link from "next/link";

const ProjectCart = ({ title, img, url, gitHub, newHtml }) => {
  return (
    <>
      <section className="section">
        <Image src={image} alt="no_image" width={200} />
        <h1 className="cart-text">{title}</h1>
        <UniBtn url={url} text="GitHub" />
      </section>
    </>
  );
};

export default ProjectCart;
