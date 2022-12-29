

const Buttons = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn">
      {text}
    </button>
  )
}

Buttons.defaultProps = {
  color: 'steelblue'
}



export default Buttons