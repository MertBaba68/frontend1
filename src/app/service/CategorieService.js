import {getCategoriesDummy} from "@/utils/dummydata";

export const getServicesFromCategory = async (categoryName) => {
    const dummy = await getCategoriesDummy()
    return dummy.find(category => {
        if (category.name === categoryName) return category
    })
}