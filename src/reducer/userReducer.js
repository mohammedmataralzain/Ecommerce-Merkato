
export const initialState = {
    email: "oday"
}

const userReducer = (state, action) => {
  switch(action.type){
    case "LOGIN":
      return {
        ...state,
        email: action.peyload.email,
      }

    case "LOGOUT":
      return {}
  }
}

export default userReducer;
  
    