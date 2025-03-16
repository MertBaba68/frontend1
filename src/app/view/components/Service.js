import "/src/styles/Service.css"

const Service = (data) => {
    console.log(data)
    return (
        <>
            <div className="service-container">
                <img className="service-image" alt="Image of service" src={"placeholder-categories.png"}/>
                <h2 className="service-title" >{data.data.name}</h2>
                <p className="service-description" >{data.data.description}</p>
            </div>

        </>
    )
}

export default Service