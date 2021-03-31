import React from "react";
import {Card, CardBody, CardImg} from "reactstrap";
import CardTitle from "reactstrap/es/CardTitle";


const CardQuiz = (props) => {
    let onChooseClick = () => {
        props.chooseFood(props.replies, props.count, props.currentButtonStatus);
    }
    return <button disabled={props.ButtonStatus.includes(props.currentButtonStatus)}
                   value={props.textQuiz} className="button" onClick={onChooseClick}>
        <Card>
            <CardImg src={props.imageQuiz} className="image"/>
            <CardBody>
                <CardTitle>
                    {props.textQuiz}
                </CardTitle>
            </CardBody>
        </Card>
    </button>

}
export default CardQuiz;