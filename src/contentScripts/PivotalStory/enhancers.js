/* @flow */
import { compose, complement, pathEq, path } from 'ramda'
import { branch, renderNothing, renderComponent } from 'recompose'
import withFetch from '../withFetch'
import withAsyncFactory from '../../shared/utils/withAsyncFactory'
import { storage } from '../utils/messages'
import { LOADING } from '../../shared/constants'
import Loading from './Loading'
import Invalid from './Invalid'

export default compose(
  withAsyncFactory(() => storage({ pivotalApiKey: '' }), {
    name: 'storageData',
  }),
  branch(
    complement(pathEq(['storageData', 'loading'], LOADING.SUCCESS)),
    renderNothing
  ),
  withFetch(props => ({
    resources: {
      story: `https://www.pivotaltracker.com/services/v5/stories/${props.storyId}`,
    },
    headers: { 'X-TrackerToken': props.storageData.pivotalApiKey },
  })),
  branch(
    pathEq(['data', 'loading'], LOADING.STARTED),
    renderComponent(Loading)
  ),
  branch(
    pathEq(['data', 'story', 'code'], 'invalid_authentication'),
    renderComponent(Invalid)
  ),
  branch(complement(path(['data', 'story'])), renderNothing)
)
