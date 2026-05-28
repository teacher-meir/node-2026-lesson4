import { expect, test } from 'vitest';
import { sum } from './calc.js';

test('sum of 1, 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('send one parameter equal iteslf', () => {
  expect(sum(10)).toBe(10);
});