import React from 'react'

function Title({ title, descrip}) {
  return (
    <div>
        <h2>{title}</h2>
        <h3>{descrip}</h3>
        <hr />
    </div>
  )
}

export default Title