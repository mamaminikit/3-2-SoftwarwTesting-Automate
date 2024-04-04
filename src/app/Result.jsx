import React from 'react'

function Result({ first, second, operator, output}) {
  return (
    <div>
        <h3>Input: {first} {operator} {second}</h3>
        <h3>Summary: {output}</h3>
        <hr />
    </div>
  )
}

export default Result