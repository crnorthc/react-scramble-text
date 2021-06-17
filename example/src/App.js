import React from 'react'

import TextScrambler from 'react-scramble-text'
import 'react-scramble-text/dist/index.css'

const App = () => {
  const phrases = ["Hello", "My name is", "Caleb Northcott", "and I am", "Sick of this shit"]
  return <TextScrambler phrases={phrases}
    darkTheme={false} />
}

export default App
