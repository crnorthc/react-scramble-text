# react-scramble-text

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-scramble-text.svg)](https://www.npmjs.com/package/react-scramble-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Demo](https://raw.githubusercontent.com/crnorthc/react-scramble-text/master/src/preview.gif)

## Install

```bash
npm install --save react-scramble-text
```

## Usage

```jsx
import React, { Component } from 'react'

import TextScrambler from 'react-scramble-text'
import 'react-scramble-text/dist/index.css'

class Example extends Component {
  render() {
    const phrases = ["Hello", "Welcome to my Page!", "Enjoy your visit!"]
    return <TextScrambler phrases={phrases
                          darkTheme={false}
                          speed={50}
                          pauseTime={800}}/>
  }
}
```

## License

MIT © [crnorthc](https://github.com/crnorthc)
