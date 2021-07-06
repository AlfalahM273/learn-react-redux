import { CREATE_PRODUCT, DELETE_PRODUCT, VIEW_PRODUCT } from "../actions/actionTypes";

const initialState = {
    products: [
        {
            id : 1,
            name : "Test",
            description : "Test",
            basePrice : 10,
            stock : 11,
        }
    ],
    product: null
};

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case CREATE_PRODUCT: {
            const {id, name, description, basePrice, stock} = action.payload;
            const newProduct = {
                id : id,
                name : name,
                description : description,
                basePrice : basePrice,
                stock : stock,
            }
            return {
                ...state,
                ...{ products: [...state.products, newProduct], product : newProduct }
            };
        }
        case DELETE_PRODUCT: {
            console.log(action.payload)
            const productId = action.payload.id;
            return {
                ...state,
                ...{ products: [...state.products.filter(it => it.id != productId )] }
            };
        }
        case VIEW_PRODUCT: {
            const product = action.payload.product;
            return {
                ...state,
                ...{ product : product }
            };
        }
        default:
            return state;
    }
}
export default reducer