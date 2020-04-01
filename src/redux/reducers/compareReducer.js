export default function (state = [], action) {
    switch(action.type) {
        case 'ADD_TO_COMPARE':
            return [...state, action.data]
        case 'REMOVE_FROM_COMPARE':
            return state.filter( prod => prod !== action.data)
        default:
            return state
    }
}