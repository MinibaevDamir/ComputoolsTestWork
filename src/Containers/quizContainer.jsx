
import {connect} from "react-redux";
import Quiz from "../Components/Quiz";
import {chooseFood, tryAgain} from "../Redux/quiz-reducer";


let mapStateToProps = (state) => {
    return {
        quizCount: state.quizPage.count,
        replies: state.quizPage.replies,
        buttonStatus: state.quizPage.buttonStatus
    }
}


const QuizContainer = connect(mapStateToProps, {chooseFood, tryAgain})(Quiz);
export default QuizContainer;
