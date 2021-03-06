import { FETCH_POSTS, NEW_POST} from '../actions/type';

const initialState = {
    // posts comming from action
    items: [],
    // single post
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default: 
            return state;
    }
}