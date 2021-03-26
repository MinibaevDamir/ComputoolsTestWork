import React from "react";
import {Card, CardBody, CardImg, CardText} from "reactstrap";
import CardTitle from "reactstrap/es/CardTitle";


const ResultCard = (props) => {
    return <Card>
        <CardImg src = {props.imagePerson} className= "imagePerson"/>
        <CardBody>
            <CardTitle>
                {props.titlePerson}
            </CardTitle>
            <CardText>
                {props.textPerson}
            </CardText>
        </CardBody>
    </Card>
}

export default ResultCard;