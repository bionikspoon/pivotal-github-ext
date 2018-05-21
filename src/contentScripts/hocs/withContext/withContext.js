import React from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

const withContext = (Consumer, propName) => BaseComponent => {
  const factory = React.createFactory(BaseComponent)

  function WithContext(props) {
    return (
      <Consumer>
        {context => factory({ ...props, [propName]: context })}
      </Consumer>
    )
  }

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'withContext'))(
      WithContext
    )
  }
  return WithContext
}

export default withContext
