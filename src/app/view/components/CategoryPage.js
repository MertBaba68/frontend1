import {getCategories} from "@/app/service/CategorieService";
import Categories from "@/app/view/components/Categories";
import "/src/styles/CategoryPage.css"


const CategoryPage = async () => {

    const categoryData = await getCategories()

    //         <div className="answers-container">
    //                 {answers.map(answer => (
    //                     <Answer onClickAnswer={onClickAnswers} key={answer.id} answer={answer} className="answers-answer"></Answer>
    //                 ))}
    //             </div>

    return (
        <div className="category-page-container">
            <Categories data={categoryData}/>
        </div>
    )
}

export default CategoryPage