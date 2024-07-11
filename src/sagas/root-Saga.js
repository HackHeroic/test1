i 
import { GET_USERS_FETCH,GET_USERS_SUCCESS } from '../actions/general-actions';

async function userFetch(){
    const rawData = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await rawData.json();
    return data;
}



function * workGetUsersFetch(){
    const users = yield call(userFetch);
    yield put({type:GET_USERS_SUCCESS,users})
}


function* rootSaga(){
    yield takeEvery(GET_USERS_FETCH,workGetUsersFetch);
}

export default rootSaga;
