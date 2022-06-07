import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import {ButtonGroup, Button} from "react-bootstrap";
import cn from "classnames";

const BtnGroup = () => {

    const [isPressed, setState] = useState(null);

    const clickOnTheLeft = () => setState(isPressed => 'left');
    const clickOnTheRight = () => setState(isPressed => 'right');


    const leftButton = cn({
        'primary': isPressed === 'left',
        'secondary': !isPressed || isPressed === 'right'
    })

    const rightButton = cn({
        'primary': isPressed === 'right',
        'secondary': !isPressed || isPressed === 'left'
    })


    return (
        <ButtonGroup>
            <Button onClick={clickOnTheLeft} variant={leftButton}>Left</Button>
            <Button onClick={clickOnTheRight} variant={rightButton}>Right</Button>
        </ButtonGroup>
    )
};

export default React.memo(BtnGroup);