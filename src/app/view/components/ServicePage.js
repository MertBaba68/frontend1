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
                    <h1 className="background-image-header" >{serviceData.name}</h1>
                    <p className="background-image-description" >{serviceData.description}</p>
                </div>
            </div>

            <Page>
                <PageContainer>
                    <Card className="service-page-about-container" >
                        {
                            serviceData.about.map((section, index) => {
                                return <AboutSection
                                    key={index}
                                    header={section.title}
                                    description={section.description}
                                    img={section.image}
                                    list={section.list}
                                />
                            })
                        }
                    </Card>
                </PageContainer>

                <ContactFormController/>

            </Page>
        </>
    )
}

export default ServicePage