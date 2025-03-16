import {getCategories} from "@/app/service/CategorieService";
import Services from "@/app/view/components/Services";
import "/src/styles/ServicePage.css"


const ServicePage = async () => {

    const categoryData = await getCategories()

    //         <div className="answers-container">
    //                 {answers.map(answer => (
    //                     <Answer onClickAnswer={onClickAnswers} key={answer.id} answer={answer} className="answers-answer"></Answer>
    //                 ))}
    //             </div>

    return (
        <div className="service-page-container" >
            <Services data={categoryData}/>
        </div>
    )
}

export default ServicePage