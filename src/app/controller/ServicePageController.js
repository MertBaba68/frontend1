"use client";

import { useEffect, useState } from "react";
import { getCategoryByName } from "@/app/service/CategoryService";
import ServicePage from "@/app/view/components/ServicePage";
import { useParams } from "next/navigation";
import StatusPage from "@/app/view/StatusPage";

const ServicePageController = ({ categoryName: propCategory }) => {
    const { categoryName: urlCategory } = useParams();
    const [error, setError] = useState(null);
    const [categoryData, setCategoryData] = useState(null);
    const categoryToFetch = propCategory || urlCategory; // use prop wich has a value

    useEffect(() => {
        if (!categoryToFetch) return;

        const fetchSelectedCategory = async () => {
            try {
                setError(null);
                const data = await getCategoryByName(categoryToFetch);
                setCategoryData(data);
            } catch (error) {
                console.error("Error fetching category: " + categoryToFetch, error);
                setError(error);
                setCategoryData(null);
            }
        };

        fetchSelectedCategory();
    }, [categoryToFetch]);

    useEffect(() => {
        if (categoryData) {
            document.title = `Vodafone Partner for Progress | ${categoryData.name}`;
        }
    },[categoryData])

    return error ? (
        <StatusPage type="error" status={error.message} />
    ) : !categoryData ? (
        <StatusPage type="info" status="Loading..." />
    ) : (
        <ServicePage categoryData={categoryData} />
    );
};

export default ServicePageController;
