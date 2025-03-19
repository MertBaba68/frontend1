import "/src/styles/Service.css"

const Service = ({ serviceData }) => {

    if (!serviceData) {
        return <p>Loading service data...</p>;
    }

    return (
        <>
            <div className="service-container">
                <img className="service-image" alt="Image of service" src={"data:image/png;base64,"+serviceData.headerImage} />
                <h2 className="service-title" >{serviceData.name}</h2>
                <p className="service-description" >{serviceData.description}</p>
            </div>
        </>
    )
}

export default Service;
