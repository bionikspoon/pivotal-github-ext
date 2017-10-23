/* @flow */
import * as React from 'react'
import './App.css'

type Props = {
  form: { pivotalApiKey: string, touched: string },
  onInputChange: string => (SyntheticEvent<HTMLInputElement>) => void,
  onSubmit: (SyntheticEvent<HTMLInputElement>) => void,
}

export default function App(props: Props) {
  return (
    <div className="App__container">
      <form className="App__form" onSubmit={props.onSubmit}>
        <label className="App__form__group" htmlFor="pivotalApiKey">
          <span>Pivotal API key:</span>
          <input
            type="text"
            id="pivotalApiKey"
            className="App__form__input"
            value={props.form.pivotalApiKey}
            onChange={props.onInputChange('pivotalApiKey')}
            required
          />
        </label>
        <div className="App__form__actions">
          <span className="App__saved">
            {props.form.touched ? null : 'saved'}
          </span>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}
