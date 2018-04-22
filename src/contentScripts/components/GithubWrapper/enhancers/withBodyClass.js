/* @flow */
/* eslint-env browser */
import { lifecycle } from 'recompose'

export default (classes: string) =>
  lifecycle({
    componentDidMount() {
      const { body } = document

      if (body === null) {
        return
      }

      body.classList.add(...classes.split(' '))
    },
    componentWillUnmount() {
      const { body } = document

      if (body === null) {
        return
      }

      body.classList.remove(...classes.split(' '))
    },
  })
