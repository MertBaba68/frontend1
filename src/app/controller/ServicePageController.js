"use client";

import { useEffect, useState } from "react";
import { getServicesFromCategory } from "@/app/service/CategorieService";
import ServicePage from "@/app/view/components/ServicePage";

const ServicePageController = ({ category }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchSelectedCategory = async () => {
            try {
                const data = await getServicesFromCategory(category);
                setSelectedCategory(data);
            } catch (error) {
                console.error("Error fetching category:", error);
            }
        };

        fetchSelectedCategory();
    }, [category]);

    return <ServicePage category={selectedCategory} />;
};

export default ServicePageController;
