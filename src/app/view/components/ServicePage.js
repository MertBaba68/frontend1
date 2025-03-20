import Page from "@/app/view/components/dumb/Page";
import PageContainer from "@/app/view/components/dumb/PageContainer";
import "/src/styles/ServicePage.css"

const ServicePage = ({ serviceData }) => {
    return(
        <Page>
            <PageContainer>
                <div className="background-image-container">
                    <img className="background-image-image" src={"/slim_kantoor.png"} alt="Background image for service page"/>

                </div>
            </PageContainer>
        </Page>

    )
}

export default ServicePage