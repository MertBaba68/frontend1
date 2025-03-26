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

    if (servicesCategory.services.length < 1) {
        return <p>No matching search result :(</p>
    }

    console.log(servicesCategory);

    if (servicesCategory) return (
        <div className="services-container">
            {servicesCategory.services.map(service => (
                <Service serviceData={service} key={service.id}/>
            ))}
        </div>
    )
}

export default Services