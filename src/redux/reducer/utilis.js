import { updateCart } from "../../utils/filterProduct";
import { setLocalStorage } from "../../utils/localstorage";
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
} from "../action/type";

const initialState = {
    carts: [],
    compares: [],
    wishlist: [],
};
const utilis = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CARTS:
            // const getCart = async () => {
            //     console.log(payload.token);
            //     const requestOptions = {
            //         method: "GET",
            //         headers: {
            //             token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX3JvbGUiOiJhZG1pbiIsImlhdCI6MTY1ODg1NDI3MCwiZXhwIjoxNjU4OTQwNjcwfQ.n0gGhhZUEB2KuN30jgw3P-rKg5AnGRmNBye5W61RhTA`,
            //         },
            //     };
            //     await fetch("http://api.saadia.uz/api/carts", requestOptions)
            //         .then((response) => response.json())
            //         .then((data) => {
            //             console.log("dispatch cart work", data);
            //             return data?.data;
            //         });
            // };
            return {
                ...state,
                carts: payload,
            };
        case ADD_TO_CART:
            return updateCart(state, payload, "+");
        case DECREASE_CART:
            return updateCart(state, payload, "-");
        case REMOVE_CART:
            const removeItem = state.carts.filter(
                (cart) => cart.id !== payload
            );
            setLocalStorage("vue-ecommerce", removeItem);
            return {
                ...state,
                carts: removeItem,
            };
        case ADD_WISHLIST:
            const wishlist = state.wishlist.find(
                (wishlist) => wishlist.id === payload.id
            )
                ? state.wishlist.filter(
                      (wishlist) => wishlist.id !== payload.id
                  )
                : [...state.wishlist, payload];
            setLocalStorage("vue-wishlist", wishlist);
            return {
                ...state,
                wishlist: wishlist,
            };
        case GET_WISHLIST:
            return {
                ...state,
                wishlist: payload,
            };
        case GET_COMPARE:
            return {
                ...state,
                compares: payload,
            };

        case COMPARE:
            const compare = state.compares.find(
                (compares) => compares.id === payload.id
            )
                ? state.compares.filter(
                      (compares) => compares.id !== payload.id
                  )
                : [...state.compares, payload];
            setLocalStorage("vue-compares", compare);
            return {
                ...state,
                compares: compare,
            };
        case REMOVE_COMPARE:
            const compareremove = state.compares.filter(
                (compare) => compare.id !== payload.id
            );
            setLocalStorage("vue-compares", compareremove);
            return {
                ...state,
                compares: compareremove,
            };

        case CHECKOUT_USER:
            return {
                ...state,
                chcekoutData: payload,
            };

        default:
            return state;
    }
};
export default utilis;
