"use client";

import { useEffect, useState } from "react";
import { getServicesFromCategory } from "@/app/service/CategorieService";
import ServicePage from "@/app/view/components/ServicePage";
import { useParams } from "next/navigation";

const ServicePageController = ({ categoryName: propCategory }) => {
    const { categoryName: urlCategory } = useParams();

    // use prop wich has a value
    const categoryToFetch = propCategory || urlCategory;

    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        if (!categoryToFetch) return;

        const fetchSelectedCategory = async () => {
            try {
                const data = await getServicesFromCategory(categoryToFetch);
                setCategoryData(data);
            } catch (error) {
                console.error("Error fetching category:", error);
            }
        };

        fetchSelectedCategory();
    }, [categoryToFetch]);

    return <ServicePage categoryData={categoryData} />;
};

export default ServicePageController;
