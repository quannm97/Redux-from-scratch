
import * as actions from "./actionTypes";

export function bugAdded(description) {
    return {
        type: action.BUG_ADDED,
        payload: {
            description:"Bug1"
        }
    }
}