import Service from "@/app/view/components/Service";
import "/src/styles/Services.css"

const Services = (data) => {
    return (
        <div className="services-container">
            {data.data.map(category => (
                <Service data={category} key={category.id}/>
            ))}
        </div>
    )
}

export default Services