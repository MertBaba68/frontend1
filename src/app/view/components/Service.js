import "/src/styles/Service.css"

const Service = ({ serviceData }) => {

    if (!serviceData) {
        return <p>Loading service data...</p>;
    }

    // Will be removed, only here for demo purposes
    const getRandomImage = () => {
        const images = [
            "/placeholder-categories.png",
            "/tracking industry (1).png",
            "/utility industry (1).png"
        ];
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    return (
        <>
            <div className="service-container">
                <img className="service-image" alt="Image of service" src={getRandomImage()} />
                <h2 className="service-title" >{serviceData.name}</h2>
                <p className="service-description" >{serviceData.description}</p>
            </div>
        </>
    )
}

export default Service;
