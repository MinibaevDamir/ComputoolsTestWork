import {combineReducers, createStore} from "redux";
import quizReducer from "./quiz-reducer";



let reducers = combineReducers(
    {
        quizPage: quizReducer
    }
);

let store = createStore(reducers);
export default store;
