import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import InputMask from "react-input-mask";
import { useState } from "react";
import router from "next/router";
import config from "../config/index.js";
import authValidation from "../valadtions/auth.validation";
import { request } from "../src/utils/fatchData";
import { useRouter } from "next/router";
import { useCarts } from "../apiContext";
import { totalPrice } from "../src/utils/utils";

const Checkout = () => {
    const router = useRouter();
    const product = router.query;
    const { carts } = useCarts();
    console.log("sss", Object.keys(product).length);
    console.log(product);
    // console.log("cheeckout", product);
    console.log("object", carts);
    async function sendOneProduct() {
        const address = document.getElementById("address")?.value;
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo5LCJ1c2VyX3JvbGUiOiJ1c2VyIiwiaWF0IjoxNjU5NDI3ODg1LCJleHAiOjE2NTk1MTQyODV9.XV2tQwBFkaJ5cJAe_-sndTAo3Ab_ez-VdqnZIpmUy6o`,
            },
            body: JSON.stringify({
                order_product_id: product && product.product_id,
                order_quantity: product && product.product_qty,
                order_address: address,
            }),
        };
        await fetch("http://api.saadia.uz/api/orders", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log("cart data", data);
                console.log("Order send succesfully");
            });
    }

    return (
        <Layout sticky container textCenter footerBg>
            <main>
                <div className="container s-register">
                    <form className="form" id="form">
                        <h2>Checkout</h2>
                        <div className="form-control">
                            <label htmlFor="username">Firstname</label>
                            <input
                                type="username"
                                id="fname"
                                placeholder="Enter username"
                            />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="username">Lastname</label>
                            <input
                                type="username"
                                id="lname"
                                placeholder="Enter username"
                            />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="username">Address</label>
                            <input
                                type="username"
                                id="address"
                                placeholder="Enter adress"
                                // onChange={(e) => {
                                //     e.preventDefault();
                                //     setAddress(e.target.value);
                                // }}
                            />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="pnumber">Phone Number</label>
                            <InputMask
                                mask="+99 8xx xxx xx xx"
                                maskChar="_"
                                formatChars={{ x: "[0-9]" }}
                            ></InputMask>
                        </div>
                        {Object.keys(product).length > 0 ? (
                            <OneCart />
                        ) : (
                            <Cart />
                        )}
                        <button type="button" onClick={sendOneProduct}>
                            Place Order
                        </button>
                    </form>
                </div>
            </main>
        </Layout>
    );
};

const OneCart = () => {
    const router = useRouter();
    const product = router.query;
    return (
        <div className="col-lg-6">
            <div className="your-order mb-30 ">
                <h3>Your order</h3>
                <div className="your-order-table table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th className="product-name">Product</th>
                                <th className="product-total">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="cart_item" key={product.product_id}>
                                <td className="product-name">
                                    {product.product_name}{" "}
                                    <strong className="product-quantity">
                                        {" "}
                                        × {product.product_qty}
                                    </strong>
                                </td>
                                <td className="product-total">
                                    <span className="amount">
                                        {Number(product.product_price)}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="cart-subtotal">
                                <th>Cart Subtotal</th>
                                <td>
                                    <span className="amount">
                                        {product.product_price}
                                    </span>
                                </td>
                            </tr>

                            <tr className="order-total">
                                <th>Order Total</th>
                                <td>{product.product_price}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

const Cart = () => {
    const { carts } = useCarts();
    console.log("object", carts);
    return (
        <div className="col-lg-6">
            <div className="your-order mb-30 ">
                <h3>Your order</h3>
                <div className="your-order-table table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th className="product-name">Product</th>
                                <th className="product-total">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts &&
                                carts.map((cart) => (
                                    <tr className="cart_item" key={cart.id}>
                                        <td className="product-name">
                                            {cart.product_name}{" "}
                                            <strong className="product-quantity">
                                                {" "}
                                                × {cart.cart_quantity}
                                            </strong>
                                        </td>
                                        <td className="product-total">
                                            <span className="amount">
                                                {Number(
                                                    cart.product_price *
                                                        cart.cart_quantity
                                                )}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                        <tfoot>
                            <tr className="cart-subtotal">
                                <th>Shipping</th>
                                <td>
                                    <span className="amount">{50000}</span>
                                </td>
                            </tr>

                            <tr className="order-total">
                                <th>Order Total</th>
                                <td>
                                    <strong>
                                        {carts && (
                                            <span className="amount">
                                                {totalPrice(carts)}
                                            </span>
                                        )}
                                    </strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Checkout;
