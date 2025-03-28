import {CustomFilter} from "@/app/view/components/CustomFilter";
import {useEffect, useState} from "react";
import {getFilterValues} from "@/app/service-layer/FilterService";


export const CustomFilterController = ({ filterData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    const [filterValues, setFilterValues] = useState(() => {
        return filterData.reduce((acc, item) => {
            acc[item.title] = { selectedValues: [] };
            return acc;
        }, {});
    });

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    const handleSelect = (selectedOptionData) => {

        setFilterValues(prevState => {
            const newFilterValues = {...prevState};

            if (newFilterValues[selectedOptionData.title]) {
                const selectedValues = newFilterValues[selectedOptionData.title].selectedValues;

                const isOptionSelected = selectedValues.includes(selectedOptionData.option);

                if (isOptionSelected) {
                    newFilterValues[selectedOptionData.title] = {
                        selectedValues: selectedValues.filter(option => option !== selectedOptionData.option)
                    };
                }
                newFilterValues[selectedOptionData.title] = {
                    selectedValues: [
                        ...newFilterValues[selectedOptionData.title].selectedValues,
                        selectedOptionData.option
                    ]
                }
            }

            return newFilterValues
        });
    }

    console.log(filterValues)

    useEffect(() => {
        const fetchFilterValues = async () => {
            setIsFetching(true);
            setError(null)

            try {
                const data = await getFilterValues();
                setFilterValues(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsFetching(false);
            }
        }
    })

    return(
        <CustomFilter
            onClick={handleClick}
            isOpen={isOpen}
            filterData={filterData}
            onSelect={handleSelect}
            error={error}
        />
    )
}