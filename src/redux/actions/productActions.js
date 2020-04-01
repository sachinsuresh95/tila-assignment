export function loadProducts() {
    return function (dispatch) {
        return fetch('https://api.myjson.com/bins/fwwg4').then(response => {
            response.json().then(data => {
                dispatch(loadProductsSuccess(data.products))
            })
        })
    }
}

export function loadProductsSuccess(products) {
    return {
        type: 'GET_PRODUCTS',
        data: products
    }
}
