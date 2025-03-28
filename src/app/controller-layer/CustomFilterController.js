import {CustomFilter} from "@/app/view/components/CustomFilter";
import {useEffect, useState} from "react";


export const CustomFilterController = ({ filterData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [filterValues, setFilterValues] = useState({

    });

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    const test = (selectedOption) => {
        
    }

    const init = () => {
        return filterData.reduce((acc, item) => {

            if (!acc[item.title]) {
                acc[item.title] = { selectedValues: [] };
            }

            return acc;
        }, {});
    }

    useEffect(() => {
        if (filterData) {
            console.log(init())
        }
    },[filterData]);

    return(
        <CustomFilter
            onClick={handleClick}
            isOpen={isOpen}
            filterData={filterData}
            onSelect={test}
        />
    )
}