import './style.css'

const Definitions = (props) => {
    const {data} = props;

    return (
        <dl>
            {
                data.map(item => {
                    return <>
                        <dt key={item.id}>{item.dt}</dt>
                        <dd key={item.id}>{item.dd}</dd>
                    </>
                })
            }
        </dl>
    )
};

export default Definitions;

