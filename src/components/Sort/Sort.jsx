import { BsFillGridFill, BsList } from "react-icons/bs";
import { Wrapper } from "./Sort.styles"
import useFilterContext from "../../hooks/useFilterContext";

const Sort = () => {
  const {grid_view, setGridView, setListView} = useFilterContext();

  return (
    <Wrapper>
      <div className="grid-list-toggle">
        <button className={ grid_view ? "active view_btn" : "view_btn"} onClick={setGridView}>
          <BsFillGridFill className="icon"/>
        </button>

        <button className={ grid_view ? "active view_btn" : "view_btn"} onClick={setListView}>
          <BsList className="icon"/>
        </button>
      </div>
    </Wrapper>
  )
}

export default Sort