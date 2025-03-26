"use client";

import { useEffect, useState } from "react";
import {getCategoryByName, getCategoryBySearch} from "@/app/service-layer/CategoryService";
import ServicesPage from "@/app/view/components/ServicesPage";
import { useParams } from "next/navigation";
import StatusPage from "@/app/view/StatusPage";

const ServicesPageController = ({ categoryName: propCategory }) => {
    const { categoryName: urlCategory } = useParams();
    const [error, setError] = useState(null);
    const [categoryData, setCategoryData] = useState(null);
    const categoryToFetch = propCategory || urlCategory; // use prop wich has a value
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    useEffect(() => {
        if (!searchTerm) return

        console.log(searchTerm);

        fetchCategoryBySearch()
    },[searchTerm])

    const fetchCategoryBySearch = async () => {
        try {
            setError(null);
            const data = await getCategoryBySearch(categoryToFetch, searchTerm);
            setCategoryData(data);
        }  catch (error) {
            console.error("Error fetching category with onSearch term: " + categoryToFetch, error);
            setError(error);
            setCategoryData(null);
        }
    }

    useEffect(() => {
        if (!categoryToFetch) return;

        fetchSelectedCategory();
    }, [categoryToFetch]);

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
        <ServicesPage categoryData={categoryData} onSearch={handleSearch} />
    );
};

export default ServicesPageController;
