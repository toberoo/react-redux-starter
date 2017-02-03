import ACTIONS from './const.jsx'

const increment =  () => {
    return {
        type: ACTIONS.INCREMENT
    }
}

const decrement = () => {
    return {
        type: ACTIONS.DECREMENT
    }
}

const reset = () => {
    return {
        type: ACTIONS.RESET
    }
}

export default {
    increment,
    decrement,
    reset
}