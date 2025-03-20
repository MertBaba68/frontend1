import Page from "@/app/view/components/dumb/Page";
import PageContainer from "@/app/view/components/dumb/PageContainer";
import "/src/styles/ServicePage.css"
import AboutSection from "@/app/view/components/AboutSection";
import Card from "@/app/view/components/dumb/Card";
import ContactFormController from "@/app/controller-layer/ContactFormController";

const ServicePage = ({ serviceData }) => {

    const dummy = {
        "about": [
            {
                "title": "Payoff",
                "description": "Maak briljante werkplekbeslissingen. Haal nog meer uit je kantoorruimtes. Nimway van Sony is een complete suite van slimme kantoorsensoren, schermen en applicaties.",
                "list": [
                    "Voor medewerkers: virtuele assistentie voor soepele werkdagen.",
                    "Voor kantoormanagers: ruimte-analyse om je werkplek te optimaliseren.",
                    "Voor leidinggevenden: nieuwe zakelijke voordelen met een slim kantoor."
                ]
            },
            {
                "title": "Waardepropositie",
                "description": "Nimway lost problemen op met betrekking tot inefficiënt gebruik van kantoorruimtes en het gebrek aan inzicht in werkplekbezetting."
            },
            {
                "description": "Nimway biedt bedrijven de mogelijkheid om hun werkplekken effectiever te gebruiken en werknemers te ondersteunen in hun dagelijkse werkzaamheden.",
                "img": "/tracking industry (1).png"
            },
            {
                "title": "Oplossing",
                "description": "Nimway is een complete suite van slimme kantoorsensoren, schermen en applicaties. Het systeem maakt gebruik van real-time sensoren en workplace experience tools om directe kantoorintelligentie te bieden.",
                "list": [
                    "Real-time sensoren voor live data.",
                    "Workplace experience tools voor betere besluitvorming.",
                    "Eenvoudige integratie met bestaande systemen."
                ],
                "img": "/utility industry (1).png"
            },
            {
                "description": "Door Nimway te implementeren, kunnen bedrijven hun kantoorruimtes optimaliseren, wat leidt tot een efficiënter gebruik van middelen en een verbeterde werkplekervaring voor werknemers."
            }
        ]
    };

    const service = {
        serviceData,
        ...dummy
    }

    return(
        <>
            <div className="background-image-container">
                <div className="background-image-text" >
                    <h1 className="background-image-header" >{service.name}</h1>
                    <p className="background-image-description" >{service.description}</p>
                </div>
            </div>


            <Page>
                <PageContainer>
                <Card className="service-page-about-container" >
                    {
                        dummy.about.map((section, index) => {
                            return <AboutSection
                                key={index}
                                header={section.title}
                                description={section.description}
                                img={section.img}
                                list={section.list}

                            />

                        })
                    }
                        {/*<AboutSection header="Payoff" description={serviceData.description} img={"/utility industry (1).png"} />*/}
                        {/*<AboutSection header="Waardepropisitie" description={serviceData.description}  />*/}
                        </Card>
                </PageContainer>

                <ContactFormController/>

            </Page>
        </>
    )
}

export default ServicePage