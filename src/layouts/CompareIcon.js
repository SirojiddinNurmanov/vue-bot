import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { connect, useSelector } from "react-redux";
import { getCarts, removeCart } from "../redux/action/utilis";
import { totalPrice } from "../utils/utils";
import { useCarts } from "../../apiContext";
import { useAccordionToggle } from "react-bootstrap";

const CompareIcon = ({ removeCart, getCarts }) => {
    useEffect(() => {
        getCarts();
    }, []);
    const { carts, getAllCarts } = useCarts();
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
                console.log(data);
                getAllCarts();
            });
    };
    return (
        <div className="wishlist-container compare">
            <div className="bg"></div>
            <li className="d-shop-cart">
                <a className="icon">
                    <img src="/img/icon/carts.png" alt="" />
                    <span className="cart-count-shop">
                        {carts && carts.length}
                    </span>
                </a>
                <ul className="minicart">
                    {carts && carts.length > 0 ? (
                        carts.map((cart) => (
                            <li key={cart.id}>
                                <div className="cart-img">
                                    <Link href={`/shop/${cart.id}`}>
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
                                        <Link href={`/shop/${cart.product_id}`}>
                                            {cart.product_name}
                                        </Link>
                                    </h3>
                                    <div className="cart-price">
                                        <span className="new">
                                            {cart.product_price}
                                            {/* * {cart.qty} */}
                                        </span>
                                    </div>
                                </div>
                                <div className="del-icon">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            deleteCart(cart.cart_id);
                                            toast.error(
                                                "Remove item from carts"
                                            );
                                        }}
                                    >
                                        <i className="far fa-trash-alt" />
                                    </a>
                                </div>
                            </li>
                        ))
                    ) : (
                        <h3>Product Not Founded</h3>
                    )}
                    <li>
                        <div className="total-price">
                            <span className="f-left">Total:</span>
                            {carts && (
                                <span className="f-right">
                                    {totalPrice(carts)}
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
        </div>
    );
};

export default connect(null, { removeCart, getCarts })(CompareIcon);
