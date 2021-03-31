import React from "react";
import CardQuiz from "./QuizCard/QuizCard";
import ResultCard from "./QuizCard/ResultCard";
import quizCollection from "../Data/QuizData.json";

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
                <div>
                    {(!props.buttonStatus.includes("1")) ? <div className="picked">Pick some food</div> : <div></div>}
                    <div className="buttons-flex">
                        {quizCollection.quiz.map((id, i) => (
                            (quizCollection.quiz[i].id === "1") ?
                            <CardQuiz ButtonStatus={props.buttonStatus} currentButtonStatus={quizCollection.quiz[i].id}
                                      textQuiz={quizCollection.quiz[i].name} imageQuiz={quizCollection.quiz[i].image}
                                      chooseFood={props.chooseFood} replies={quizCollection.quiz[i].name}
                                      count={quizCollection.quiz[i].value}/> : <></>))}
                    </div>
                </div>
                <div>
                    {(!props.buttonStatus.includes("2")) ? <div className="picked">Pick a healthy choice</div> : <div></div>}
                    <div className="buttons-flex">
                        {quizCollection.quiz.map((id, i) => ((quizCollection.quiz[i].id === "2") ?
                                <CardQuiz ButtonStatus={props.buttonStatus} currentButtonStatus={quizCollection.quiz[i].id}
                                          textQuiz={quizCollection.quiz[i].name} imageQuiz={quizCollection.quiz[i].image}
                                          chooseFood={props.chooseFood} replies={quizCollection.quiz[i].name}
                                          count={quizCollection.quiz[i].value}/> : <></>))}
                    </div>
                </div>
                <div>
                    {(!props.buttonStatus.includes("3")) ? <div className="picked">Pick a movie snack</div> : <div></div>}
                    <div className="buttons-flex">
                        {quizCollection.quiz.map((id, i) => (
                            (quizCollection.quiz[i].id === "3") ?
                                <CardQuiz ButtonStatus={props.buttonStatus} currentButtonStatus={quizCollection.quiz[i].id}
                                          textQuiz={quizCollection.quiz[i].name} imageQuiz={quizCollection.quiz[i].image}
                                          chooseFood={props.chooseFood} replies={quizCollection.quiz[i].name}
                                          count={quizCollection.quiz[i].value}/> : <></>))}
                    </div>
                </div>
                <div>
                    {(!props.buttonStatus.includes("4")) ? <div className="picked">Pick a fast-food spot</div> : <div></div>}
                    <div className="buttons-flex">
                        {quizCollection.quiz.map((id, i) => (
                            (quizCollection.quiz[i].id === "4") ?
                                <CardQuiz ButtonStatus={props.buttonStatus} currentButtonStatus={quizCollection.quiz[i].id}
                                          textQuiz={quizCollection.quiz[i].name} imageQuiz={quizCollection.quiz[i].image}
                                          chooseFood={props.chooseFood} replies={quizCollection.quiz[i].name}
                                          count={quizCollection.quiz[i].value}/> : <></>))}
                    </div>
                </div>
                <div>
                    {(!props.buttonStatus.includes("5")) ? <div className="picked">Pick a fast-food spot</div> : <div></div>}
                    <div className="buttons-flex">
                        {quizCollection.quiz.map((id, i) => (
                            (quizCollection.quiz[i].id === "5") ?
                                <CardQuiz ButtonStatus={props.buttonStatus} currentButtonStatus={quizCollection.quiz[i].id}
                                          textQuiz={quizCollection.quiz[i].name} imageQuiz={quizCollection.quiz[i].image}
                                          chooseFood={props.chooseFood} replies={quizCollection.quiz[i].name}
                                          count={quizCollection.quiz[i].value}/> : <></>))}
                    </div>
                </div>
            </div>
            <div className= "result">
                {(sum(props.quizCount) > 18 && props.quizCount.length === 5) ? <ResultCard imagePerson = {quizCollection.persons[0].image} titlePerson = {quizCollection.persons[0].name} textPerson = {quizCollection.persons[0].text}/>
                : (sum(props.quizCount) > 14 && props.quizCount.length === 5) ? <ResultCard imagePerson = {quizCollection.persons[1].image} titlePerson = {quizCollection.persons[1].name} textPerson = {quizCollection.persons[1].text}/>
                : (sum(props.quizCount) >  9 && props.quizCount.length === 5) ? <ResultCard imagePerson = {quizCollection.persons[2].image} titlePerson = {quizCollection.persons[2].name} textPerson = {quizCollection.persons[3].text}/>
                : (sum(props.quizCount) >  4 && props.quizCount.length === 5) ? <ResultCard imagePerson = {quizCollection.persons[3].image} titlePerson = {quizCollection.persons[3].name} textPerson = {quizCollection.persons[3].text}/>
                : <div>Check the test for result</div>}
            </div>
            <div className= "result">
                {(props.quizCount.length === 5) ? <button onClick={() => {props.tryAgain()}}>Try again</button> : <div> </div>}
            </div>
        </div>
    </div>

}


export default Quiz;