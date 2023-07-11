import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const id = params.productId;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  });
  // handling addtocart function
  const addToCart = () => {
    //fetching data from the localstorage if there is data otherwise assign empty array
    let cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
    if (!Array.isArray(cartItem)) {
      cartItem = [];
    }
    const productItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
      rating: product.rating,
      quantity: 1,
    };
    // check if item is present in the cart or not
    const existingItem = cartItem.find((item) => item.id === productItem.id);
    if (existingItem) {
      toast.error("product is already in the cart");
    } else {
      cartItem.push(productItem);
      localStorage.setItem("cartItems", JSON.stringify(cartItem));
      toast.success(`${productItem.title} is added to cart`);
    }
  };
  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <Header />
      <div className="container my-4">
        <div className="row d-flex justify-content-evenly align-items-center shadow">
          <div className="col-md-4">
            <img src={product.image} alt={product.title} width={"400"} />
          </div>
          <div className="col-md-6">
            <h1 className="text-muted">{product.title}</h1>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
            <p>category:{product.category}</p>
            <div className="my-2">
              <button className="btn btn-warning" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
