import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

function Home(props) {
  return (
    <div>
      yep
      <Slider />
    </div>
  )
}

ReactDOM.render(
  React.createElement(Home, window.props),
  window.reactMount,
)
