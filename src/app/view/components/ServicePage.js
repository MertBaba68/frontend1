import {getCategories, getServicesFromCategorie} from "@/app/service/CategorieService";
import Services from "@/app/view/components/Services";
import "/src/styles/ServicePage.css"


const ServicePage = async () => {

    const servicesFromCategory = await getServicesFromCategorie()

    //         <div className="answers-container">
    //                 {answers.map(answer => (
    //                     <Answer onClickAnswer={onClickAnswers} key={answer.id} answer={answer} className="answers-answer"></Answer>
    //                 ))}
    //             </div>

    return (
        <div className="service-page-container" >
            <Services data={servicesFromCategory}/>
        </div>
    )
}

export default ServicePage