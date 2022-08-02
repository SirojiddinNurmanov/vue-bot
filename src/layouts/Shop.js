import { useEffect, useState } from "react";
import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { connect } from "react-redux";
import Paggination from "../components/Paggination";
import Filter from "../components/product/filter/Filter";
import Product from "../components/product/Product";
import ProductListView from "../components/product/ProductListView";
import { getProducts } from "../redux/action/product";
import { getProductByFilter } from "../utils/filterProduct";
import { activeData, dblock } from "../utils/utils";
import Layout from "./Layout";

const Shop = ({
    products,
    getProducts,
    col,
    banner,
    defultActive,
    leftSideBar,
}) => {
    const [active, setActive] = useState(0);
    let sort = 6;
    useEffect(() => {
        getProducts();
    }, []);

    console.log(products && "shop filter", products);
    return (
        <Layout footerBg container textCenter sticky>
            <main>
                <section className="shop-area">
                    <div className="container">
                        <div className="row">
                            {!leftSideBar && (
                                <Filter setActive_={() => setActive(0)} />
                            )}
                            <div className="col-xl-8 col-lg-8">
                                <div className="row">
                                    {
                                        products &&
                                            products.length > 0 &&
                                            products.map((product, i) => (
                                                <div
                                                    className={`col-4 ${
                                                        (active, i, sort)
                                                    }`}
                                                    key={product.id}
                                                >
                                                    <Product
                                                        wrapperPadding0={true}
                                                        product={product}
                                                    />
                                                </div>
                                            ))
                                        // ) : (
                                        //     <h2 className="text-center d-block w-100 mt-5">
                                        //         No Product Found
                                        //     </h2>
                                        // )
                                    }
                                </div>
                                <Paggination
                                    active={active}
                                    setActive={setActive}
                                    sort={sort}
                                    length={products && products.length}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    products: getProductByFilter(state.product.products, state.filter),
});

export default connect(mapStateToProps, { getProducts })(Shop);
