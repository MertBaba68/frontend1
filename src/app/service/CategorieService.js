const getCategories = async () => {
    try {
        const data = await fetch("http://localhost:8080/categories/");
        return await data.json();
    } catch (error) {
        console.error(error);
    }
}

export const getServicesFromCategory = async (categoryName) => {
    const dummy = await getCategories()
    return dummy.find(category => {
        if (category.name === categoryName) {
            console.log("Category: " + category)
            return category
        }
    })
}