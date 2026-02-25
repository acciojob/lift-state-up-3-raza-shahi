import React from 'react'

const ChildComponent2 = ({ handleOptionChange }) => {
  return (
    <div className='component2'>
        <h2>ChildComponent2</h2>
        <button onClick={() => handleOptionChange("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildComponent2