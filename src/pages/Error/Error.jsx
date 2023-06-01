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
    <h3>UH OH! You're lost..</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
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