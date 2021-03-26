import React from "react";
import {Card, CardBody, CardImg} from "reactstrap";
import CardTitle from "reactstrap/es/CardTitle";


const CardQuiz = (props) => {
    return <Card>
        <CardImg src = {props.imageQuiz} className= "image"/>
        <CardBody>
            <CardTitle>
                {props.textQuiz}
            </CardTitle>
        </CardBody>
    </Card>
}

export default CardQuiz;