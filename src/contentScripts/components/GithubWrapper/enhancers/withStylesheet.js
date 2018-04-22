/* @flow */
/* eslint-env browser */
import { lifecycle } from 'recompose'

export default href =>
  lifecycle({
    componentDidMount() {
      const { head } = document

      this.link = document.createElement('link')
      this.link.type = 'text/css'
      this.link.rel = 'stylesheet'
      this.link.href = href

      head.appendChild(this.link)
    },
    componentWillUnmount() {
      this.link.remove()
    },
  })
