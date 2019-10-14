import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

function CharacterCard(props) {
  return (
    <div className="card-body">
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
        </CardBody>
        <img width="50%" src={props.image} alt={props.name} />
        <CardBody>
          <CardText>
            Species: {props.species}
            <br />
            Gender: {props.gender}
            <br />
            Status: {props.status}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default CharacterCard;
