import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {ProgressBar} from "react-bootstrap";

const Progress = ({percentage}) => {

    return (
        <>
        <h1 className="title">I know React:</h1>
            <ProgressBar animated now={percentage} />
        </>
    )
};

export default Progress;

