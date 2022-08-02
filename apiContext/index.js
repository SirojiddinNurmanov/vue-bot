import React, { useContext, useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";

const APIContext = createContext();

export function APIContextProvider({ children }) {
    console.log("useCarts came");
    const [carts, setCarts] = useState([]);
    const [isInclude, setIsInclude] = useState(false);
    const getAllCarts = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo5LCJ1c2VyX3JvbGUiOiJ1c2VyIiwiaWF0IjoxNjU5NDI3ODg1LCJleHAiOjE2NTk1MTQyODV9.XV2tQwBFkaJ5cJAe_-sndTAo3Ab_ez-VdqnZIpmUy6o`,
            },
        };
        fetch("http://api.saadia.uz/api/carts", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log("del data", data);
                data.data != null ? setCarts(data.data) : setCarts([]);
            });
    };
    useEffect(() => {
        getAllCarts();
    }, []);
    const isCartIncludes = (id) => {
        console.log(id);
        if (carts.filter((el) => el.cart_product_id === id).length > 0) {
            setIsInclude(true);
            console.log("object", "x");
        } else {
            setIsInclude(false);
            console.log("object", "y");
        }
        return isInclude;
    };

    return (
        <APIContext.Provider
            value={{
                carts,
                isCartIncludes,
                getAllCarts,
            }}
        >
            {children}
        </APIContext.Provider>
    );
}

export function useCarts() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}

APIContextProvider.propTypes = {
    children: PropTypes.any,
};
