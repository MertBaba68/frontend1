import Services from "@/app/view/components/Services";
import ActionBar from "@/app/view/components/ActionBar";
import "/src/styles/ServicesPage.css"
import ContactFormController from "@/app/controller-layer/ContactFormController";
import Page from "@/app/view/components/static/Page";
import PageContainer from "@/app/view/components/static/PageContainer";

const ServicesPage = ({ categoryData }) => {
    return (
        <Page>
            <div className="service-page-header-to-be-made" >
                {/*Header to be expected*/}
            </div>
            <PageContainer>
                <ActionBar servicesCategoryData={categoryData} />
            </PageContainer>

            <PageContainer>
                <Services servicesCategory={categoryData} />
            </PageContainer>

            <PageContainer>
                <ContactFormController page="Servicepage" />
            </PageContainer>
        </Page>
    );
};

export default ServicesPage;