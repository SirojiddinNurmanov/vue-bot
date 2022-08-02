import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Nav, Tab, TabContainer } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { connect } from "react-redux";
import Layout from "../../layouts/Layout";
import { getProducts, getSingleProduct } from "../../redux/action/product";
import {
    addToCart,
    addWishlist,
    decreaseCart,
    getCarts,
    getWishlist,
} from "../../redux/action/utilis";
import { simpleProductFilter } from "../../utils/filterProduct";
import RelatedProduct from "../slider/RelatedProduct";
import Product from "./Product";
import { useCarts } from "../../../apiContext";
import ImageDetailSlider from "../slider/ImageDetailSlider";
import RegisterModal from "../Modal";

const Details = ({
    getSingleProduct,
    getCarts,
    getWishlist,
    product,
    products,
    getProducts,
    upcoming,
    upthumb,
}) => {
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        getSingleProduct(id);
        getCarts();
        getWishlist();
        getProducts();
    }, [id]);
    const { isCartIncludes, carts, getAllCarts } = useCarts();
    const [cartqty, setCartqty] = useState(1);
    const [modalShow, setModalShow] = useState(false);
    const [cart, setCart] = useState(carts);
    console.log("sfhdssn", product);
    const addCart = async (id, qty) => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo5LCJ1c2VyX3JvbGUiOiJ1c2VyIiwiaWF0IjoxNjU5NDI3ODg1LCJleHAiOjE2NTk1MTQyODV9.XV2tQwBFkaJ5cJAe_-sndTAo3Ab_ez-VdqnZIpmUy6o`,
            },
            body: JSON.stringify({
                cart_user_id: 1,
                cart_product_id: id,
                cart_quantity: qty,
            }),
        };
        fetch("http://api.saadia.uz/api/carts", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                getAllCarts();
                setCart([...cart, data.data]);
                toast.success("Add item succesfully in cart.");
            });
    };

    console.log(product);
    const Colors = product && product.product_colors;
    console.log(Colors);
    product && Colors.map((color) => console.log(color));
    product && (product.product_qty = cartqty);
    return (
        <Layout sticky container footerBg textCenter>
            <RegisterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <main>
                <section className="shop-details-area pt-10 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-4">
                                <Tab.Container defaultActiveKey="tum-0">
                                    <div className="product-details-img">
                                        <Tab.Content id="myTabContentpro">
                                            {product &&
                                                product.product_images.map(
                                                    (img, i) => (
                                                        <Tab.Pane
                                                            key={i}
                                                            eventKey={`tum-${i}`}
                                                        >
                                                            <div className="product-large-img">
                                                                <img
                                                                    src={img}
                                                                    alt="tum"
                                                                />
                                                            </div>
                                                        </Tab.Pane>
                                                    )
                                                )}
                                        </Tab.Content>
                                    </div>
                                    {!upthumb && (
                                        <div className="shop-thumb-tab">
                                            <ImageDetailSlider>
                                                {product &&
                                                    product.product_images.map(
                                                        (img, i) => (
                                                            <Nav.Item
                                                                as="li"
                                                                key={i}
                                                            >
                                                                <Nav.Link
                                                                    as="a"
                                                                    href="#"
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        e.preventDefault()
                                                                    }
                                                                    eventKey={`tum-${i}`}
                                                                >
                                                                    <img
                                                                        src={
                                                                            img
                                                                        }
                                                                        alt="Tum"
                                                                    />{" "}
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                        )
                                                    )}
                                            </ImageDetailSlider>
                                        </div>
                                    )}
                                </Tab.Container>
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="product-details mb-10 pl-10">
                                    <div className="details-cat mb-10">
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            {product && product.brand_name}
                                        </a>
                                    </div>
                                    <h2 className="pro-details-title">
                                        {product && product.product_name}
                                    </h2>
                                    <div className="details-price">
                                        <span>
                                            {Number(
                                                product && product.product_price
                                            )}{" "}
                                            {"so'm"}
                                        </span>
                                    </div>
                                    <div className="product-variant">
                                        {product &&
                                            product.product_colors &&
                                            product.product_colors.length >
                                                0 && (
                                                <div className="product-color variant-item">
                                                    <div className="variant-name">
                                                        <span>Colors</span>
                                                    </div>
                                                    <div className="shop-link shop-color">
                                                        {product &&
                                                            Colors.map(
                                                                (color, i) => (
                                                                    <div
                                                                        className="product-color"
                                                                        key={i}
                                                                        style={{
                                                                            backgroundColor:
                                                                                color,
                                                                        }}
                                                                    ></div>
                                                                )
                                                            )}
                                                    </div>
                                                </div>
                                            )}
                                        <div className="product-desc variant-item">
                                            <p>
                                                {product &&
                                                    product.product_description}
                                            </p>
                                        </div>
                                        <div className="product-action-details variant-item">
                                            <div className="product-details-action d-flex">
                                                <div className="product-quantity ">
                                                    <div className="cart-plus-minus">
                                                        <p>
                                                            {product
                                                                ? cartqty
                                                                : 1}
                                                        </p>
                                                        <button
                                                            disabled={
                                                                product
                                                                    ? false
                                                                    : true
                                                            }
                                                            className="dec qtybutton"
                                                            onClick={(e) =>
                                                                product &&
                                                                product.product_qty !==
                                                                    1 &&
                                                                setCartqty(
                                                                    cartqty - 1
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <button
                                                            disabled={
                                                                product
                                                                    ? false
                                                                    : true
                                                            }
                                                            className="inc qtybutton"
                                                            onClick={(e) =>
                                                                setCartqty(
                                                                    cartqty + 1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-10">
                            <div className="col-xl-8 col-lg-8">
                                <div className="product-review">
                                    <h1>Izohlar(2)</h1>
                                    <div className="desc-text review-text">
                                        <div className="product-commnets">
                                            <div className="product-commnets-list mb-25 pb-15">
                                                <div className="pro-comments-img">
                                                    <img
                                                        src="/img/product/comments/01.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="pro-commnets-text">
                                                    <h4>
                                                        Roger West -
                                                        <span>
                                                            June 5, 2018
                                                        </span>
                                                    </h4>
                                                    <div className="pro-rating">
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                    </div>
                                                    <p>
                                                        {product &&
                                                            product.product_description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="product-commnets-list mb-25 pb-15">
                                                <div className="pro-comments-img">
                                                    <img
                                                        src="/img/product/comments/02.png"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="pro-commnets-text">
                                                    <h4>
                                                        Roger West -
                                                        <span>
                                                            June 5, 2018
                                                        </span>
                                                    </h4>
                                                    <div className="pro-rating">
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nostrud
                                                        exercitation.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-box mt-50">
                                            <h4>Add a Review</h4>
                                            <div className="your-rating mb-40">
                                                <span>Your Rating:</span>
                                                <div className="rating-list">
                                                    <a
                                                        href="#"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <i className="far fa-star" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <i className="far fa-star" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <i className="far fa-star" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <i className="far fa-star" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <i className="far fa-star" />
                                                    </a>
                                                </div>
                                            </div>
                                            <form
                                                className="review-form"
                                                onSubmit={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <label htmlFor="message">
                                                            YOUR REVIEW
                                                        </label>
                                                        <textarea
                                                            name="message"
                                                            id="message"
                                                            cols={30}
                                                            rows={10}
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label htmlFor="r-name">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="r-name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label htmlFor="r-email">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="r-email"
                                                        />
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <button className="btn theme-btn">
                                                            Add your Review
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <RelatedProduct>
                    {products &&
                        simpleProductFilter(
                            product && product.category_name,
                            products
                        ).map((product) => (
                            <Product
                                key={product.product_id}
                                product={product}
                            />
                        ))}
                </RelatedProduct>
            </main>
            <div className="s-shop bottom-navbar">
                <Link
                    href={{
                        pathname: "/checkout",
                        query: product && product, // the data
                    }}
                >
                    <div className="buy-now">
                        <span>Sotib olish</span>
                    </div>
                </Link>
                <button onClick={() => setModalShow(true)}>S</button>
                <div className="s-cart">
                    <button
                        className={`${
                            isCartIncludes(product && product.product_id)
                                ? "active"
                                : ""
                        } details-action-icon`}
                        type="submit"
                        onClick={
                            !isCartIncludes(product && product.product_id)
                                ? () => addCart(id, cartqty)
                                : () =>
                                      toast.success(
                                          "item already exist in cart"
                                      )
                        }
                    >
                        <img src="/img/icon/carts.png" alt="" />
                    </button>
                </div>
                <div className="s-wishlist">
                    <button
                        className={`${
                            true ? "active" : ""
                        } details-action-icon`}
                        type="submit"
                        onClick={(e) => onClickWishlist(e)}
                    >
                        <i className="fas fa-heart" />
                    </button>
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    products: state.product.products,
    product: state.product.singleProduct,
    // carts: state.utilis.carts,
    //wishlists: state.utilis.wishlist,
});

export default connect(mapStateToProps, {
    addToCart,
    decreaseCart,
    getCarts,
    getSingleProduct,
    addWishlist,
    getWishlist,
    getProducts,
})(Details);
