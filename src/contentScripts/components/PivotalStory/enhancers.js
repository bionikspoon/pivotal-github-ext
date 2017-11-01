/* @flow */
import {
  applySpec,
  complement,
  compose,
  path,
  pathEq,
  pathOr,
  pipe,
  replace,
} from 'ramda'
import { branch, renderNothing, renderComponent, mapProps } from 'recompose'
import withFetch from '../../hocs/withFetch'
import withAsyncFactory from '../../../shared/utils/withAsyncFactory'
import { storage } from '../../utils/messages'
import { LOADING } from '../../../shared/constants'
import Loading from './Loading'
import Invalid from './Invalid'

const reUrl = /([^[(])(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}[-a-zA-Z0-9@:%_+.~#?&//=]*)([^\])])/g
const formatLinks = replace(reUrl, '$1[$2]($2)$3')

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
  branch(path(['data', 'story', 'code', 'length']), renderComponent(Invalid)),
  branch(complement(path(['data', 'story'])), renderNothing),
  mapProps(
    applySpec({
      storyType: path(['data', 'story', 'story_type']),
      storyId: path(['data', 'story', 'id']),
      storyName: path(['data', 'story', 'name']),
      storyDescription: pipe(
        pathOr('', ['data', 'story', 'desciption']),
        formatLinks
      ),
    })
  )
)
