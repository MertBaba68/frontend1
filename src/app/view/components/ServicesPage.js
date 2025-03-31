import Services from "@/app/view/components/Services";
import "/src/styles/ServicesPage.css"
import ContactFormController from "@/app/controller-layer/ContactFormController";
import Page from "@/app/view/components/static/Page";
import PageContainer from "@/app/view/components/static/PageContainer";
import {ActionBarController} from "@/app/controller-layer/ActionBarController";
import {CustomFilterController} from "@/app/controller-layer/CustomFilterController";
import BreadCrumbs from "./Breadcrumbs";


const ServicesPage = ({
    categoryData,
    onSearch,
    servicesError,
    isSearching,
    onFilterChange,
}) => {

    return (
     <>
        <BreadCrumbs links={[{url:"/categories/"+categoryData.name,name:categoryData.name}]}></BreadCrumbs>
            <Page>
                <div className="service-page-header-to-be-made" >
                    {/*Header to be expected*/}
                </div>

                <PageContainer>
                    <ActionBarController title={categoryData.name} onSearch={onSearch} />
                </PageContainer>

                <PageContainer>
                    <CustomFilterController onFilterChange={onFilterChange} />
                </PageContainer>

                <PageContainer>
                    <Services
                        servicesCategory={categoryData}
                        isSearching={isSearching}
                        servicesError={servicesError}
                    />
                </PageContainer>

                    <PageContainer>
                        <ContactFormController page="Servicepage" />
                    </PageContainer>
            </Page>
    </>
    );
};

export default ServicesPage;
