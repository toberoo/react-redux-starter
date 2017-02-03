/** We can give every action a type. Since Javascript does not have enumerated types,
a map of strings can suffice. The reducer can look for the type and change the state accordingly*/
export default {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}
