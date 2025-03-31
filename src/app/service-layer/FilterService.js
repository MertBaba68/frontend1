import config from "../../../config/config";

const API_BASE_URL = config.API_BASE_URL;

export const getFilterOptions = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/filter/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${await response.text() || "Unknown error"}`);
        }

        return await response.json();
    }  catch (error) {
        throw new Error(error.message || "An unknown error occurred.");
    }
}