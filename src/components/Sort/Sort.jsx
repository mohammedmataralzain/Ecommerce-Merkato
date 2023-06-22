import { BsFillGridFill, BsList } from "react-icons/bs";
import { Wrapper } from "./Sort.styles";
import useFilterContext from "../../hooks/useFilterContext";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView } = useFilterContext();

  return (
    <Wrapper className="container">
      <div className="grid-list-toggle">
        <button
          className={grid_view ? "active view_btn" : "view_btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={grid_view ? "view_btn" : "active view_btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>

      <div className="product-info">
        {
          `${filter_products.length} product avilable`
        }
      </div>

      <div className="sort-selection">
        <select name="sort" id="sort">
          <option value="lowest">Price(lowers)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">Price(a-z)</option>
          <option value="z-a">Price(z-a)</option>
        </select>
      </div>
    </Wrapper>
  );
};

export default Sort;
