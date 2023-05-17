function createStore(reducer) {
    let state;

    function dispatch(action) {
        reducer(state, action)
    }

    function getState() {
        return state;
    }

    return {
       getState,
       dispatch
    }
}

export default createStore