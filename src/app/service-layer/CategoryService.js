import config from "/config/config";

const API_BASE_URL = config.API_BASE_URL;

const getCategories = async () => {
    try {
        const data = await fetch(`${API_BASE_URL}/categories/`);
        return await data.json();
    } catch (error) {
        return error
    }
}

export const getCategoryByName = async (categoryName) => {
    try {
        const response = await fetch(`${API_BASE_URL}/categories/name/${categoryName}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

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

export const getCategoryBySearch = async (categoryName, searchTerm) => {
    try {
        const response = await fetch(`${API_BASE_URL}/categories/name/${categoryName}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                searchTerm: searchTerm
            })
        })

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