import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext(null);

export default function AppProvider(props) {
    const [userOk, setUserOk] = useState(false);

    return (
        <AppContext.Provider
            value={{
                userOk,
                setUserOk,
            }}>
            {props.children}
        </AppContext.Provider>
    );
}
