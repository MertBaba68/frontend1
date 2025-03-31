import {CustomFilter} from "@/app/view/components/CustomFilter";
import {useEffect, useState} from "react";
import {getFilterOptions} from "@/app/service-layer/FilterService";

export const CustomFilterController = ({ onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    const [filterOptions, setFilterOptions] = useState(null);
    const [filterData, setFilterData] = useState(null);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    const handleSelect = (selectedOptionData) => {
        let newFilterValues = { ...filterOptions };
        const title = selectedOptionData.filter;
        const option = selectedOptionData.option;

        if (newFilterValues[title]) {
            const selectedOptions = newFilterValues[title].selectedValues;

            if (!selectedOptions.includes(option)) {
                selectedOptions.push(option);
            }
            else {
                selectedOptions.splice(selectedOptions.indexOf(option), 1);
            }
        }

        setFilterOptions(newFilterValues);
        onFilterChange(newFilterValues);
    };

    useEffect(() => {
        const fetchFilterValues = async () => {
            setIsFetching(true);
            setError(null)

            try {
                const data = await getFilterOptions();
                setFilterData(data)

                const initialFilterOptions = await data.reduce((acc, item) => {
                    acc[item.filter] = { selectedValues: [] }
                    return acc
                }, {})
                setFilterOptions(initialFilterOptions);
            } catch (error) {
                setError(error);
            } finally {
                setIsFetching(false);
            }
        }
        fetchFilterValues()
    },[])

   if (filterOptions) return(

        <CustomFilter
            onClick={handleClick}
            isOpen={isOpen}
            filterData={filterData}
            onSelect={handleSelect}
            error={error}
        />
    )
}
