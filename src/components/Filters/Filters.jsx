import useFilterContext from "../../hooks/useFilterContext"
import { Wrapper } from "./Filters.styles"
import { AiOutlineSearch } from "react-icons/ai";


const Filters = () => {

  const { filters: {text}, updateFilterValue} = useFilterContext();

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            name="text"
            value={text}
            placeholder="Search"
            onChange={updateFilterValue}
          />
          <div className="search-icon">
            <AiOutlineSearch className="icon"/>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

export default Filters