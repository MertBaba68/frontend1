import {CustomFilter} from "@/app/view/components/CustomFilter";
import {useEffect, useState} from "react";
import {getFilterValues} from "@/app/service-layer/FilterService";


export const CustomFilterController = ({ filterData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    const [filterValues, setFilterValues] = useState(null);



    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    const handleSelect = (selectedOptionData) => {

        const newFilterValues = { ...filterValues };
        const title = selectedOptionData.title;
        const option = selectedOptionData.option;

        if (newFilterValues[title]) {
            const selectedOptions = newFilterValues[title].selectedValues;

            if (!selectedOptions.includes(option)) {
                selectedOptions.push(option);
            } else {
                selectedOptions.filter(o => o!== option);
            }
        }

        setFilterValues(newFilterValues);
    };

    // useEffect(() => {
    //     const fetchFilterValues = async () => {
    //         setIsFetching(true);
    //         setError(null)
    //
    //         try {
    //             const data = await getFilterValues();
    //             setFilterValues(data);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setIsFetching(false);
    //         }
    //     }
    // },[])

    const initialValuesBody = () => {
        return filterData.reduce((acc, item) => {
            acc[item.title] = { selectedValues: [] };
            return acc;
        }, {});
    }

    useEffect(() => {
        setFilterValues(initialValuesBody())
    },[]);

    useEffect(() => {
        console.log(filterValues);
    }, [filterValues]);

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