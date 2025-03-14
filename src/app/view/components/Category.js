import "/src/styles/Category.css"

const Category = (data) => {
    console.log(data)
    return (
        <>
            <div className="category-container">
                <img className="category-image" alt="Image of service" src={"placeholder-categories.png"}/>
                <h2 className="category-title" >{data.data.name}</h2>
                <p className="category-description" >Slimme agrarische sensor: meet bodemgegevens, bespaar water, verhoog opbrengst en optimaliseer
                    gewasgroei in real-time!</p>
            </div>

        </>
    )
}

export default Category