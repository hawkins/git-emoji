const git_emojis = require('../src/git-emojis')

test('should return list of matching emojis if given a usage', () => {
  expect(git_emojis('fix').length).toBe(8)
})

test('should return all emojis if not given a usage', () => {
  expect(git_emojis().length).toBe(37)
})

test('should return just an error message if unmatched usage', () => {
  expect(git_emojis('this is not a valid usage').length).toBe(1)
})
