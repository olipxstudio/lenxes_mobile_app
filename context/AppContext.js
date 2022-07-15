import { useState, useEffect, createContext } from "react";
import { useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    //   register user function
    const registerUser = async (user) => {
        alert(`${user?.name} is registered`);
    };

    return (
        <AppContext.Provider
            value={{
            loading,
            registerUser,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// useAppContext
export const useAppContext = () => useContext(AppContext);

export default AppContext;
