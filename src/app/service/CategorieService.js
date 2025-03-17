import {error} from "next/dist/build/output/log";

const getCategories = async () => {
    try {
        const data = await fetch("http://localhost:8080/categories/");
        return await data.json();
    } catch (error) {
        return error
    }
}

export const getServicesFromCategory = async (categoryName) => {
    const data = await getCategories()
    const category = data.find(category => category.name === categoryName);
    if (!category) {
        throw new Error(`No category with name ${categoryName}`);
    }
    return category;
}