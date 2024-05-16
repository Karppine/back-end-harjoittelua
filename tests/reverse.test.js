const r = require('../utils/for_testing')


test('reverse of a', () => {
  const result = r.reverse('a')

  expect(result).toBe('a')
})

test('reverse of react', () => {
  const result = r.reverse('react')

  expect(result).toBe('tcaer')
})

test('reverse of saippuakauppias', () => {
  const result = r.reverse('saippuakauppias')

  expect(result).toBe('saippuakauppias')
})