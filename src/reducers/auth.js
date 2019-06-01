import {
    LOGIN,
    REGISTER,
    LOGIN_PAGE_UNLOADED,
    UPDATE_FIELD_AUTH,
    REGISTER_PAGE_UNLOADED    
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
        case REGISTER:
            return {
                ...state,
                inProgress: false,
                errors: action.error ? action.payload.errors : null,
            };
        case LOGIN_PAGE_UNLOADED:
        case REGISTER_PAGE_UNLOADED:
            return {};
        case UPDATE_FIELD_AUTH:
            return { ...state, [action.key]: action.value };
        default:
            return state;
    }
}