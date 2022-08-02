import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { connect, useSelector } from "react-redux";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import { getCompare, removeCompare } from "../src/redux/action/utilis";
import { useCarts } from "../apiContext";
import Link from "next/link";
const Compare = () => {
    const [addCart, setaddCart] = useState(false);
    const { carts } = useCarts();
    console.log("shopping cart", carts);
    return (
        <Layout sticky textCenter footerBg container>
            <main>
                {carts && carts.length > 0 ? (
                    <section className="cart-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <ul className="minicart">
                                    {carts && carts.length > 0 ? (
                                        carts.map((cart) => (
                                            <li key={cart.cart_id}>
                                                <div className="cart-img">
                                                    <Link
                                                        href={`/shop/${cart.cart_id}`}
                                                    >
                                                        <a>
                                                            <img
                                                                src={
                                                                    cart
                                                                        .product_images[0]
                                                                }
                                                                alt="Cart"
                                                            />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="cart-content">
                                                    <h3>
                                                        <Link
                                                            href={`/shop/${cart.cart_id}`}
                                                        >
                                                            {cart.product_name}
                                                        </Link>
                                                    </h3>
                                                    <div className="cart-price">
                                                        <span className="new">
                                                            $
                                                            {cart.product_price}
                                                            {/* * {cart.qty} */}
                                                        </span>
                                                        {" ="}
                                                        <span className="new ml-1 ">
                                                            $
                                                            {cart.product_price}
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
                                        <h3>Product Not Foundeds</h3>
                                    )}
                                    <li>
                                        <div className="total-price">
                                            <span className="f-left">
                                                Total:
                                            </span>
                                            {carts && (
                                                <span className="f-right">
                                                    ${totalPrice(carts)}
                                                </span>
                                            )}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="checkout-link">
                                            <Link href="/cart">
                                                Shopping Cart
                                            </Link>
                                            <Link href="/checkout">
                                                <a className="red-color">
                                                    Checkout
                                                </a>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                ) : (
                    <h2 className="pt-100 pb-50 text-center w-100">
                        No Product Founded
                    </h2>
                )}
            </main>
        </Layout>
    );
};

export default connect(null, { getCompare, removeCompare })(Compare);
