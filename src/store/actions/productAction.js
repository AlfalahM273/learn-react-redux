import { CREATE_PRODUCT, DELETE_PRODUCT, VIEW_PRODUCT } from "./actionTypes";

let nextTodoId = 2;

export const createProduct = product => ({
    type: CREATE_PRODUCT,
    payload: {
        id : nextTodoId++,
        name : product.name,
        description : product.description,
        basePrice : product.basePrice,
        stock : product.stock
    }
});

export const deleteProduct = productId => ({
    type: DELETE_PRODUCT,
    payload: {
        id : productId
    }
});

export const viewProduct = product => {
    return ({
        type: VIEW_PRODUCT,
        payload: {
            product : product
        }
    })
};