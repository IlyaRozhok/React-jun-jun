import './style.css'
import React from "react";

const Definitions = ({data}) => {
    return (
        <dl>
            {
                data.map(item => {
                    return <React.Fragment key={item.id}>
                        <dt>{item.dt}</dt>
                        <dd>{item.dd}</dd>
                    </React.Fragment>
                })
            }
        </dl>
    )
};

export default Definitions;

