import config from "/config/config";

const API_BASE_URL = config.API_BASE_URL;

export const getCategoryData = async (categoryName, searchTerm = null, filterValues) => {
    try {
        const response = await fetch(`${API_BASE_URL}/categories/name/${categoryName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                searchTerm: searchTerm,
                filterValues: filterValues,
            })
        });

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
};

