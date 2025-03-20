"use client"

import {useParams} from "next/navigation";

const ServicePageController = () => {
    const { service } = useParams();



    return(
        <p>{service}</p>
    )
}

export default ServicePageController;