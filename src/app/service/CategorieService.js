import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getCategories = async () => {

    try {
        const data = await fetch("http://localhost:8080/categories/");
        return await data.json();
    } catch (error) {
        return error
    }
}

export const getCategoryByName = async (categoryName) => {
    try {
        const response = await fetch(`${API_BASE_URL}/categories/name/${categoryName}`)

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`Category "${categoryName}" not found.`);
            }
            throw new Error(`Failed to fetch category: ${response.statusText}`);
        }

        return await response.json();

    } catch (error) {
        throw new Error(error.message || "An unknown error occurred.");
    }
}