import { getItemSession } from '../../../utils/sessionStorage';
import {SET_NAVBAR_ITEM} from './actionTypes'

const init = {
    path: getItemSession("path") || "/",
};

export const pathReducer = (state = init, { type, payload }) => {
    switch (type) {
        case SET_NAVBAR_ITEM:
            return { ...state, path: payload };
        default:
            return state;
    }
};