import Service from "@/app/view/components/Service";
import "/src/styles/Services.css"

const Services = ({
                      servicesCategory,
                      servicesError,
    isSearching,
                  }) => {

    if (!servicesCategory) {
        return <p>Loading...</p>;
    }

    if (servicesError) {
        return <p>{servicesError.message}</p>
    }

    if (isSearching) {
        return <p>...Searching</p>
    }

    return (
        <div className="services-container">
            {servicesCategory.services.map(service => (
                <Service serviceData={service} key={service.id}/>
            ))}
        </div>
    )
}

export default Services