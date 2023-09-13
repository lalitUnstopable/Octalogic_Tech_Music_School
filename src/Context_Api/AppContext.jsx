import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: true,
  });

  const loginUser =() =>{
    setState({
        isAuth:true,
    })
}

const logOutUser =() =>{
    setState({
        isAuth:false,
    })
}

  return (
    <AppContext.Provider value={{ authState: state,loginUser,logOutUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
