import Services from "@/app/view/components/Services";
import ActionBar from "@/app/view/components/ActionBar";
import {getServicesFromCategorie} from "@/app/service/CategorieService";
import "/src/styles/ServicePage.css"

const ServicePage = async () => {
    const servicesFromCategory = await getServicesFromCategorie();

    return (
        <div className="service-page-container">
            <div className="header-to-be-made" >

            </div>
            <div className="service-page-actionbar-container" >
                <ActionBar />
            </div>

            <div className="services-container">
                <Services data={servicesFromCategory} />
            </div>
            <div className="contact-container">
                <p>Contact soon...</p>
            </div>
        </div>
    );
};

export default ServicePage;