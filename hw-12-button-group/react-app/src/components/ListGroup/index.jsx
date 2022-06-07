import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import {ButtonGroup, Button} from "react-bootstrap";
import cn from "classnames";

const BtnGroup = () => {

    const [isPressed, setState] = useState(false);
    const handleClick = () => setState(isPressed => !isPressed)

    const leftButton = cn({
        'btn-secondary': isPressed,
    })
    const rightButton = cn({
        'btn-secondary': !isPressed,
    })

    return (
        <ButtonGroup>
            <Button onClick={handleClick} className={leftButton}>Left</Button>
            <Button onClick={handleClick} className={rightButton}>Right</Button>
        </ButtonGroup>
    )
};

export default React.memo(BtnGroup);