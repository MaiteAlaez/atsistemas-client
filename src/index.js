import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import './index.module.scss'

import Root from 'components/Root/Root'

const rootElement = document.getElementById('root')

render(
  <StrictMode>
      <Root />
  </StrictMode>,
  rootElement
)
