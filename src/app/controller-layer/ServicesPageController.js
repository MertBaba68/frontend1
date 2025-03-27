"use client";

import { useEffect, useState } from "react";
import {getCategoryData} from "@/app/service-layer/CategoryService";
import ServicesPage from "@/app/view/components/ServicesPage";
import { useParams } from "next/navigation";
import StatusPage from "@/app/view/StatusPage";

const ServicesPageController = ({ categoryName: propCategory }) => {
    const { categoryName: urlCategory } = useParams();
    const categoryToFetch = propCategory || urlCategory; // use prop wich has a value

    const [error, setError] = useState(null);
    const [servicesError, setServicesError] = useState(null);

    const [categoryData, setCategoryData] = useState(null);

    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);

    const [searchTerm, setSearchTerm] = useState(null);

    const handleSearch = (term) => {
        if (!term.trim()) return;
        setSearchTerm(term);
    }

    useEffect(() => {
        const fetchCategoryBySearch = async () => {
            setIsSearching(true);
            setServicesError(null);

            try {
                const data = await getCategoryData(categoryToFetch, searchTerm);
                setCategoryData(data);
            }  catch (error) {
                setServicesError(error);
                setCategoryData(null);
            } finally {
                setIsSearching(false);
            }
        }

        fetchCategoryBySearch();
    },[searchTerm])

    useEffect(() => {
        if (!categoryToFetch) return;

        const fetchSelectedCategory = async () => {
            setIsInitialLoading(true)
            setError(null)

            try {
                const data = await getCategoryData(categoryToFetch);
                setCategoryData(data);
            } catch (error) {
                setError(error);
                setCategoryData(null);
            } finally {
                setIsInitialLoading(false);
            }
        };

        fetchSelectedCategory();
    }, [categoryToFetch]);

    useEffect(() => {
        if (categoryData) {
            document.title = `Vodafone Partner for Progress | ${categoryData.name}`;
        }
    },[categoryData])

    if (error) return <StatusPage type="error" status={error.message} />
    if (isInitialLoading) return <StatusPage type="info" status="Aan het laden..." />
    if (!categoryData) return <StatusPage type="info" status="Geen data beschikbaar" />

    return (
        <ServicesPage
            categoryData={categoryData}
            onSearch={handleSearch}
            servicesError={servicesError}
            isSearching={isSearching}
        />
    );
};

export default ServicesPageController;
