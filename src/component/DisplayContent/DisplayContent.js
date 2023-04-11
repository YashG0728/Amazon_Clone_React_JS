import React from 'react'
import "./DisplayContent.css"
import LeftComponent from './leftSideComponent/LeftComponent'
import RightComponent from './rightSideComponent/RightComponent'

function DisplayContent() {
  return (
    <div style={{display:"flex"}}>
      <div>
        <LeftComponent/>
      </div>
      <div>
        <RightComponent/>
      </div>
    </div>
  )
}

export default DisplayContent
