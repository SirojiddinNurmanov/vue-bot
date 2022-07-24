import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { connect, useSelector } from "react-redux";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import {
    addToCart,
    addWishlist,
    getWishlist,
} from "../src/redux/action/utilis";
import Image from "next/dist/client/image";

const Wishlist = ({ getWishlist, addToCart, addWishlist }) => {
    const wishlist = useSelector((state) => state.utilis.wishlist);
    useEffect(() => {
        getWishlist();
    }, []);

    const [addCart, setaddCart] = useState(false);
    const [addWishlist_, setAddWishlist_] = useState(false);

    return (
        <Layout sticky textCenter container footerBg>
            <main>
                <PageTitle active="Wishlist" pageHeading="Wishlist" />
                {wishlist && wishlist.length > 0 ? (
                    <section className="cart-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <form action="#">
                                        <div className="table-content table-responsive">
                                            {/* <thead>
                                                    <tr>
                                                        <th className="product-thumbnail">
                                                            Images
                                                        </th>
                                                        <th className="cart-product-name">
                                                            Product
                                                        </th>
                                                        <th className="product-price">
                                                            Unit Price
                                                        </th>
                                                        <th className="product-quantity">
                                                            Quantity
                                                        </th>
                                                        <th className="product-subtotal">
                                                            Total
                                                        </th>
                                                        <th className="product-remove">
                                                            Remove
                                                        </th>
                                                    </tr>
                                                </thead> */}
                                            <div>
                                                {wishlist &&
                                                    wishlist.map((cart) => (
                                                        <div
                                                            className="row"
                                                            key={cart.id}
                                                        >
                                                            <div className="col-4 product-thumbnail">
                                                                <a href="#">
                                                                    <img
                                                                        src={
                                                                            cart.img1
                                                                        }
                                                                        alt="cart"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="product-name">
                                                                    <a href="#">
                                                                        {
                                                                            cart.name
                                                                        }
                                                                    </a>
                                                                </div>
                                                                <div className="product-price">
                                                                    <span className="amount">
                                                                        $
                                                                        {Number(
                                                                            cart.mainPrice
                                                                        ).toFixed(
                                                                            2
                                                                        )}
                                                                    </span>
                                                                </div>
                                                                <div className="product-subtotal">
                                                                    <span className="amount">
                                                                        $
                                                                        {Number(
                                                                            cart.mainPrice
                                                                        ).toFixed(
                                                                            2
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 product-remove">
                                                                <Link href="#">
                                                                    <a
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            addToCart(
                                                                                wishlist
                                                                            );
                                                                            e.preventDefault();
                                                                            setaddCart(
                                                                                true
                                                                            );
                                                                            toast.success(
                                                                                "Add item in Cart."
                                                                            );
                                                                        }}
                                                                    >
                                                                        <i className="fa-duotone fa-basket-shopping"></i>
                                                                    </a>
                                                                </Link>
                                                                <button
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        addWishlist(
                                                                            wishlist
                                                                        );
                                                                        e.preventDefault();
                                                                        toast.error(
                                                                            "Remove item in wishlist."
                                                                        );
                                                                        setAddWishlist_(
                                                                            true
                                                                        );
                                                                    }}
                                                                >
                                                                    <i className="fa fa-trash"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
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

export default connect(null, { getWishlist, addToCart, addWishlist })(Wishlist);
