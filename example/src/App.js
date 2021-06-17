import React from 'react'

import TextScrambler from 'react-scramble-text'
import 'react-scramble-text/dist/index.css'

const App = () => {
  const phrases = ["The way to get started is to", "quit talking", "and", "begin doing", "-Walt Disney"]
  return (
    <div className="cont">
      <div className="scrambled">
        <TextScrambler className="example" phrases={phrases}
          darkTheme={false}
          speed={50}
          pauseTime={800} />
      </div>
    </div>

  )
}

export default App
