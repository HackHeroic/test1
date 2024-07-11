export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"
export const CLEAR_USERS = "CLEAR_USERS"


//my action creator 
export const getUsersFetch = () => {
    return {
        type:GET_USERS_FETCH
    }
}

export const clearUsers = () => {
    return {
        type: CLEAR_USERS
    }
}