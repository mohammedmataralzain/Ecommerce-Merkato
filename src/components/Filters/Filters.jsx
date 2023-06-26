import useFilterContext from "../../hooks/useFilterContext"
import { Wrapper } from "./Filters.styles"
import { AiOutlineSearch } from "react-icons/ai";


const Filters = () => {

  const { filters: {text, category}, all_products, updateFilterValue} = useFilterContext();

  // to get all available values in a spacific property
  const getUniqValue = (data, property) => {
    const categorys = data.map((element) => {
      return element[property]
    })
    return ["all", ...new Set(categorys)];
  }
  const categorys = getUniqValue(all_products, "category")
  console.log(categorys);

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
            categorys.map((element, index) => (
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
    </Wrapper>
  )
}

export default Filters