import React, { useState, useEffect } from "react";
import "./Panier.css";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contextes/CartContext";
import PanierDetailsProducts from "../../components/PanierDetailsProducts";

const Panier = () => {
  const [cartItems, setCartItems] = useState([]);
  const {
    totalProducts,
    setTotalProducts,
    productsList,
    setProductsList,
    quantityProducts,
    setQuantityProducts,
  } = useCartContext();

  //je rajoute des produit a ma liste de cart

  const navigate = useNavigate();

  function cliquer() {
    navigate("/catalogue");
  }
  function cliqu() {
    navigate("/checkout");
  }

  useEffect(() => {
    console.log(productsList);
  }, [productsList]);

  return (
    <div className="container" id="panier">
      {productsList.length > 0 ? (
        <div>
          {productsList.map((product) => (
            <PanierDetailsProducts productInfos={product} key={product[0]} />
          ))}
        </div>
      ) : (
        <>
          <h2 className="yas">YOUR CART IS EMPTY.</h2>
          <a className="btn btn-secondary btn-lg yes" onClick={cliquer}>
            Continue Shopping
          </a>
        </>
      )}

      <div id="shop">
        <a id="check" className="btn btn-primary btn-lg " onClick={cliqu}>
          Total : {totalProducts} €
        </a>
      </div>
    </div>
  );
};

export default Panier;
