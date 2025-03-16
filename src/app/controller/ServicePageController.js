"use client";

import { useEffect, useState } from "react";
import { getServicesFromCategory } from "@/app/service/CategorieService";
import ServicePage from "@/app/view/components/ServicePage";

const ServicePageController = ({ categoryName }) => {
    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        const fetchSelectedCategory = async () => {
            try {
                const data = await getServicesFromCategory(categoryName);
                setCategoryData(data);
            } catch (error) {
                console.error("Error fetching category:", error);
            }
        };

        fetchSelectedCategory();
    }, [categoryName]);

    return <ServicePage categoryData={categoryData} />;
};

export default ServicePageController;
