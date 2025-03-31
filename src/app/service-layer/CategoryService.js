import config from "/config/config";

const API_BASE_URL = config.API_BASE_URL;

export const getCategoryData = async (categoryName, searchTerm = null, filterValues) => {
    try {
        const formattedFilterValues = Object.keys(filterValues || {}).reduce((acc, key) => {
            acc[key] = filterValues[key].selectedValues;
            return acc;
        }, {});

        const requestBody = {
            searchTerm: searchTerm,
            filterValues: formattedFilterValues
        };

        const response = await fetch(`${API_BASE_URL}/categories/name/${categoryName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
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

