import { createContext, useState } from "react";

// This createContext method returns an object
export const SearchContext = createContext();

// This SearchProvider can take children, meaning to take components within itself
const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    // Wrapper
    const data = { search, setSearch };

    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    );
};

export default SearchProvider;
