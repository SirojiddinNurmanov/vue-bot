import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import Blogs from "../src/components/blog/Blogs";
import HomePageProducts from "../src/components/product/HomePageProducts";
import HomePageSingleProduct from "../src/components/product/HomePageSingleProduct";
import UpcomingProduct from "../src/components/product/UpcomingProduct";
import HomeSlider from "../src/components/slider/HomeSlider";
import ImageSlider from "../src/components/slider/ImageSlider";
import Layout from "../src/layouts/Layout";
import { getBlog } from "../src/redux/action/blog";
import { getHome1 } from "../src/redux/action/home";
import { getProducts } from "../src/redux/action/product";
import { getTopSeller } from "../src/redux/action/seller";
import { getUpcomingProduct } from "../src/redux/action/upcomingProduct";
import { filterBlog } from "../src/utils/filterBlog";
import { getDiscount } from "../src/utils/utils";
import { useCarts } from "../apiContext";

const Index = ({
    getHome1,
    home1,
    upcomingProduct,
    getBlog,
    blogs,
    getTopSeller,
    topSeller,
    getUpcomingProduct,
    imageSlider,
    getProducts,
    products,
}) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getHome1();
        getBlog();
        getTopSeller();
        getUpcomingProduct();
        getProducts();
    }, []);
    console.log(products);
    return (
        <Layout sticky={true}>
            <main>
                <section className="slider-area pos-relative">
                    <div className="slider-active">
                        <HomeSlider sliders={home1 && home1.sliders}>
                            {home1 &&
                                home1.sliders.map((slide, i) => (
                                    <div
                                        key={i}
                                        className=" single-slider slide-1-style slider-1-1 slide-height d-flex align-items-center"
                                    >
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="slide-content">
                                                        <span
                                                            className="wow fadeInRight"
                                                            data-delay=".2s"
                                                        >
                                                            <img
                                                                src={slide.src}
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </HomeSlider>
                    </div>
                </section>
                <section className="banner-area pt-30 pl-15 pr-15">
                    <div className="container-fluid">
                        <div className="row">
                            <h1>Turkumlar</h1>
                            <div className="row">
                                {home1 &&
                                    home1.announcement.map(
                                        (announcement, i) => (
                                            <div className="col-4" key={i}>
                                                <div className="banner mb-30">
                                                    <Link href="/shop">
                                                        <a>
                                                            <img
                                                                src={
                                                                    announcement
                                                                }
                                                                alt="announcement"
                                                            />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    )}
                            </div>
                        </div>
                    </div>
                </section>
                <HomePageProducts products={products} />
                <HomePageSingleProduct products={products} />
            </main>
            <Link href="/register">
                <a className="btn theme-btn w-100">Register Now</a>
            </Link>
            <Link href="/Login">
                <a className="btn theme-btn w-100">Login</a>
            </Link>
        </Layout>
    );
};

const mapSateToProps = (state) => ({
    home1: state.home.home1,
    // announcement: state.home.home1.announcement,
    upcomingProduct: state.upcomingProduct.home1,
    blogs: filterBlog("lifestyle", state.blog.blogs),
    topSeller: state.seller.topSeller,
    imageSlider: state.home.home4 && state.home.home4.imageSlider,
    products: state.product.products,
});

export default connect(mapSateToProps, {
    getHome1,
    getBlog,
    getTopSeller,
    getUpcomingProduct,
    getProducts,
})(Index);
