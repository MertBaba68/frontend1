import {getCategoriesDummy} from "@/utils/dummydata";

export const getCategories = async () => {
    return await getCategoriesDummy()
    // if (!response.ok) throw new Error("Failed to fetch categories.")
    // return response.json()
}