import "/src/styles/Card.css"

const Card = ({ children, center }) => {

    const alignment = center ? "card-container-center" : "card-container-left";
    const cardClass = `card-container ${alignment}`;

    return (
        <div className={cardClass}>
            {children}
        </div>
    );
};

export default Card;