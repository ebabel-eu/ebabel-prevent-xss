const preventXss = require('../index');

test('preventXss transforms <script></script> tags into plain text', () => {
  const safe = '&lt;script&gt;&lt;/script&gt;';

  const result = preventXss('<script></script>');
  expect(result).toBe(safe);
});
