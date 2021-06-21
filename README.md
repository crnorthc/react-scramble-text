# react-scramble-text

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-scramble-text.svg)](https://www.npmjs.com/package/react-scramble-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Demo](https://raw.githubusercontent.com/crnorthc/react-scramble-text/master/src/preview.gif)

## Install

```bash
npm i react-scramble-text
```

## Usage

```jsx
import React, { Component } from 'react'

import TextScrambler from 'react-scramble-text'
import 'react-scramble-text/dist/index.css'

class Example extends Component {
  render() {
    const phrases = ["The way to get started is to", "quit talking", "and", "begin doing", "-Walt Disney"]
    return <TextScrambler phrases={phrases}
                          speed={50}
                          pauseTime={800}/>
  }
}
```

## Props

| Property | Type | Default | Description |
|:--------------|:-------------------|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| `phrases` | list of strings | None | The list of phrases to be used. |
| `speed` | number | 80 | The speed of the symbol alterations in ms. |
| `pauseTime` | number | 1000 | The length of time a phrase is shown before transition to the next. |
| `chars` | string | "!<>-_\\/[]{}—=+*^?#________" | The symbols to be used randomly in phrase transitions. |
| `repetitions` | number | -1 | The number of times the phrases should be shown (default in infinite). |
| `symbolColor` | string | "rgb(143, 143, 143)" | The color of the symbols used in phrase transitions. |

## License

MIT © [crnorthc](https://github.com/crnorthc)
