import {
    LOGIN,
    LOGOUT,
    REGISTER
} from './constants/actionTypes';

const localStorageMiddleware = store => next => action => {
    if (action.type === REGISTER || action.type === LOGIN) {
        if(!action.error) {
            window.localStorage.setItem('jwt', action.payload.user.token);
        }
    } else if (action.type === LOGOUT) {
        window.localStorage.setItem('jwt', '');
    }

    next(action);
}

export default localStorageMiddleware;