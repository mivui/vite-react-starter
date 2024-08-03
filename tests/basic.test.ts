import { expect, test } from 'vitest';

function apples() {
  return null;
}

test('we dont have apples', () => {
  expect(apples()).toBeNull();
});
