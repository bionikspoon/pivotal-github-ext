import matchGroup from '..'

describe('utils/matchGroup', () => {
  test('it returns group', () => {
    expect(matchGroup(/(a*)(b*)cd/g, 2, 'aaabbbbcd')).toEqual(['bbbb'])
  })
  test('it returns group', () => {
    expect(matchGroup(/(a*)(b*)cd/g, 1, 'aaabbbbcd')).toEqual(['aaa'])
  })
  test('it returns group', () => {
    expect(matchGroup(/(a*)(b*)cd/g, 0, 'aaabbbbcd')).toEqual(['aaabbbbcd'])
  })
})
