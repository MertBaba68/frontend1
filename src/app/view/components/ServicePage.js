import Page from "@/app/view/components/dumb/Page";
import PageContainer from "@/app/view/components/dumb/PageContainer";
import "/src/styles/ServicePage.css"
import AboutSection from "@/app/view/components/AboutSection";
import Card from "@/app/view/components/dumb/Card";
import ContactFormController from "@/app/controller-layer/ContactFormController";

const ServicePage = ({ serviceData }) => {
    return(
        <>
            <div className="background-image-container">
                <div className="background-image-text" >
                    <h1 className="background-image-header" >Slimme kantooroplossing</h1>
                    <p className="background-image-description" >Slimme kantoorsensoren, schermen en applicaties.
                        Gebruik werkplekken effectiever en ondersteun medewerkers in dagelijkse werkzaamheden</p>
                </div>
            </div>


            <Page>
                <PageContainer>
                <Card className="service-page-about-container" >
                        <AboutSection header="Payoff" description={serviceData.description} img={"/utility industry (1).png"} />
                        <AboutSection header="Waardepropisitie" description={serviceData.description}  />
                        </Card>
                </PageContainer>

                <ContactFormController/>

            </Page>
        </>
    )
}

export default ServicePage