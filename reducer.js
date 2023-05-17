import * as actions from './actionTypes'

let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case action.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
            break;
        case action.BUG_REMOVE:
            return state.filter(bug =>bug.id !==action.description)
        default:
            break;
    }
}