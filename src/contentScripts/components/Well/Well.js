/* @flow */
import * as React from 'react'
import cx from 'classnames'
import './Well.css'

type Props = {
  className?: string,
  children: React.Node,
}

export default function Well(props: Props) {
  return (
    <div className={cx('Well__container', props.className)}>
      {props.children}
    </div>
  )
}
Well.defaultProps = {
  className: undefined,
}
