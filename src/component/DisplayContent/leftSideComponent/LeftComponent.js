import React from 'react'
import "./LeftComponent.css"

function LeftComponent() {
  return (
    <div className='leftsize_main'>
      <div className='leftside_header'>
        Brand
      </div>
      <div className='leftside_brandname'>
        <label className='brandname'>
            <input type="checkbox" value="Apple"/>Apple
        </label>
        <label className='brandname'>
            <input type="checkbox" value="Samsung"/>Samsung
        </label>
        <label className='brandname'>
            <input type="checkbox" value="Mi"/>Mi
        </label>
      </div>
    </div>
  )
}

export default LeftComponent
