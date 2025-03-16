import {getCategories, getServicesFromCategorie} from "@/app/service/CategorieService";
import Services from "@/app/view/components/Services";
import "/src/styles/ServicePage.css"
import ActionBar from "@/app/view/components/ActionBar";


const ServicePage = async () => {

    const servicesFromCategory = await getServicesFromCategorie()

    return (
        <div className="service-page-container">
            <ActionBar/>
            <Services data={servicesFromCategory}/>
        </div>
    )
}

export default ServicePage