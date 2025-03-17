"use client";

import { useEffect, useState } from "react";
import { getServicesFromCategory } from "@/app/service/CategorieService";
import ServicePage from "@/app/view/components/ServicePage";
import { useParams } from "next/navigation";
import StatusPage from "@/app/view/StatusPage";

const ServicePageController = ({ categoryName: propCategory }) => {
    const { categoryName: urlCategory } = useParams();
    const [error, setError] = useState(null);
    const [categoryData, setCategoryData] = useState(null);

    // use prop wich has a value
    const categoryToFetch = propCategory || urlCategory;

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
        <StatusPage type="error" status={error.message} />
    ) : !categoryData ? (
        <StatusPage type="info" status="Loading..." />
    ) : (
        <ServicePage categoryData={categoryData} />
    );
};

export default ServicePageController;
