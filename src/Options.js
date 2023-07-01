import React from 'react'

export default function Options(props) {

  const ops = ['Yes', 'Probably Not'];

  return (
    <div className="option">
        <ul>
          {ops.map((elem) => {
            return <li onClick={props.change}>{elem}</li>
          })}
        </ul>
    </div>
  )
}
