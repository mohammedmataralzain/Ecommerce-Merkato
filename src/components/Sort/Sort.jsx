import { BsFillGridFill, BsList } from "react-icons/bs";
import { Wrapper } from "./Sort.styles";
import useFilterContext from "../../hooks/useFilterContext";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext();

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
        <form action="#">
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Product(a-z)</option>
            <option value="z-a">Product(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

export default Sort;
