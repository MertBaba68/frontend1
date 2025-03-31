import "/src/styles/Card.css"

const Card = ({ children, center, small }) => {

    const alignment = center ? "card-container-center" : "card-container-left";
    const size = small ? "card-container-small" : "card-container-large";
    const cardClass = `card-container ${alignment} ${size}`;

    return (
        <div className={cardClass}>
            {children}
        </div>
    );
};

export default Card;