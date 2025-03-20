import Page from "@/app/view/components/dumb/Page";
import PageContainer from "@/app/view/components/dumb/PageContainer";


const ServicePage = ({ serviceData }) => {
    return(
        <Page>
            <PageContainer>
                <p>{serviceData.name}</p>

            </PageContainer>
        </Page>

    )
}

export default ServicePage