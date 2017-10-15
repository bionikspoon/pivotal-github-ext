import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './PivotalLogo.css'

export default function PivotalLogo(props) {
  return (
    <span className={cx('PivotalLogo__container', props.className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M94.011 58.846l28.554 49.452a20.474 20.474 0 0 1 13.981 1.247l15.011-25.998-25.09-43.446-32.75 18.913h.002l.292-.168zm-43.044 63.972h57.12a20.416 20.416 0 0 1 2.032-4.965 20.37 20.37 0 0 1 6.022-6.545l-15.008-25.99H50.952v37.823h.015v-.323zm94.666 15.54a20.386 20.386 0 0 1-6.01 6.535l15.02 26.012h50.167V133.41h-57.142a20.844 20.844 0 0 1-2.035 4.949zm-3.279-24.743a20.463 20.463 0 0 1 5.94 12.73h30.011l25.09-43.448-32.47-18.752-28.57 49.47zm-57.522 78.468l28.57-49.491a20.586 20.586 0 0 1-5.934-12.707H77.441l-25.09 43.427 32.742 18.926-.261-.155zm76.921 5.285l-28.548-49.454a20.363 20.363 0 0 1-13.99-1.239L104.2 172.681l25.075 43.435 32.752-18.905-.274.157z"
          fill="#ffffff"
        />
        <path
          d="M127.889.233C57.372.233 0 57.59 0 128.096 0 198.622 57.372 256 127.889 256c70.511 0 127.87-57.378 127.87-127.904C255.76 57.59 198.4.233 127.89.233zm0 25.89c56.32 0 101.976 45.65 101.976 101.973 0 56.338-45.656 102.012-101.976 102.012-56.328 0-101.992-45.674-101.992-102.012 0-56.323 45.664-101.974 101.992-101.974z"
          fill="#ffffff"
        />
      </svg>
    </span>
  )
}
PivotalLogo.defaultProps = {
  className: undefined,
}
PivotalLogo.propTypes = {
  className: PropTypes.string,
}