/* @flow */
/* global SyntheticEvent, HTMLInputElement */

import { branch, renderNothing, withHandlers, withState } from 'recompose'
import { compose, pathEq, complement } from 'ramda'
import { LOADING } from '../../shared/constants'
import withAsyncFactory from '../../shared/utils/withAsyncFactory'
import * as storage from '../../shared/utils/storage'

const onSubmit = ({ form, setForm }) => (
  event: SyntheticEvent<HTMLInputElement>
) => {
  const { pivotalApiKey } = form
  event.preventDefault()
  storage
    .set({ pivotalApiKey })
    .then(() => setForm({ ...form, touched: false }))
}

const onInputChange = ({ form, setForm }) => (key: string) => (
  event: SyntheticEvent<HTMLInputElement>
) => setForm({ ...form, touched: true, [key]: event.currentTarget.value })

export default compose(
  withAsyncFactory(() => storage.get({ pivotalApiKey: '' })),
  branch(
    complement(pathEq(['data', 'loading'], LOADING.SUCCESS)),
    renderNothing
  ),
  withState('form', 'setForm', ({ data: { pivotalApiKey } }) => ({
    pivotalApiKey,
    touched: false,
  })),
  withHandlers({ onSubmit, onInputChange })
)
