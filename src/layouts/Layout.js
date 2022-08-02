import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCompare, getWishlist } from "../redux/action/utilis";
import CompareIcon from "./CompareIcon";
import Footer from "./Footer";
import Header from "./Header";
import Header2 from "./Header2";
import WishListIcon from "./WishListIcon";
import ShopCart from "./header/ShopCart";
import { filterByName } from "../redux/action/filter";
import Link from "next/link";
const Layout = ({
    children,
    search,
    sticky,
    container,
    footerBg,
    transparent,
    extraTransparentClass,
    header2,
    textCenter,
    whiteMenu,
    getWishlist,
    getCompare,
    filterByName,
}) => {
    useEffect(() => {
        getWishlist();
        getCompare();
    }, []);
    const [isSearch, setIsSearch] = useState(false);
    // const navigate = useNavigate();
    return (
        <Fragment>
            <WishListIcon />
            <CompareIcon />

            {children}
            <div className={isSearch ? "fixed-search active" : "fixed-search"}>
                <div className="shop-widget fixed-search-input">
                    <form
                        action="#"
                        className="shop-search"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => filterByName(e.target.value)}
                            placeholder="Your keyword...."
                        />
                        <img
                            src="/img/icon/cancel.png"
                            alt="img"
                            onClick={() => setIsSearch(false)}
                        />
                    </form>
                </div>
            </div>
            <Link href="/shop">
                <div className="search-btn">
                    <img src="/img/icon/search.png" alt="search" />
                </div>
            </Link>
            <Link href="/">
                <div className="back-btn">
                    <img src="/img/icon/back.png" alt="search" />
                </div>
            </Link>
        </Fragment>
    );
};
const mapStateToProps = (state) => ({
    search: state.filter.search,
});

export default connect(null, { getWishlist, getCompare, filterByName })(Layout);
