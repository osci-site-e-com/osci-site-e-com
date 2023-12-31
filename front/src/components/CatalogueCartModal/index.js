import React, { useEffect } from 'react';
import './style.css';
import {useCartContext} from '../../contextes/CartContext';
import CatalogueCartDetailProduct from '../CatalogueCartDetailProduct';
import { NavLink,useLocation } from 'react-router-dom';


const CatalogueCartModal = () => {
    const {totalProducts, productsList} = useCartContext();
    const location = useLocation();

    // fermeture de la modal cart si je change de page
    useEffect(() => {
       let closeModalBtn = document.getElementById('btn-close-cart-modale')
       closeModalBtn.click();
    
    }, [location]);


    useEffect(()=>{
        console.log(productsList);
    },[productsList])

    return (
        <div className="offcanvascontainer container">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title m-auto" id="navbarSupportedContent">
                    <img className="offcanvas-logo" src="./images/logo-transparent-bg.png" alt="ARA, cosmetic brand for all skins."/>
                </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body px-4 py2 w-100">
                <div className="offcanvas-head mb-3">
                    <h5 className="">My Cart</h5>
                    <div className="separator"></div>
                </div>
                {/* nouvelle version du panier */}
                {/* ligne des titres */}
                <div className="container order-details">
                    <div className="row mb-2 row-cols-1 order-details-header">
                        <div className="col-3 d-flex justify-content-end">
                            
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <h4>Product</h4>
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                            <h4>Price</h4>
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                            <h4>Quantity</h4>
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                            <h4>Total</h4>
                        </div>
                    </div>
                    <div className="order-details-body">
                        {
                            productsList.length > 0 ? 
                                productsList.map((product, idx)=>{
                                    return <CatalogueCartDetailProduct productInfos={product} key={idx}/>
                                })
                                :
                                <div>
                                   Your cart is empty !  
                                </div>
                        }
                    </div>
                </div>
                {/* end ligne des titres */}
                {/*  ---- */}
                <div className="offproductorder__ordercart-total justify-content-end  row row-cols-2 align-items-center my-4 w-100">
                    <div className="offproductorder__ordercart-total-price-infos col-4 d-flex flex-column justify-content-end align-items-end">
                        <div className="d-flex flex-column justify-content-end align-items-end">
                            <h5 className="text-end">Total :</h5>
                            <div className="separator"></div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center col-1">
                        <p className="text-end ">{totalProducts}<span className="money_unit">$</span></p>
                    </div>
                </div>
                <div className="offproductorder__orderdetails row row-cols-1 justify-content-start my-4">
                    <NavLink to={'/panier'} className="link-order-details d-flex align-items-center">
                        See order details
                        <i className="bi bi-binoculars-fill"></i>
                    </NavLink>
                </div>
                <div className="row row-cols-1 row-cols-md-2 offproductorder__backetcart-actions justify-content-between flex-md-row-reverse align-items-center my-4">
                    <button type="button" className="btn text-light m-auto">
                        <NavLink to={'/checkout'} className="link-order-details d-flex align-items-center">
                            Valid my cart                        
                        </NavLink>
                    </button>
                    <button type="button" className="btn text-light m-auto" data-bs-dismiss="offcanvas" aria-label="Close" id="btn-close-cart-modale">Back to my shopping</button>
                </div>
            </div>
        </div>
    );
};

export default CatalogueCartModal;