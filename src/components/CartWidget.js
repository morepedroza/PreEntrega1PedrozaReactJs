// src/components/CartWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
  return (
    <button className="btn btn-outline-success">
      <FaShoppingCart /> 
      <span className="badge badge-pill badge-danger">5</span>
    </button>
  );
}

export default CartWidget;
