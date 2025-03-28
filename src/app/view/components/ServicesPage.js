import Services from "@/app/view/components/Services";
import "/src/styles/ServicesPage.css"
import ContactFormController from "@/app/controller-layer/ContactFormController";
import Page from "@/app/view/components/static/Page";
import PageContainer from "@/app/view/components/static/PageContainer";
import {ActionBarController} from "@/app/controller-layer/ActionBarController";
import {CustomFilterController} from "@/app/controller-layer/CustomFilterController";

const ServicesPage = ({
                          categoryData,
                          onSearch,
    servicesError,
    isSearching
}) => {

    const filterData = [
        {
            title: "Rol",
            options: ["IT manager", "CEO", "CFO"],
            type: "multi-select"
        },
        {
            title: "Type oplossing",
            options: ["Hardware", "Software", "IoT"],
            type: "multi-select"
        },
        {
            title: "Techniek",
            options: ["Sensoren", "Connectiviteit", "Software", "Data", "AI"],
            type: "multi-select"
        },
        {
            title: "Bedrijfsgrootte",
            options: ["Small", "Large", "MKB", "SOHO"],
            type: "single-select"
        },
        {
            title: "Probleem",
            options: ["Kosten verlagen", "Opbrengsten verhogen", "Klanten ervaring verbeteren"],
            type: "multi-select"
        },
        {
            title: "Waarde",
            options: ["Geld", "Duurzaamheid", "Risico verlagen", "Compliance"],
            type: "multi-select"
        }
    ];

    return (
        <Page>
            <div className="service-page-header-to-be-made" >
                {/*Header to be expected*/}
            </div>

            <PageContainer>
                <ActionBarController title={categoryData.name} onSearch={onSearch} />
            </PageContainer>

            <PageContainer>
                <CustomFilterController filterData={filterData} />
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
    );
};

export default ServicesPage;