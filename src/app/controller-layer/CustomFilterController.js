import {CustomFilter} from "@/app/view/components/CustomFilter";
import {useEffect, useState} from "react";


export const CustomFilterController = ({ filterData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [filterValues, setFilterValues] = useState(() => {
        return filterData.reduce((acc, item) => {
            acc[item.title] = { selectedValues: [] };
            return acc;
        }, {});
    });

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    const handleSelect = (selectedOption) => {
        console.log(filterValues)

        setFilterValues(prevState => {
            const newFilterValues = {...prevState};

            if (newFilterValues[selectedOption.title]) {
                newFilterValues[selectedOption.title] = {
                    selectedValues: [
                        ...newFilterValues[selectedOption.title].selectedValues,
                        selectedOption.option
                    ]
                }
            }

            return newFilterValues
        });


    }

    return(
        <CustomFilter
            onClick={handleClick}
            isOpen={isOpen}
            filterData={filterData}
            onSelect={handleSelect}
        />
    )
}