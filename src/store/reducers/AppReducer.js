import actionTypes from '../actions/actionTypes';

const initState = {
    banner: [],
};
const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state;

        default:
            return state;
    }
};

export default AppReducer;
