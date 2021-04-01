import React from "react";
import BlockOfQuiz from "./Blocks/BlockOfQuiz";
import BlockOfResults from "./Blocks/BlockOfResults";


function sum (counts) {
    let result = 0;
    for (let count of Object.values(counts)) {
        result += count;
    }
    return result;
}

const Quiz = props => {
    return <div className="App">
        <header className="headerQuiz">
            <h1>
                QuizFeed
            </h1>
        </header>
        <div>
            <h3 className= "question">Tell Us Your Favorite Foods And We’ll Guess What Type Of Personality You Have</h3>
            <div className="question">
                <BlockOfQuiz  buttonStatus={props.buttonStatus} chooseFood={props.chooseFood} id = {"1"} quizText = "Pick some food"/>
                <BlockOfQuiz  buttonStatus={props.buttonStatus} chooseFood={props.chooseFood} id = {"2"} quizText = "Pick a healthy choice"/>
                <BlockOfQuiz  buttonStatus={props.buttonStatus} chooseFood={props.chooseFood} id = {"3"} quizText = "Pick a movie snack"/>
                <BlockOfQuiz  buttonStatus={props.buttonStatus} chooseFood={props.chooseFood} id = {"4"} quizText = "Pick a fast-food spot"/>
                <BlockOfQuiz  buttonStatus={props.buttonStatus} chooseFood={props.chooseFood} id = {"5"} quizText = "Pick a fast-food spot"/>
            </div>
            <BlockOfResults tryAgain = {props.tryAgain} quizCount = {props.quizCount}/>
        </div>
    </div>

}


export default Quiz;