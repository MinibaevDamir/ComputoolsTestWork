import React from "react";
import {connect} from "react-redux";
import Quiz from "../Components/Quiz";
import {chooseFood, tryAgain} from "../Redux/quiz-reducer";

class QuizComponent extends React.Component {
    componentDidMount() {
    }


    render() {
        return <>
            <Quiz  quizCount = {this.props.quizCount}
                replies = {this.props.replies}
            buttonStatus = {this.props.buttonStatus}
           chooseFood = {this.props.chooseFood}
                    tryAgain = {this.props.tryAgain}/>
        </>}
}
let mapStateToProps = (state) => {
    return {
        quizCount: state.quizPage.count,
        replies: state.quizPage.replies,
        buttonStatus: state.quizPage.buttonStatus
    }
}


const QuizContainer = connect(mapStateToProps, {chooseFood, tryAgain})(QuizComponent);
export default QuizContainer;
