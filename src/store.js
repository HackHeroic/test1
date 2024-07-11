import { legacy_createStore as createStore } from "redux";
import createSagaMiddleware from  'redux-saga';
import { combineReducers,applyMiddleware } from "redux";
import { configure } from "@testing-library/react";
import { rootReducer } from "./reducers/root-reducer";
import rootSaga from "./sagas/root-Saga";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;



