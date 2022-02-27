// hello there! enjoy scanning (just wanted to say hi)

import Header from './components/header'
import { useState } from 'react'
import initialEmails from './data/emails'
import Email from './components/email'
import './styles/app.css'
let test2
function App () {
  // Use initialEmails for state
  let [initEmails, setEmails] = useState(initialEmails)


  const toggleRead = (email) => {
    setEmails(x => x.map(c => c === email ? { ...email, read: !email.read } : c))
  }

  const toggleStar = (email) => {
    setEmails(x => x.map(c => c === email ? { ...email, starred: !email.starred } : c))
  }

  const getReadEmails = (e) => {
    test2 = e.target.checked
    setEmails([...initEmails])
  }

  const getStarredEmails = (e) => {
    setEmails(x => {
      return x.filter(c => c.starred === true)
    })
    console.log(e)
  }

  const getInbox = () => {
    setEmails(x => {
      return [...x]
    })
  }
  const runEmail = initEmails.map((email) => {

    return (

      (!test2 || !email.read) &&
      <Email
        key={ email.id }
        star={ () => toggleStar(email) }
        read={ () => toggleRead(email) }
        email={ email }
      />
    )
  })

  // test2 = runEmail

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            onClick={ getInbox }
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            onClick={ getStarredEmails }
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
          { runEmail }
        </ul>
      </main>
    </div>
  )
}

export default App

