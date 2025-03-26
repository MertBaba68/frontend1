"use client";

import { useEffect, useState } from "react";
import {getCategoryByName, getCategoryBySearch} from "@/app/service-layer/CategoryService";
import ServicesPage from "@/app/view/components/ServicesPage";
import { useParams } from "next/navigation";
import StatusPage from "@/app/view/StatusPage";

const ServicesPageController = ({ categoryName: propCategory }) => {
    const { categoryName: urlCategory } = useParams();

    const [error, setError] = useState(null);
    const [servicesError, setServicesError] = useState(null);

    const [categoryData, setCategoryData] = useState(null);
    const [searchResult, setSearchResult] = useState(null);

    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);

    const categoryToFetch = propCategory || urlCategory; // use prop wich has a value
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    useEffect(() => {
        if (!searchTerm) {
            setSearchResult(null);
            setServicesError(null);
        }

        const fetchCategoryBySearch = async () => {

            setIsSearching(true);
            setServicesError(null);

            try {
                const data = await getCategoryBySearch(categoryToFetch, searchTerm);
                setSearchResult(data);
            }  catch (error) {
                setServicesError(error);
                setSearchResult(null);
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

            setError(null);

            try {
                const data = await getCategoryByName(categoryToFetch);
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

    if (isInitialLoading) return <StatusPage type="info" status="Loading..." />

    if (!categoryData) return <StatusPage type="info" status="No data available" />

    const displayData = searchResult || categoryData;

    console.log(displayData);

    return (
        <ServicesPage
            categoryData={displayData}
            onSearch={handleSearch}
            servicesError={servicesError}
            isSearching={isSearching}
        />
    );
};

export default ServicesPageController;
