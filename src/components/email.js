import React from 'react'

export default function email (props) {
  return (
    <li className="email">
      <div className="select">
        <input
          onChange={ () => props.toggleRead(props.email) }
          className="select-checkbox"
          type="checkbox"
          checked={ props.email.read }
        />
      </div>
      <div className="star">
        <input
          onChange={ () => props.toggleStar(props.email) }
          className="star-checkbox"
          type="checkbox"
          checked={ props.email.starred }
        />
      </div>
      <div className="sender">{ props.email.sender }</div>
      <div className="title">{ props.email.title }</div>
    </li>
  )
}
