import Service from "@/app/view/components/Service";
import "/src/styles/Services.css"

const Services = ({ servicesCategory }) => {
    return (
        <div className="services-container">
            {servicesCategory.services.map(service => (
                <Service serviceData={service} key={service.id}/>
            ))}
        </div>
    )
}

export default Services