import { createContext, useEffect, useReducer } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import reducer, { initialState } from "../reducer/userReducer";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
    
    const[state,dispatch] = useReducer(reducer,initialState);

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              dispatch(
                {type: "LOGIN", payload: {email: user.email}}
              )
            }
      
            else {
              dispatch({type: "LOGOUT"})
            }
        })

        return subscribe;
    },[])
    
  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>

  );
};

export { AppContext, AppProvider };
