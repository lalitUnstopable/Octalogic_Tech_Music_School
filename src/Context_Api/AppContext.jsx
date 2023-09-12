import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
  });

  const loginUser =() =>{
    setState({
        // ...state,
        isAuth:true,
    })
}

const logOutUser =() =>{
    setState({
        // ...state,
        isAuth:false,
        // token:null
    })
}

  return (
    <AppContext.Provider value={{ authState: state,loginUser,logOutUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
