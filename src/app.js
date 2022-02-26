import Header from './components/header'
import { useState } from 'react'
import initialEmails from './data/emails'
import Email from './components/email'
import './styles/app.css'
let test2
function App () {
  // Use initialEmails for state
  let [initEmails, setEmails] = useState(initialEmails)

  const getReadEmails = (e) => {
    setEmails((x) => {
      if (e.target.checked) {
        const ele = x.filter(c => c.read === true)
        return ele
      } else {
        return test2
      }

    })
  }

  const test = initEmails.map((email) => {
    return (
      <Email
        email={ email }
      />
    )
  })

  test2 = test

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              onChange={ getReadEmails }
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          { test }
        </ul>
      </main>
    </div>
  )
}

export default App
