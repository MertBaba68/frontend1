import Service from "@/app/view/components/Service";
import "/src/styles/Services.css"

const Services = ({
                      servicesCategory,
                      servicesError,
    isSearching,
                  }) => {

    if (!servicesCategory) {
        return <p>Aan het laden...</p>;
    }

    if (servicesError) {
        return <p>{servicesError.message}</p>
    }

    if (isSearching) {
        return <p>Aan het zoeken...</p>
    }

    if (servicesCategory.services.length < 1) {
        return <p>Geen resultaten gevonden.(</p>
    }

    if (servicesCategory) return (
        <div className="services-container">
            {servicesCategory.services.map(service => (
                <Service serviceData={service} key={service.id}/>
            ))}
        </div>
    )
}

export default Services