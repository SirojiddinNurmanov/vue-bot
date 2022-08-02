import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { simpleProductFilter } from "../../utils/filterProduct";
import MultipleRowsSlider from "../slider/MultipleRowsSlider";
import SingleProductSlider from "../slider/SingleProductSlider";
import Product from "./Product";

const HomePageSingleProduct = ({ products, bot }) => {
    return (
        <section className="product-area box-90 pt-45 pb-30 slick-slider">
            <div className="container-fluid">
                <TabContainer defaultActiveKey="all2">
                    <div className="row">
                        <div className="col-xl-5 col-lg-12">
                            <div className="area-title mb-20">
                                <h1>Qaynoq mahsulotlar</h1>
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
                                            className="nav-link"
                                            onClick={(e) => e.preventDefault()}
                                            id="home-tab"
                                            data-toggle="tab"
                                            eventKey="all2"
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
                                            className="nav-link"
                                            onClick={(e) => e.preventDefault()}
                                            id="profile-tab"
                                            data-toggle="tab"
                                            eventKey="furniture2"
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
                                            className="nav-link"
                                            onClick={(e) => e.preventDefault()}
                                            id="contact-tab"
                                            data-toggle="tab"
                                            eventKey="gent2"
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
                                            eventKey="ladies2"
                                            role="tab"
                                            aria-controls="contact"
                                            aria-selected="false"
                                        >
                                            tikuv mashinalari
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
                                    <TabPane eventKey="all2">
                                        <div className="product-slider owl-carousel">
                                            <MultipleRowsSlider>
                                                {products &&
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
                                    <TabPane eventKey="furniture2">
                                        <div className="product-slider owl-carousel ">
                                            <MultipleRowsSlider>
                                                {products &&
                                                    simpleProductFilter(
                                                        "furniture",
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
                                    <TabPane eventKey="gent2">
                                        <MultipleRowsSlider>
                                            {products &&
                                                simpleProductFilter(
                                                    "gent",
                                                    products
                                                ).map((product) => (
                                                    <Product
                                                        key={product.product_id}
                                                        product={product}
                                                    />
                                                ))}
                                        </MultipleRowsSlider>
                                    </TabPane>
                                    <TabPane eventKey="ladies2">
                                        <MultipleRowsSlider>
                                            {products &&
                                                simpleProductFilter(
                                                    "ladies",
                                                    products
                                                ).map((product) => (
                                                    <Product
                                                        key={product.product_id}
                                                        product={product}
                                                    />
                                                ))}
                                        </MultipleRowsSlider>
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

export default HomePageSingleProduct;
