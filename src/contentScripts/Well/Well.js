import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Well.css'

export default function Well(props) {
  return (
    <div className={cx('Well__container', props.className)}>
      {props.children}
    </div>
  )
}
Well.defaultProps = {
  className: undefined,
}
Well.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
