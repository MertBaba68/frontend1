import Service from "@/app/view/components/Service";
import "/src/styles/Services.css"

const Services = (data) => {
    console.log("Services", data);
    return (
        <div className="services-container">
            {data.data.services.map(service => (
                <Service data={service} key={service.id}/>
            ))}
        </div>
    )
}

export default Services