import { storyIds } from '../enhancers'

describe('components/App/enhancers', () => {
  describe('storyIds', () => {
    test('it finds the story ids', () => {
      const props = { title: 'Fixes bug [#1234]' }

      expect(storyIds(props)).toEqual(['1234'])
    })

    test('it works with multiple ids', () => {
      const props = {
        title: 'Fixes bug [#1234, #5678, Fixes #9012, Delivers #3456]',
      }

      expect(storyIds(props)).toEqual(['1234', '5678', '9012', '3456'])
    })

    test('it works with no id', () => {
      const props = {
        title: 'Fixes bug',
      }

      expect(storyIds(props)).toEqual([])
    })

    test('it works with no malformed title', () => {
      const props = {
        title: 'Fixes bug [Fixes #]',
      }

      expect(storyIds(props)).toEqual([])
    })
  })
})
