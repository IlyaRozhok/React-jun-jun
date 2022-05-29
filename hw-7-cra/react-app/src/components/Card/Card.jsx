import './style.css'

const Card = ({title, text}) => {
    return (
        title || text ?
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{text}</p>
            </div>
        </div>
            :
            null
    )
};

export default Card;
