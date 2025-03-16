import Services from "@/app/view/components/Services";
import ActionBar from "@/app/view/components/ActionBar";
import "/src/styles/ServicePage.css"

const ServicePage = ({ category }) => {

    if (!category) {
        return <p>Loading category data...</p>; // Wacht tot de data beschikbaar is
    }

    return (
        <div className="service-page-container">
            <div className="service-page-header-to-be-made" >

            </div>
            <div className="service-page-actionbar-container">
                <ActionBar />
            </div>

            <div className="service-page-services-container">
                <Services data={category} />
            </div>
            <div className="service-page-contact-container">
                <p>Contact soon...</p>
            </div>
        </div>
    );
};

export default ServicePage;