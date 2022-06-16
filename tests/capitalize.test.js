import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

assert(capitalize('') === '');
assert(capitalize('hello') === 'Hello');

assert.equal(capitalize(''), ' ');
assert.equal(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены!');
