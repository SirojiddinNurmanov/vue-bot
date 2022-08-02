import { Modal, Nav, Tab } from "react-bootstrap";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import {
    addToCart,
    addWishlist,
    decreaseCart,
} from "../../redux/action/utilis";
import Image from "next/dist/client/image";
const ProductModal = ({
    show,
    handleClose,
    product,
    carts,
    wishlists,
    addToCart,
    addWishlist,
    decreaseCart,
}) => {
    const size = ["L", "M", "X", "XL", "XXL"];

    const cart =
        product &&
        carts &&
        carts.find((cart) => cart.id === product.product_id);
    const wishlist =
        product &&
        wishlists &&
        wishlists.find((wishlist) => wishlist.id === product.product_id);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <Tab.Container defaultActiveKey="tum-0">
                            <div className="product-details-img mb-10">
                                <Tab.Content id="myTabContentpro">
                                    {product &&
                                        product.product_images.map((img, i) => (
                                            <Tab.Pane
                                                key={i}
                                                eventKey={`tum-${i}`}
                                            >
                                                <div className="product-large-img">
                                                    <img src={img} alt="tum" />
                                                </div>
                                            </Tab.Pane>
                                        ))}
                                </Tab.Content>
                            </div>

                            <div className="shop-thumb-tab ">
                                <Nav as="ul">
                                    {product &&
                                        product.product_images.map((img, i) => (
                                            <Nav.Item as="li" key={i}>
                                                <Nav.Link
                                                    as="a"
                                                    href="#"
                                                    onClick={(e) =>
                                                        e.preventDefault()
                                                    }
                                                    eventKey={`tum-${i}`}
                                                >
                                                    <img src={img} alt="Tum" />{" "}
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                </Nav>
                            </div>
                        </Tab.Container>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="product-details ">
                            <div className="details-cat mb-10 d-flex align-items-center justify-content-between">
                                <div>
                                    {" "}
                                    <a href="#">decor,</a>
                                    <a href="#">
                                        {product && product.brand_name}
                                    </a>
                                </div>

                                <i
                                    className="fa fa-times modal-icon "
                                    onClick={() => handleClose()}
                                />
                            </div>
                            <h2 className="pro-details-title mb-15 fs-30">
                                {product && product.product_name}
                            </h2>
                            <div className="details-price mb-10 fs-25">
                                <span>
                                    $
                                    {Number(
                                        product && product.product_price
                                    ).toFixed(2)}
                                </span>
                                {product && product.product_price && (
                                    <span className="old-price">
                                        $
                                        {Number(product.product_price).toFixed(
                                            2
                                        )}
                                    </span>
                                )}
                            </div>
                            <div className="product-variant ">
                                {product &&
                                    product.product_colors &&
                                    product.product_colors.length > 0 && (
                                        <div className="product-color variant-item modal-p-15">
                                            <div className="variant-name">
                                                <span>Colors</span>
                                            </div>
                                            <ul className="shop-link shop-color">
                                                {product.product_colors.map(
                                                    (color) => (
                                                        <li key={color}>
                                                            <a
                                                                href="#"
                                                                onClick={(e) =>
                                                                    e.preventDefault()
                                                                }
                                                            >
                                                                <span
                                                                    className={
                                                                        color
                                                                    }
                                                                />
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                {/* {product && product.size && (
                                    <div className="product-size variant-item modal-p-15">
                                        <div className="variant-name">
                                            <span>size</span>
                                        </div>
                                        <ul className="shop-link shop-size">
                                            {size &&
                                                size.map((size) => (
                                                    <li
                                                        key={size}
                                                        className={
                                                            size.toLowerCase() ===
                                                            product.size.toLowerCase()
                                                                ? "active"
                                                                : ""
                                                        }
                                                    >
                                                        <a
                                                            href="#"
                                                            onClick={(e) =>
                                                                e.preventDefault()
                                                            }
                                                        >
                                                            {size}
                                                        </a>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                )} */}
                                <div className="product-desc variant-item modal-p-15">
                                    <p>{product.product_description}</p>
                                </div>
                                <div className="product-info-list variant-item modal-p-15">
                                    <ul>
                                        <li className="text-capitalize">
                                            <span>Brands:</span>{" "}
                                            {product && product.brand_name}
                                        </li>
                                        <li>
                                            <span>Product Code:</span>{" "}
                                            {product && product.product_id}
                                        </li>
                                        <li>
                                            <span>Reward Points:</span> 100
                                        </li>
                                        <li>
                                            <span>Stock:</span>{" "}
                                            <span className="in-stock">
                                                {product &&
                                                product.product_stock
                                                    ? "In Stock"
                                                    : "Out Of Stock"}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-action-details variant-item modal-p-15">
                                    <div className="product-details-action d-flex">
                                        <div className="product-quantity">
                                            <div className="cart-plus-minus">
                                                <p>
                                                    cart.qty
                                                    {/* {cart ? cart.qty : 1} */}
                                                </p>
                                                <div
                                                    className="dec qtybutton"
                                                    onClick={() => {
                                                        cart &&
                                                            // cart.qty !== 1 &&
                                                            decreaseCart(cart);
                                                    }}
                                                >
                                                    -
                                                </div>
                                                <div
                                                    className="inc qtybutton"
                                                    onClick={() => {
                                                        addToCart(product);
                                                        toast.success(
                                                            "Successfully add to cart."
                                                        );
                                                    }}
                                                >
                                                    +
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className={`${
                                                wishlist ? "active" : ""
                                            } details-action-icon`}
                                            type="submit"
                                            onClick={() => {
                                                addWishlist(product);
                                                toast.success(
                                                    "Successfully add item in wishlist."
                                                );
                                            }}
                                        >
                                            <i className="fas fa-heart" />
                                        </button>
                                        <button
                                            className="details-action-icon"
                                            type="submit"
                                        >
                                            <i className="fas fa-hourglass" />
                                        </button>
                                    </div>
                                    {!cart && (
                                        <div
                                            className="details-cart mt-20"
                                            onClick={() => {
                                                addToCart(product);
                                                toast.success(
                                                    "Successfully add to cart."
                                                );
                                            }}
                                        >
                                            <button className="btn theme-btn">
                                                purchase now
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    carts: state.utilis.carts,
    wishlists: state.utilis.wishlist,
});

export default connect(mapStateToProps, {
    addToCart,
    addWishlist,
    decreaseCart,
})(ProductModal);
