export default function (state = false, action) {
    switch(action.type) {
        case 'TOGGLE_COMPARE_MODE':
            return action.data
        
        default:
            return state
    }
}