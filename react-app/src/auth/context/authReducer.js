import { types } from '../types/types';

export const authReducer = (state = {}, action) => {

    switch (action.type) {

        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload.data,
                message: action.payload.message,
                token: action.payload.token
            };

        case types.logout:
            return {
                logged: false,
                message: action.payload
            };

        default:
            return state;

    }

}