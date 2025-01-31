import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS, PRODUCT_LIST_FAIL} from "../constatnt/productConstants"
function productListReducer(state ={product :[]}, action){
    switch (action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true}
            case PRODUCT_LIST_SUCESS:
                return {loading:false, product: action.payload}
                case PRODUCT_LIST_FAIL:
                    return {loading:false, error: action.payload}
                    default:
                    return state
    }
}
function productDetailsReducer(state ={product :{}}, action){
    switch (action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true}
            case PRODUCT_DETAILS_SUCESS:
                return {loading:false, product: action.payload}
                case PRODUCT_DETAILS_FAIL:
                    return {loading:false, error: action.payload}
                    default:
                    return state
    }
}
export default (productListReducer, productDetailsReducer)