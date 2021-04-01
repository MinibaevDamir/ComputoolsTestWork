import quizCollection from "../../Data/QuizData.json";
import React from "react";
import ResultCard from "../Cards/ResultCard";

function sum (counts) {
    let result = 0;
    for (let count of Object.values(counts)) {
        result += count;
    }
    return result;
}
const BlockOfResults = (props) => {
    return <div>
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
}
export default BlockOfResults;