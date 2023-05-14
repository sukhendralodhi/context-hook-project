import { createContext } from "react";

const GlobalContext = createContext();

const AppContext = () => {
    return (
        <div>
            <h1>Context Hook</h1>
        </div>
    );
}
export default AppContext;