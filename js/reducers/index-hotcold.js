var actions = require('../actions/index-hotcold');

var initialNumberState = [];

var numberReducer = function(state, action) {
    state = state || initialNumberState;
    if (action.type === actions.INPUT_NUMBER) {
        return state.concat({
            number: action.INPUT_NUMBER
        });
    }
    else if (action.type === actions.GUESS_NUMBER) {
        // Find the index of the matching repository
        return state.concat({
            number: action.INPUT_NUMBER
        });
    }

    else if (action.type === actions.NEW_RANDOM_NUMBER) {
            return state.concat({
            number: action.NEW_RANDOM_NUMBER
        });
    }

    return state;
};

exports.repositoryReducer = numberReducer;