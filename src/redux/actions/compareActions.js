export function addToCompare(product) {
    return {
        type: 'ADD_TO_COMPARE',
        data: product
    }
}

export function removeProduct(product) {
    return {
        type: 'REMOVE_FROM_COMPARE',
        data: product
    }
}