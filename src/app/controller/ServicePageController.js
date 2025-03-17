"use client";

import { useEffect, useState } from "react";
import { getServicesFromCategory } from "@/app/service/CategorieService";
import ServicePage from "@/app/view/components/ServicePage";
import { useParams } from "next/navigation";
import BlankPage from "@/app/view/BlankPage";

const ServicePageController = ({ categoryName: propCategory }) => {
    const { categoryName: urlCategory } = useParams();
    const [error, setError] = useState(null);

    // use prop wich has a value
    const categoryToFetch = propCategory || urlCategory;

    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        if (!categoryToFetch) return;

        const fetchSelectedCategory = async () => {
            try {
                const data = await getServicesFromCategory(categoryToFetch);
                setCategoryData(data);
                setError(null);
            } catch (error) {
                console.error("Error fetching category: " + categoryToFetch, error);
                setError(error);
            }
        };

        fetchSelectedCategory();
    }, [categoryToFetch]);

    return error ? (
        <BlankPage errormessage={error.message} />
        // <p>{error.message}</p>
    ) : !categoryData ? (
        <BlankPage information="Loading..." />
        // <p>Loading...</p>
    ) : (
        <ServicePage categoryData={categoryData} />
    );
};

export default ServicePageController;
