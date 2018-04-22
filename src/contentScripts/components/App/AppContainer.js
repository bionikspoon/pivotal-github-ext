/* @flow */
import * as React from 'react'
import './App.css'

type Props = { children: React.Node }

export default function AppContainer(props: Props) {
  return <div className="App__container clearfix">{props.children}</div>
}
