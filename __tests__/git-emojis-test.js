const ge = require('../src/git-emojis');

test('should return list of matching emojis if given a usage', () => {
  expect(ge('fix').length).toBe(8);
});

test('should return all emojis if not given a usage', () => {
  expect(ge().length).toBe(37);
});

test('should return just an error message if unmatched usage', () => {
  expect(ge('this is not a valid usage').length).toBe(1);
});
