/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

function TextScrambler(props) {
  const [message, setMessage] = useState(props.phrases[0])
  const [nextMessage, setNextMessage] = useState(props.phrases[1])
  const [count, setCount] = useState(0)
  const [speed, setSpeed] = useState(80)
  const [time, setTime] = useState(1000)
  const [pauseTime, setPauseTime] = useState(1000)
  const [steps, setSteps] = useState([false, false, false])
  const [phrases, setPhrases] = useState()
  const chars = '!<>-_\\/[]{}—=+*^?#________'



  function swapLetters() {
    const char = chars[Math.floor(Math.random() * chars.length)]
    while (true) {
      const index = Math.floor(Math.random() * message.length)
      if (!chars.includes(message[index])) {
        setMessage(
          message.substring(0, index) +
          char +
          message.substring(index + 1)
        )
        break
      }
    }
  }

  function swapSymbols() {
    while (true) {
      const index = Math.floor(Math.random() * message.length)
      if (chars.includes(message[index])) {
        setMessage(
          message.substring(0, index) +
          nextMessage[index] +
          message.substring(index + 1)
        )
        break
      }
    }
  }

  function removeSymbols() {
    const index = Math.floor(Math.random() * message.length)
    setMessage(message.substring(0, index) + message.substring(index + 1))
  }

  function addSymbols() {
    const char = chars[Math.floor(Math.random() * chars.length)]
    const index = Math.floor(Math.random() * message.length)
    if (index !== 0) {
      setMessage(message.substring(0, index) + char + message.substring(index))
    } else {
      setMessage(char + message.substring(0))
    }
  }

  function stepOne(item) {
    for (let i = 0; i < item.length; i++) {
      if (!chars.includes(item[i])) {
        swapLetters()
        return 1
      }
    }
    return 0
  }

  function stepThree(item) {
    for (let i = 0; i < item.length; i++) {
      if (chars.includes(item[i])) {
        swapSymbols()
        break
      }
    }
  }

  function nextWord(index, word) {
    setCount(index)
    setNextMessage(phrases[word])
    setSteps([false, false, false])
  }

  useEffect(() => {
    if (props.speed !== undefined) {
      setSpeed(props.speed)
    }
    if (props.pauseTime !== undefined) {
      setPauseTime(props.pauseTime)
    }
    if (props.phrases !== undefined) {
      setPhrases(props.phrases)
    } else {
      return <div>phrases missing/incomplete/incorrect format</div>
    }

    const interval = setInterval(() => {
      setTime(speed)

      if (message !== nextMessage) {
        if (!steps[0]) {
          if (stepOne(message) === 0) {
            setSteps([true, false, false])
          }
        }

        if (steps[0] && !steps[1]) {
          if (message.length > nextMessage.length) {
            removeSymbols()
          }
          if (message.length < nextMessage.length) {
            addSymbols()
          }
          if (message.length === nextMessage.length) {
            setSteps([true, true, false])
          }
        }

        if (steps[1] && !steps[2]) {
          stepThree(message)
        }
      } else {
        setTime(pauseTime)
        if (count === phrases.length - 2) {
          nextWord(phrases.length - 1, 0)
        }
        if (count === phrases.length - 1) {
          nextWord(0, 1)
        }
        if (count < phrases.length - 2) {
          nextWord(count + 1, count + 2)
        }
      }
    }, time)
    return () => clearInterval(interval)
  })

  const JSXify = (item) => {
    if (message != null) {
      var jsx = []
      for (let i = 0; i < item.length; i++) {
        if (chars.includes(item[i])) {
          jsx.push(<span className={styles.symbol}>{item[i]}</span>)
        } else {
          jsx.push(<span>{item[i]}</span>)
        }
      }
      return jsx
    }
  }
  if (props.darkTheme) {
    return <div className={styles.darkTheme}>{JSXify(message)}</div>
  }
  else {
    return <div className={styles.normalTheme}>{JSXify(message)}</div>
  }

}

export default TextScrambler
