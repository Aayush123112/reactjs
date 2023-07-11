import React, { useState, useEffect, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa6";
import Header from "../components/Header";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartItems"));
    setItems(cartData);
  }, []);
  // handling increased quantity
  const increaseQty = (id) => {
    const updateItems = items.map((item) => {
      if (item.id === id && item.quantity<=10) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updateItems);
    localStorage.setItems("cartItems", JSON.stringify(updateItems));
  };
  // handling decreased quantity
  const decreaseQty = (id) => {
    const updateItems = items.map((item) => {
      if (item.id === id && item.quantity>1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updateItems);
    localStorage.setItems("cartItems", JSON.stringify(updateItems));
  };
  // remove item form the cart
  const removeCartHandler=id=>{
    const confirmed=window.confirm('Are you sure want to remove this product from the cart')
    if(confirmed){
      const filterCart=items.filter(item=>item.id!==id)
      localStorage.setItems('cartItem',JSON.stringify(filterCart))
      setItems(filterCart)
      toast.success('item is removed form the cart')
    }
  }
  return (
    <>
      <Header />
      <ToastContainer theme="colored" position="top-center" />
      <div className="container">
        <div className="row d-flex justify-content-between my-4">
          {items && items.length === 0 ? (
            <h2 className="text-center text-danger">your cart is empty</h2>
          ) : (
            <Fragment>
              <h2 className="text-center">your cart items</h2>
              <div className="col-md-8 shadow">
                {items.map((item, i) => (
                  <Fragment key={i}>
                    <hr />
                    <div className="row d-flex aling-items-center">
                      <div className="col-2">
                        <img src={item.image} alt={item.title} width="50" />
                      </div>
                      <div className="col-3">
                        <strong>{item.title}</strong>
                      </div>
                      <div className="col-2 text-warning">${item.price}</div>
                      <div className="col-3">
                        <div className="d-flex aling-items-center">
                          <button
                            className="btn btn-danger"
                            onClick={() => decreaseQty(item.id)}
                          >
                            -
                          </button>
                          &nbsp;&nbsp;
                          <strong>{item.quantity}</strong>
                          &nbsp;&nbsp;
                          <button
                            className="btn btn-primary"
                            onClick={() => increaseQty(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-1">
                        <button className="btn btn-danger"
                        onClick={()=>removeCartHandler(item.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div className="col-md-3">
                <div className="shadow p-2">
                  <h5>Cart summary</h5>
                  <hr />
                  <p>
                    <strong>
                      Units: {items.reduce((a, b) => a + Number(b.quantity), 0)}
                    </strong>
                    (Units)
                  </p>
                  <p>
                    <strong>Total:</strong>$
                    {items.reduce(
                      (ac, item) => ac + item.quantity * item.price,
                      0
                    )}
                  </p>
                  <hr />
                  <button className="btn btn-warning">Check out</button>
                </div>
              </div>
              <hr />
            </Fragment>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
