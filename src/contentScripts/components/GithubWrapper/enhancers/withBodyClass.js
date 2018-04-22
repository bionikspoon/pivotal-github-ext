/* @flow */
/* eslint-env browser */
import { lifecycle } from 'recompose'

export default classes =>
  lifecycle({
    componentDidMount() {
      const { body } = document

      body.classList.add(...classes.split(' '))
    },
    componentWillUnmount() {
      const { body } = document

      body.classList.remove(...classes.split(' '))
    },
  })
