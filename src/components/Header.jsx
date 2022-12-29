import Buttons from "./Buttons"
import { useLocation } from "react-router-dom"

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && <Buttons
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />}
    </header>
  )
}

export default Header

