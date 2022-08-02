import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { simpleProductFilter } from "../../utils/filterProduct";
import MultipleRowsSlider from "../slider/MultipleRowsSlider";
import Product from "./Product";

const HomePageProducts = ({ products, bot }) => {
    return (
        <section className="product-area box-90 pt-70 pb-10 slick-slider">
            <div className="container-fluid">
                <TabContainer defaultActiveKey="all">
                    <div className="row">
                        <div className="col-xl-5 col-lg-12">
                            <div className="area-title mb-20">
                                <h1>Yangi Mahsulotlar</h1>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-12">
                            <div className="product-tab mb-10">
                                <Nav
                                    as="ul"
                                    className="nav product-nav  justify-content-xl-end"
                                    id="myTab1"
                                    role="tablist"
                                >
                                    <Nav.Item as="li">
                                        <Nav.Link
                                            as="a"
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                            id="home-tab"
                                            data-toggle="tab"
                                            eventKey="all"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                        >
                                            Barchasi
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link
                                            as="a"
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                            id="profile-tab"
                                            data-toggle="tab"
                                            eventKey="furniture"
                                            role="tab"
                                            aria-controls="profile"
                                            aria-selected="false"
                                        >
                                            Smartfonlar
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link
                                            as="a"
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                            id="contact-tab"
                                            data-toggle="tab"
                                            eventKey="gent"
                                            role="tab"
                                            aria-controls="contact"
                                            aria-selected="false"
                                        >
                                            Aksesuarlar
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link
                                            as="a"
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                            id="contact-tab1"
                                            data-toggle="tab"
                                            eventKey="ladies"
                                            role="tab"
                                            aria-controls="contact"
                                            aria-selected="false"
                                        >
                                            Tikuv Mashinalari
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="product-tab-content">
                                <TabContent
                                    className="tab-content"
                                    id="myTabContent"
                                >
                                    <TabPane eventKey="all">
                                        <div className="product-slider owl-carousel">
                                            <MultipleRowsSlider>
                                                {products &&
                                                    products.length > 0 &&
                                                    products.map((product) => (
                                                        <Product
                                                            key={
                                                                product.product_id
                                                            }
                                                            product={product}
                                                        />
                                                    ))}
                                            </MultipleRowsSlider>
                                        </div>
                                    </TabPane>
                                    <TabPane eventKey="furniture">
                                        <div className="product-slider owl-carousel ">
                                            <MultipleRowsSlider>
                                                {products &&
                                                    products.length &&
                                                    simpleProductFilter(
                                                        "SmartPhones",
                                                        products
                                                    ).map((product) => (
                                                        <Product
                                                            key={
                                                                product.product_id
                                                            }
                                                            product={product}
                                                        />
                                                    ))}
                                            </MultipleRowsSlider>
                                        </div>
                                    </TabPane>
                                    <TabPane eventKey="gent">
                                        <div className="product-slider owl-carousel ">
                                            <MultipleRowsSlider bot={bot}>
                                                {products &&
                                                    products.length &&
                                                    simpleProductFilter(
                                                        "Accessories",
                                                        products
                                                    ).map((product) => (
                                                        <Product
                                                            key={
                                                                product.product_id
                                                            }
                                                            product={product}
                                                        />
                                                    ))}
                                            </MultipleRowsSlider>
                                        </div>
                                    </TabPane>
                                    <TabPane eventKey="ladies">
                                        <div className="product-slider owl-carousel ">
                                            <MultipleRowsSlider>
                                                {products &&
                                                    products.length &&
                                                    simpleProductFilter(
                                                        "Sewing Machine",
                                                        products
                                                    ).map((product) => (
                                                        <Product
                                                            key={
                                                                product.product_id
                                                            }
                                                            product={product}
                                                        />
                                                    ))}
                                            </MultipleRowsSlider>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>
                    </div>
                </TabContainer>
            </div>
        </section>
    );
};

export default HomePageProducts;
