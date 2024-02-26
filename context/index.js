const { createContext, useContext } = require("react");

const Appcontext = createContext();

export default function useAppontext(){
    return useContext(Appcontext);
};

export {Appcontext};