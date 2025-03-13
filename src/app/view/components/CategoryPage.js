import {getCategories} from "@/app/service/CategorieService";
import Category from "@/app/view/components/Category";


const CategoryPage = async () => {

    const categoryData = await getCategories()

    //         <div className="answers-container">
    //                 {answers.map(answer => (
    //                     <Answer onClickAnswer={onClickAnswers} key={answer.id} answer={answer} className="answers-answer"></Answer>
    //                 ))}
    //             </div>

    return (
        <div className="category-page-container">
            <div className="category-page-grid-row" >
                {categoryData.map(category => (
                    <Category data={category} key={category.id} />
                ))}
            </div>
        </div>
    )
}

export default CategoryPage