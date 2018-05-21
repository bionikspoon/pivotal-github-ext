/* @flow */
import * as React from 'react'
import './App.css'
import ChromeContext from '../ChromeContext/ChromeContext'

type Props = { children: React.Node, chrome: Object }

export default function AppContainer(props: Props) {
  return (
    <ChromeContext.Provider value={props.chrome}>
      {props.children}
    </ChromeContext.Provider>
  )
}
