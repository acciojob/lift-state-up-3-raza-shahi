import React from 'react'

const ChildComponent1 = ({ handleOptionChange }) => {
  return (
    <div className='component1'>
        <h2>ChildComponent1</h2>
        <button onClick={() => handleOptionChange("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildComponent1