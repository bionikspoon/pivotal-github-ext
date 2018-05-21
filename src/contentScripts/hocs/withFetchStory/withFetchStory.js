import { compose } from 'ramda'

import ChromeContext from '../../components/ChromeContext/ChromeContext'
import withContext from '../withContext'
import withAsyncFactory from '../../../shared/utils/withAsyncFactory'
import { fetchStory } from '../../utils/messages'

export default compose(
  withContext(ChromeContext, 'chrome'),
  withAsyncFactory((...args) => {
    console.log('...args', ...args)
    return fetchStory(...args)
  })
)
