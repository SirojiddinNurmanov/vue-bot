import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { connect, useSelector } from "react-redux";
import {
    addToCart,
    addWishlist,
    compare,
    getWishlist,
    removeCompare,
} from "../../redux/action/utilis";
import ProductModal from "./ProductModal";
import Image from "next/dist/client/image";
const Product = ({
    product,
    wrapperPadding0,
    addToCart,
    addWishlist,
    compare,
    removeCompare,
}) => {
    const wishlist = useSelector((state) => state.utilis.wishlist);
    const compares = useSelector((state) => state.utilis.compares);

    const [quickView, setQuickView] = useState(false);
    const [addCompare, setAddCompare] = useState(false);
    const [addCart, setaddCart] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [addWishlist_, setAddWishlist_] = useState(false);

    const onClickCompare = (e) => {
        e.preventDefault();
        setAddCompare(true);
        const exitsItem = compares.find(
            (compare) => compare.id === product.product_id
        );
        if (compares.length < 3) {
            if (exitsItem) {
                toast.error("Remove item from compare.");
                compare(product);
            } else {
                toast.success("Add item in Compare.");
                compare(product);
            }
        } else {
            if (exitsItem) {
                toast.error("Remove item from compare.");
                removeCompare(product);
            } else {
                toast.error(
                    "Compare is full please remove item from compare list."
                );
            }
        }
    };

    const onClickCart = (e) => {
        e.preventDefault();
        addToCart(product);
        setaddCart(true);
        toast.success("Add item in Cart.");
    };
    const onClickWishlist = (e) => {
        e.preventDefault();
        addWishlist(product);
        setAddWishlist_(true);
        const wishlist_ = wishlist.find(
            (wishlist) => wishlist.id === product.product_id
        );
        if (wishlist_) {
            toast.error("Remove item in wishlist.");
        } else {
            toast.success("Add item in wishlist.");
        }
    };

    const showCalc = () => {
        setIsActive(true);
    };
    const [countProduct, setCountProduct] = useState(1);
    const addProduct = () => {
        setCountProduct(+countProduct + 1);
    };
    const removeProduct = () => {
        countProduct > 1 ? setCountProduct(+countProduct - 1) : countProduct;
    };
    return (
        <div
            className={`product-wrapper mb-20 ${wrapperPadding0 ? "p-0" : ""}`}
        >
            <div className="product-img">
                <Link href={`/shop/${product.product_id}`}>
                    <a>
                        <img src={product.product_images[0]} alt="img 1" />
                        <img
                            className="secondary-img"
                            src={product.product_images[1]}
                            alt="imge 2"
                        />
                    </a>
                </Link>
                <div className="sale-tag">
                    {product.status_new && <span className="new">new</span>}
                    {product.status_sale && <span className="sale">sale</span>}
                </div>
                <span className={isActive ? "s-count" : "s-count collapse"}>
                    {countProduct}
                </span>
            </div>
            <div className="product-content">
                <div className="pro-cat">
                    <Link href={`/shop/${product.product_id}`}>
                        {product.brand_name}
                    </Link>
                </div>
                <h4>
                    <Link href={`/shop/${product.product_id}`}>
                        {product.product_name}
                    </Link>
                </h4>
                <div className="product-meta">
                    <div className="pro-price">
                        <span>{`${Number(product.product_price)}so'm `}</span>
                    </div>
                </div>
            </div>
            <div
                className={isActive ? "s-cart collapse" : "s-cart"}
                onClick={showCalc}
            >
                <div className="s-cart-btn">
                    {" "}
                    <img src="/img/icon/carts.png" alt="" />
                    <span>Savatga</span>
                </div>
            </div>
            <div className={isActive ? "s-calc" : "s-calc collapse"}>
                <div className="cart-plus">
                    <button onClick={removeProduct}>
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <button onClick={addProduct}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default connect(null, {
    addToCart,
    addWishlist,
    getWishlist,
    compare,
    removeCompare,
})(Product);
