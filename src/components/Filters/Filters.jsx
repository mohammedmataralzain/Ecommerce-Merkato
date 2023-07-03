import FormatPrice from "../../Helpers/FormatPrice";
import useFilterContext from "../../hooks/useFilterContext";
import { Wrapper } from "./Filters.styles";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "../../styles/Button";

const Filters = () => {
  const {
    filters: { text, category, maxPrice, price },
    all_products,
    updateFilterValue,
    clearFilters
  } = useFilterContext();

  // to get all available values in a spacific property
  const getUniqueValue = (data, property) => {
    let newVal = data.map((element) => {
      return element[property];
    });
    if (property == "colors") {
      // eslint-disable-next-line no-const-assign
      return newVal = ([...new Set(newVal.flat())]);
    } else {
      // eslint-disable-next-line no-const-assign
      return (newVal = ["all", ...new Set(newVal)]);
    }
  };
  const categories = getUniqueValue(all_products, "category");
  const companies = getUniqueValue(all_products, "company");
  const colors = getUniqueValue(all_products, "colors");
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
            <AiOutlineSearch className="icon" />
          </div>
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categories.map((element, index) => (
            <button
              key={index}
              type="button"
              name="category"
              value={element}
              className={element === category ? "active" : ""}
              onClick={updateFilterValue}
            >
              {element}
            </button>
          ))}
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
            {companies.map((element, index) => (
              <option key={index} name="company" value={element}>
                {element}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="filter-colors">
        <h3>Colors</h3>
          {colors.map((element, index) => (
            <button
              key={index}
              type="button"
              name="color"
              value={element}
              onClick={updateFilterValue}
              style={{backgroundColor:element}}
            >
            </button>))}
            
      </div>
      <div className="filter-price">
        <h3>price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          value={price}
          min={0}
          max={maxPrice}
          onChange={updateFilterValue}
        />
      </div>
      <div>
        <Button onClick={clearFilters}>Clear Filters</Button>
      </div>
    </Wrapper>
  );
};

export default Filters;
