import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Alert} from "react-bootstrap";

const AlertMessage = ({text, type}) => {

    return (
        <Alert key={Math.round(Math.random() * 100)} variant={type}>
            {text}
        </Alert>
    )
};

export default React.memo(AlertMessage);

