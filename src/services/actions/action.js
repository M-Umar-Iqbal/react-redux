import { ADD_TO_CART, REMOVE_TO_CART } from "../constants"

export const addToCart = (data) => {
    console.warn("action", data)
    return {
        payload: data, //or you can use only data
        type: ADD_TO_CART
    }
}
export const removeToCart = (Data) => {

    return {
        data: Data, //or you can use only data
        type: REMOVE_TO_CART
    }
}
