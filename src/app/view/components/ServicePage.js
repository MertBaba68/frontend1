import Services from "@/app/view/components/Services";
import ActionBar from "@/app/view/components/ActionBar";
import "/src/styles/ServicePage.css"
import ContactFormController from "@/app/controller-layer/ContactFormController";
import Page from "@/app/view/components/Page";

const ServicePage = ({ categoryData }) => {
    return (
        <Page>
            <div className="service-page-header-to-be-made" >
                {/*Header to be expected*/}
            </div>
            <div className="service-page-actionbar-container">
                <ActionBar servicesCategoryData={categoryData} />
            </div>

            <div className="service-page-services-container">
                <Services servicesCategory={categoryData} />
            </div>
            <div className="service-page-contact-container">
                <ContactFormController page="Servicepage" />
            </div>
        </Page>
    );
};

export default ServicePage;