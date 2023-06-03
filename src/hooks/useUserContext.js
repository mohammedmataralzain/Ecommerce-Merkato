import { useContext } from "react"
import { AppContext } from "../context/userContext"


const useUserContext = () => {
  return useContext(AppContext)
}

export default useUserContext