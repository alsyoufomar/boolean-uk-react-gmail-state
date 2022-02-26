import React from 'react'
import { useState } from 'react'
import initialEmails from '../data/emails'

export default function email (props) {
  let [initEmails, setEmails] = useState(initialEmails)

  const toggleRead = (email) => {
    setEmails((x) => {
      const ele = x.map(c => c === email ? { ...email, read: !email.read } : c)
      // myState = ele
      return ele
    })
  }

  const toggleStar = (email) => {
    setEmails((x) => {
      const ele = x.map(c => c === email ? { ...email, starred: !email.starred } : c)
      // myState = ele
      return ele
    })
  }

  return (
    <li key={ props.email.id } className="email">
      <div className="select">
        <input
          onChange={ () => toggleRead(props.email) }
          className="select-checkbox"
          type="checkbox" />
      </div>
      <div className="star">
        <input
          onChange={ () => toggleStar(props.email) }
          className="star-checkbox"
          type="checkbox"
        />
      </div>
      <div className="sender">{ props.email.sender }</div>
      <div className="title">{ props.email.title }</div>
    </li>
  )
}
