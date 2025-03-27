import {CustomFilter} from "@/app/view/components/CustomFilter";
import {useState} from "react";


export const CustomFilterController = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    return(
        <CustomFilter
            onClick={handleClick}
            isOpen={isOpen}
        />
    )
}