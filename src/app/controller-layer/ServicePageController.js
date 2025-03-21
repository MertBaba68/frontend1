"use client"

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {getService} from "@/app/service-layer/ServiceService";
import StatusPage from "@/app/view/StatusPage";
import ServicesPage from "@/app/view/components/ServicesPage";
import ServicePage from "@/app/view/components/ServicePage";

const ServicePageController = () => {
    const { serviceId } = useParams();

    const [error, setError] = useState(null);
    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        if (!serviceId) return;

        const fetchService = async () => {
            try {
                setError(null);
                const data = await getService(serviceId);
                setServiceData(data);
            } catch (error) {
                console.error("Error fetching service: " + serviceId, error);
                setError(error);
                setServiceData(null);
            }
        }

        fetchService();
    },[serviceId]);

    useEffect(() => {
        if (serviceData) {
            document.title = `Vodafone Partner for Progress | ${serviceData.name}`;
        }
    },[serviceData])

    return error ? (
        <StatusPage type="error" status={error.message} />
    ) : !serviceData ? (
        <StatusPage type="info" status="Loading..." />
    ) : (
        <ServicePage serviceData={serviceData} />
    );
}

export default ServicePageController;