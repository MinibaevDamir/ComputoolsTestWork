import quizCollection from "../../Data/QuizData.json";
import React from "react";
import CardQuiz from "../Cards/QuizCard";

const BlockOfQuiz = (props) => {
    return <div>
        {(!props.buttonStatus.includes(props.id)) ? <div className="picked">{props.quizText}</div> : <div></div>}
        <div className="buttons-flex">
            {quizCollection.quiz.map((id, i) => (
                (quizCollection.quiz[i].id === props.id) ?
                    <CardQuiz ButtonStatus={props.buttonStatus} currentButtonStatus={quizCollection.quiz[i].id}
                              textQuiz={quizCollection.quiz[i].name} imageQuiz={quizCollection.quiz[i].image}
                              chooseFood={props.chooseFood} replies={quizCollection.quiz[i].name}
                              count={quizCollection.quiz[i].value}/> : <></>))}
        </div>
    </div>
}
export default BlockOfQuiz;