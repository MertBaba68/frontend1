import "/src/styles/Service.css"
import { useRouter } from "next/navigation";

const Service = ({ serviceData }) => {
    const router = useRouter();

    if (!serviceData) {
        return <p>Loading service data...</p>;
    }

    console.log(serviceData);

    const handleClick = () => {
        router.push(`/service/${serviceData.id}`)
    }

    return (
        <>
            <div onClick={handleClick} className="service-container">
                <img className="service-image" alt="Image of service"
                     src={serviceData.headerImage}/>

                {/*<img className="service-image" alt="Image of service"*/}
                {/*     src={"data:image/png;base64," + serviceData.headerImage}/>*/}
                <h2 className="service-title">{serviceData.name}</h2>
                <p className="service-description">{serviceData.description}</p>
            </div>
        </>
    )
}

export default Service;
