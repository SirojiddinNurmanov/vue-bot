import Link from "next/link";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { connect, useSelector } from "react-redux";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import {
    addToCart,
    decreaseCart,
    removeCart,
} from "../src/redux/action/utilis";
import { totalPrice } from "../src/utils/utils";
import { useCarts } from "../apiContext";
import { useEffect } from "react";

const Cart = () => {
    const { carts, getAllCarts } = useCarts();
    const [cart, setCart] = useState([]);
    const deleteCart = async (cart_id) => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo5LCJ1c2VyX3JvbGUiOiJ1c2VyIiwiaWF0IjoxNjU5NDI3ODg1LCJleHAiOjE2NTk1MTQyODV9.XV2tQwBFkaJ5cJAe_-sndTAo3Ab_ez-VdqnZIpmUy6o`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cart_id,
            }),
        };
        await fetch("http://api.saadia.uz/api/carts", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log("objec t x");
                getAllCarts();
                console.log("data", data);
                console.log("deleted cart", cart);
            });
    };
    const [qty, setQty] = useState(0);
    const [qty1, setQty1] = useState(0);

    const onClickPlus = (item) => {
        let num = +item.cart_quantity;
        item.cart_quantity = num + 1;
        console.log(item.cart_quantity);
    };

    return (
        <Layout sticky footerBg container textCenter>
            <main>
                {carts && carts.length > 0 ? (
                    <section className="cart-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <form action="#">
                                        <div className="table-content table-responsive">
                                            <div>
                                                {carts &&
                                                    carts.map((cart) => (
                                                        <div
                                                            className="row"
                                                            key={cart.id}
                                                        >
                                                            <div className="col-4 product-thumbnail">
                                                                <a href="#">
                                                                    <img
                                                                        src={
                                                                            cart
                                                                                .product_images[0]
                                                                        }
                                                                        alt="cart"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="product-name">
                                                                    <a href="#">
                                                                        {
                                                                            cart.product_name
                                                                        }
                                                                    </a>
                                                                </div>
                                                                <div className="product-price">
                                                                    <span className="amount">
                                                                        {Number(
                                                                            cart.product_price
                                                                        )}
                                                                    </span>
                                                                </div>
                                                                <div className="product-quantity">
                                                                    <div className="cart-plus-minus">
                                                                        {/* <input
                                                                        type="number"
                                                                        defaultValue={cart.qty}
                                                                        onSubmit={(e) => e.preventDefault()}
                                                                        /> */}
                                                                        <p>
                                                                            {
                                                                                cart.cart_quantity
                                                                            }
                                                                        </p>
                                                                        <div
                                                                            className="dec qtybutton"
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                cart.cart_quantity !==
                                                                                    1 &&
                                                                                    cart.cart_quantity--;
                                                                                setQty1(
                                                                                    cart.cart_quantity
                                                                                );
                                                                            }}
                                                                        >
                                                                            -
                                                                        </div>
                                                                        <div
                                                                            className="inc qtybutton"
                                                                            onClick={() => {
                                                                                cart.cart_quantity++;
                                                                                setQty(
                                                                                    cart.cart_quantity
                                                                                );
                                                                            }}
                                                                        >
                                                                            +
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-subtotal">
                                                                    <span className="amount">
                                                                        {Number(
                                                                            cart.product_price *
                                                                                cart.cart_quantity
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 product-remove">
                                                                <a
                                                                    href="#"
                                                                    onClick={() => {
                                                                        deleteCart(
                                                                            cart &&
                                                                                cart.cart_id
                                                                        );

                                                                        toast.error(
                                                                            "Remove Item from cart."
                                                                        );
                                                                        // e.preventDefault();
                                                                    }}
                                                                >
                                                                    <i className="fa fa-trash"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-5 ml-auto">
                                                <div className="cart-page-total">
                                                    <h2>Cart totals</h2>
                                                    <ul className="mb-20">
                                                        <li>
                                                            Subtotal{" "}
                                                            <span>
                                                                {totalPrice(
                                                                    carts
                                                                )}
                                                            </span>
                                                        </li>
                                                        <li>
                                                            Total{" "}
                                                            <span>
                                                                {totalPrice(
                                                                    carts
                                                                )}
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <Link
                                                        href={{
                                                            pathname:
                                                                "/checkout",
                                                        }}
                                                    >
                                                        <a className="btn theme-btn">
                                                            Proceed to checkout
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <h2 className="pt-100 pb-50 text-center w-100">
                        No Product Found
                    </h2>
                )}
            </main>
        </Layout>
    );
};

export default connect(null, { removeCart, addToCart, decreaseCart })(Cart);
