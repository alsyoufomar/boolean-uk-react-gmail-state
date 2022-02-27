import React from 'react'

export default function email (props) {

  return (
    <li className="email">
      <div className="select">
        <input
          onChange={ props.read }
          className="select-checkbox"
          type="checkbox" />
      </div>
      <div className="star">
        <input
          onChange={ props.star }
          className="star-checkbox"
          type="checkbox"
        />
      </div>
      <div className="sender">{ props.email.sender }</div>
      <div className="title">{ props.email.title }</div>
    </li>
  )
}
