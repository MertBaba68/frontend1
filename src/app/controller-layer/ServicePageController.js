"use client"

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {getService} from "@/app/service-layer/ServiceService";

const ServicePageController = () => {
    const { serviceId } = useParams();

    const [error, setError] = useState(null);
    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        console.log(serviceId);

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

    return(
        <p>{serviceId}</p>
    )
}

export default ServicePageController;