import Category from "@/app/view/components/Category";
import "/src/styles/Categories.css"

const Categories = (data) => {
    return (
        <div className="categories-container">
            {data.data.map(category => (
                <Category data={category} key={category.id}/>
            ))}
        </div>
    )
}

export default Categories