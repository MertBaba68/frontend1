import config from "/config/config";

const API_BASE_URL = config.API_BASE_URL;

export const getService = async (serviceId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/services/${serviceId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`Category "${serviceId}" not found.`);
            }
            throw new Error(`Failed to fetch service: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message || "An unknown error occurred.");
    }
}