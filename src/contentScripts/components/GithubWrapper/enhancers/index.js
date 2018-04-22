/* @flow */
import { compose } from 'ramda'
import withStylesheet from './withStylesheet'
import withBodyClass from './withBodyClass'

export default compose(
  withStylesheet(
    'https://assets-cdn.github.com/assets/frameworks-592c4aa40e940d1b0607a3cf272916ff.css'
  ),
  withStylesheet(
    'https://assets-cdn.github.com/assets/github-fdbbae74da4136fd4258a92eb943be60.css'
  ),
  withStylesheet(
    'https://assets-cdn.github.com/assets/site-348211d27070b0d7bb5d31b1ac3d265b.css'
  ),
  withBodyClass('logged-out env-production emoji-size-boost')
)
