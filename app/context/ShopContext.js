'use client'
import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [searchParams, setSearchParams] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [data, setData] = useState([]);

    const handleSearchParamsChange = (value) => {
        setSearchParams(value);
    };

    const handleSortByChange = (value) => {
        setSortBy(value);
    };

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const fetchData = async () => {
        const { data, error, isLoading } = useSWR(
            `http://localhost:3000/items?${searchParams}&sort=${sortBy}`,
            fetcher
        )
        const items = await data.json();
        setData(items);
    };

    const contextValue = {
        searchParams,
        sortBy,
        data,
        handleSearchParamsChange,
        handleSortByChange,
        fetchData,
    };

    // Fetch data initially or whenever searchParams and sortBy change
    useEffect(() => {
        fetchData();
    }, [searchParams, sortBy]);

    // Provide the context value to the children components
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};
