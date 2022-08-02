import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { connect, useSelector } from "react-redux";
import { getCarts, removeCart } from "../../redux/action/utilis";
import { totalPrice } from "../../utils/utils";
import { useCarts } from "../../../apiContext";

const ShopCart = ({ removeCart, getCarts }) => {
    const { carts } = useCarts();
    console.log("shopping carts came");
    return (
        <li className="d-shop-cart">
            <a href="#" onClick={(e) => e.preventDefault()}>
                <i className="flaticon-shopping-cart" />{" "}
                <span className="cart-count">{carts && carts.length}</span>
            </a>
            <ul className="minicart">
                {carts && carts.length > 0 ? (
                    carts.map((cart) => (
                        <li key={cart.cart_id}>
                            <div className="cart-img">
                                <Link href={`/shop/${cart.cart_id}`}>
                                    <a>
                                        <img
                                            src={cart.product_images[0]}
                                            alt="Cart"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="cart-content">
                                <h3>
                                    <Link href={`/shop/${cart.cart_id}`}>
                                        {cart.product_name}
                                    </Link>
                                </h3>
                                <div className="cart-price">
                                    <span className="new">
                                        ${cart.product_price}
                                        {/* * {cart.qty} */}
                                    </span>
                                    {" ="}
                                    <span className="new ml-1 ">
                                        ${cart.product_price}
                                    </span>
                                </div>
                            </div>
                            <div className="del-icon">
                                <a
                                    href="#"
                                    // onClick={(e) => {
                                    //     e.preventDefault();
                                    //     removeCart(cart.id);
                                    //     toast.error("Remove item from carts");
                                    // }}
                                >
                                    <i className="far fa-trash-alt" />
                                </a>
                            </div>
                        </li>
                    ))
                ) : (
                    <h3>Product Not Found</h3>
                )}
                <li>
                    <div className="total-price">
                        <span className="f-left">Total:</span>
                        {carts && (
                            <span className="f-right">
                                ${totalPrice(carts)}
                            </span>
                        )}
                    </div>
                </li>
                <li>
                    <div className="checkout-link">
                        <Link href="/cart">Shopping Cart</Link>
                        <Link href="/checkout">
                            <a className="red-color">Checkout</a>
                        </Link>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export default connect(null, { removeCart, getCarts })(ShopCart);
