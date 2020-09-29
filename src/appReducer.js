const initialState = { isLoggedIn: false }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_LOGIN':
            return { ...state, isLoggedIn: action.isLoggedIn }
        default:
            return state
    }
}

// Stores, Reducer, Connect & Dispatch Action