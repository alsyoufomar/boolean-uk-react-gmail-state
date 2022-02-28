// hello there! enjoy scanning (just wanted to say hi)

import Header from './components/header'
import { useState } from 'react'
import initialEmails from './data/emails'
import Email from './components/email'
import './styles/app.css'
function App () {
  // Use initialEmails for state
  const [initEmails, setEmails] = useState(initialEmails)
  const [showRead, setRead] = useState(true)
  const [showStarred, setStarred] = useState(true)

  const toggleRead = (email) => {
    setEmails(x => x.map(c => c === email ? { ...email, read: !email.read } : c))
  }

  const toggleStar = (email) => {
    setEmails(x => x.map(c => c === email ? { ...email, starred: !email.starred } : c))
  }

  const starredEmails = initEmails.filter(c => c.starred)
  const runEmail = initEmails.map((email) => {
    return (
      (showStarred || email.starred) &&
      (!showRead || !email.read) &&
      <Email
        key={ email.id }
        toggleStar={ toggleStar }
        toggleRead={ toggleRead }
        email={ email }
      />
    )
  })


  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            onClick={ e => setStarred(true) }
          >
            <span className="label">Inbox</span>
            <span className="count">{ initEmails.length }</span>
          </li>
          <li
            className="item"
            onClick={ e => setStarred(false) }
          >
            <span className="label">Starred</span>
            <span className="count">{ starredEmails.length }</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              onChange={ e => setRead(e.target.checked) }
              checked={ showRead }
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          { runEmail }
        </ul>
      </main>
    </div>
  )
}

export default App

