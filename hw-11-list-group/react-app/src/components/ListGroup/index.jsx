import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {ListGroup} from "react-bootstrap";


const LiGroup = (props) => {
    const {children} = props;

    return (
        <>
            <ListGroup>
                {children}
            </ListGroup>

            {/*there's another way below*/}
            <ListGroup>
                {children.map(item => {
                    return <ListGroup.Item action variant="success">{item}</ListGroup.Item>
                })}
            </ListGroup>
        </>
    )
};

export default React.memo(LiGroup);