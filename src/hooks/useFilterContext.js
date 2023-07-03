import { useContext } from "react";
import { FilterContext } from "../context/filterContext";

const useFilterContext = () => {
    return useContext(FilterContext);
}

export default useFilterContext;