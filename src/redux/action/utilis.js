import { getLocalStorage, setLocalStorage } from "../../utils/localstorage";
import {
    ADD_TO_CART,
    ADD_WISHLIST,
    CHECKOUT_USER,
    COMPARE,
    DECREASE_CART,
    GET_CARTS,
    GET_COMPARE,
    GET_WISHLIST,
    REMOVE_CART,
    REMOVE_COMPARE,
} from "./type";

export const getCarts = () => (dispatch) => {
    dispatch({
        type: GET_CARTS,
        payload: setLocalStorage("s-cart"),
    });
};

export const addToCart = (product) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: setLocalStorage(`s-cart`, product),
    });
};

export const removeCart = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_CART,
        payload: id,
    });
};

export const decreaseCart = (product) => (dispatch) => {
    dispatch({
        type: DECREASE_CART,
        payload: product,
    });
};

export const addWishlist = (product) => (dispatch) => {
    dispatch({
        type: ADD_WISHLIST,
        payload: product,
    });
};

export const getWishlist = () => (dispatch) => {
    dispatch({
        type: GET_WISHLIST,
        payload: getLocalStorage("vue-wishlist"),
    });
};
export const getCompare = () => (dispatch) => {
    dispatch({
        type: GET_COMPARE,
        payload: getLocalStorage("vue-compares"),
    });
};

export const compare = (product) => (dispatch) => {
    dispatch({
        type: COMPARE,
        payload: product,
    });
};
export const removeCompare = (product) => (dispatch) => {
    dispatch({
        type: REMOVE_COMPARE,
        payload: product,
    });
};

export const setCheckoutData = (data) => (dispatch) => {
    dispatch({
        type: CHECKOUT_USER,
        payload: data,
    });
};

const getCart = async () => {
    const requestOptions = {
        method: "GET",
        headers: {
            token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3JvbGUiOiJhZG1pbiIsImlhdCI6MTY1ODg1NDI3MCwiZXhwIjoxNjU4OTQwNjcwfQ.n0gGhhZUEB2KuN30jgw3P-rKg5AnGRmNBye5W61RhTA`,
        },
    };
    await fetch("http://api.saadia.uz/api/carts", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log("dispatch cart work", data);
            return data?.data;
        });
};
