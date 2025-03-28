import {CustomFilter} from "@/app/view/components/CustomFilter";
import {useEffect, useState} from "react";
import {getFilterValues} from "@/app/service-layer/FilterService";


export const CustomFilterController = ({ onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    const [filterValues, setFilterValues] = useState(null);
    const [filterData, setFilterData] = useState(null);



    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    const handleSelect = (selectedOptionData) => {

        let newFilterValues = { ...filterValues };
        const title = selectedOptionData.title;
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

        setFilterValues(newFilterValues);
        onFilterChange(newFilterValues);
    };

    // TODO: Use this instead of placeholder function when backend is ready
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

    const fetchFilterValues = () => {
        return [
            { title: "Rol", options: ["IT manager", "CEO", "CFO"] },
            { title: "Type oplossing", options: ["Hardware", "Software", "IoT"] },
            { title: "Techniek", options: ["Sensoren", "Connectiviteit", "Software", "Data", "AI"] },
            { title: "Bedrijfsgrootte", options: ["Small", "Large", "MKB", "SOHO"] },
            { title: "Probleem", options: ["Kosten verlagen", "Opbrengsten verhogen", "Klanten ervaring verbeteren"] },
            { title: "Waarde", options: ["Geld", "Duurzaamheid", "Risico verlagen", "Compliance"] }
        ]
    }

    const initialValuesBody = () => {
        return filterData.reduce((acc, item) => {
            acc[item.title] = { selectedValues: [] }
            return acc;
        }, {})
    }

    useEffect(() => {
        const data = fetchFilterValues();
        setFilterData(data);
    }, []);

    useEffect(() => {
        if (filterData) {
            setFilterValues(initialValuesBody());
        }
    }, [filterData]);

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