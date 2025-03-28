import {CustomFilter} from "@/app/view/components/CustomFilter";
import {useState} from "react";


export const CustomFilterController = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    const filterModel = [
        {
            title: "Rol",
            options: ["IT manager", "CEO", "CFO"],
            type: "multi-select"
        },
        {
            title: "Type oplossing",
            options: ["Hardware", "Software", "IoT"],
            type: "multi-select"
        },
        {
            title: "Techniek",
            options: ["Sensoren", "Connectiviteit", "Software", "Data", "AI"],
            type: "multi-select"
        },
        {
            title: "Bedrijfsgrootte",
            options: ["Small", "Large", "MKB", "SOHO"],
            type: "single-select"
        },
        {
            title: "Probleem",
            options: ["Kosten verlagen", "Opbrengsten verhogen", "Klanten ervaring verbeteren"],
            type: "multi-select"
        },
        {
            title: "Waarde",
            options: ["Geld", "Duurzaamheid", "Risico verlagen", "Compliance"],
            type: "multi-select"
        }
    ];

    return(
        <CustomFilter
            onClick={handleClick}
            isOpen={isOpen}
            filterData={filterModel}
        />
    )
}