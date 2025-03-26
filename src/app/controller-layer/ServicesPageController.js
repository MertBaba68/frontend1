"use client";

import { useEffect, useState } from "react";
import {getCategoryByName, getCategoryBySearch} from "@/app/service-layer/CategoryService";
import ServicesPage from "@/app/view/components/ServicesPage";
import { useParams } from "next/navigation";
import StatusPage from "@/app/view/StatusPage";

const ServicesPageController = ({ categoryName: propCategory }) => {
    const { categoryName: urlCategory } = useParams();
    const categoryToFetch = propCategory || urlCategory; // use prop wich has a value

    const [error, setError] = useState(null);
    const [servicesError, setServicesError] = useState(null);

    const [categoryData, setCategoryData] = useState(null);
    const [searchResult, setSearchResult] = useState(null);

    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);

    const [searchTerm, setSearchTerm] = useState(null);

    const handleSearch = (term) => {
        if (!term || term === "" || term === null) return
        setSearchTerm(term);
    }

    useEffect(() => {
        console.log("State update:", {
            error,
            servicesError,
            categoryData,
            searchResult,
            isInitialLoading,
            isSearching,
            searchTerm,
            categoryToFetch
        });
    }, [error, servicesError, categoryData, searchResult, isInitialLoading, isSearching, searchTerm, categoryToFetch]);

    useEffect(() => {
        if (!searchTerm || searchTerm === "" || searchTerm === null) {
            setSearchResult(null);
            setServicesError(null);
            return
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
                console.log("search")
            }
        }

        fetchCategoryBySearch();
    },[searchTerm])

    useEffect(() => {
        if (!categoryToFetch) return;

        console.log("test")

        const fetchSelectedCategory = async () => {
            setSearchResult(null);
            setIsInitialLoading(true)
            setSearchTerm(null)

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

    const displayData = categoryData || searchResult;

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
