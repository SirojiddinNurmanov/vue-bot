import { fatchData } from "../../utils/fatchData";
import { GET_PRODUCT, GET_SINGLE } from "./type";

export const getProducts = () => async (dispatch) => {
    dispatch({
        type: GET_PRODUCT,
        payload: await fatchData("http://api.saadia.uz/api/products"),
    });
};
export const getSingleProduct = (id) => async (dispatch) => {
    const data = await fatchData(`http://api.saadia.uz/api/products/${id}`);
    dispatch({
        type: GET_SINGLE,
        payload: data?.data,
    });
};
