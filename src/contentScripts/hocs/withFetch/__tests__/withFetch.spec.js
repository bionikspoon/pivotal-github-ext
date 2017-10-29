import { withDefaults } from '../withFetch'

describe('hocs/withFetch', () => {
  describe('withDefaults', () => {
    test('it adds default props', () => {
      const props = {
        storyId: '7',
      }

      const optionsFromProps = ({ storyId }) => ({
        resources: {
          stories: `http://api.pivotaltrackers.com/stories/${storyId}`,
        },
      })

      expect(withDefaults(optionsFromProps)(props)).toEqual({
        headers: {},
        resources: { stories: 'http://api.pivotaltrackers.com/stories/7' },
      })
    })
  })
})
