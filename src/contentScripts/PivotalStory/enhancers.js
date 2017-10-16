/* @flow */
import { compose } from 'ramda'
import withFetch from '../withFetch'
import { PIVOTAL_ACCESS_TOKEN } from '../constants'

export default compose(
  withFetch(props => ({
    id: 'story',
    url: `https://www.pivotaltracker.com/services/v5/stories/${props.storyId}`,
    headers: { 'X-TrackerToken': PIVOTAL_ACCESS_TOKEN },
  }))
)
