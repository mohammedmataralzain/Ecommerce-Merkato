import useFilterContext from "../../hooks/useFilterContext"
import { Wrapper } from "./Filters.styles"
import { AiOutlineSearch } from "react-icons/ai";


const Filters = () => {

  const { filters: {text, category}, all_products, updateFilterValue} = useFilterContext();

  // to get all available values in a spacific property
  const getUniqueValue = (data, property) => {
    const categories = data.map((element) => {
      return element[property]
    })
    return ["all", ...new Set(categories)];
  }
  const categories = getUniqueValue(all_products, "category")
  const companies = getUniqueValue(all_products, "company")
  // Testing
  // console.log(companies);

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

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categories.map((element, index) => (
              <button
                key={index}
                type="button"
                name="category"
                value={element}
                className={element === category ? "active": ""}
                onClick={updateFilterValue}
              >
                {element}
              </button>
            ))
          }
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <div>
        <select
          id="company"
          name="company"
          onClick={updateFilterValue}
          className="filter-company-select"
        >
          {
            companies.map((element, index) => (
              <option 
                key={index}
                name="company"
                value={element}
              >{element}</option>
            ))
          }
        </select>
        </div>
      </div>
    </Wrapper>
  )
}

export default Filters