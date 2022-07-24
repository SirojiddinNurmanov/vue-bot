import Head from "next/head";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import AllToaster from "../src/components/AllToaser";
import PreLoader from "../src/layouts/PreLoader";
import ScrollTop from "../src/layouts/ScrollTop";
import store from "../src/redux/store";
import "../style/main.css";
function MyApp({ Component, pageProps }) {
    const [preloader, setPreloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            store && setPreloader(false);
        }, 2000);

        setTimeout(() => {
            if (typeof window !== "undefined") {
                window.WOW = require("wowjs");
            }
            new WOW.WOW().init();
        }, 2000);
    }, []);
    return (
        <Provider store={store}>
            <Head>
                <title>Vue - Clean Minimal eCommerce Redux Template</title>
                <meta name="description" content />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* <link rel="manifest" href="site.webmanifest" /> */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                    crossOrigin="anonymous"
                    referrerpolicy="no-referrer"
                />

                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/img/favicon.png"
                />
            </Head>
            {preloader ? <PreLoader /> : <ScrollTop />}
            <AllToaster />
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
