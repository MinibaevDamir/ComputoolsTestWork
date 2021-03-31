const CHOOSE_FOOD = 'CHOOSE-FOOD';
const TRY_AGAIN = "TRY-AGAIN";
let initialState = {
    count: [],
    replies: [],
    buttonStatus: []
};
const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_FOOD:
            return {...state,
               replies: [...state.replies, action.replies], count: [...state.count, action.count], buttonStatus: [...state.buttonStatus, action.buttonStatus]};
        case TRY_AGAIN:
            return {count: [], buttonStatus: [], replies: []}
        default:

            return state;
    }

}
export const chooseFood = (replies, count, buttonStatus) => ({type: CHOOSE_FOOD, replies, count, buttonStatus})
export const tryAgain = () => ({type: TRY_AGAIN})
export default quizReducer;