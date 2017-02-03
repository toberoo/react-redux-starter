import ACTIONS from './../action/const.jsx'

const initialState = {
    title: 'React Counter Example!',
    count: 0
}

function counter(state = initialState, action) {
    switch(action.type) {
        case ACTIONS.INCREMENT: return Object.assign({}, state, {
            count: (state.count + 1)
        })
        case ACTIONS.DECREMENT: return Object.assign({}, state, {
            count: (state.count - 1)
        })
        case ACTIONS.RESET: return Object.assign({}, state, {
            count: 0
        })
        default: return state
    }
}

export default counter