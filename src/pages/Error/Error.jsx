import { NavLink } from "react-router-dom"
import { StyleError } from "./styled"
import { Button } from "../../styles/Button"

const Error = () => {
  return (
    <StyleError>
    <section>
      <span className="four">
        <span className="screen-reader-text">4</span>
      </span>
      <span className="zero">
        <span className="screen-reader-text">0</span>
      </span>
      <span className="four">
        <span className="screen-reader-text">4</span>
      </span>
    </section>
    <div className="link-container">

      <NavLink to="/">
      <Button>

        Go To Home
      </Button>
      </NavLink>
    </div>
  </StyleError>
  )
}

export default Error