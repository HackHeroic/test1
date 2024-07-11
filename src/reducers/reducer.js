import { GET_USERS_SUCCESS } from "../actions/general-actions";


export const myReducer = (state = {users :[]},action) => {
    switch(action.type){
        case GET_USERS_SUCCESS:
            return {...state,users:action.users}

        default:
            return state;
    }
}