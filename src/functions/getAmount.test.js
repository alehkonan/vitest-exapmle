import { assert, describe, it } from 'vitest';
import { formatMoney } from './getAmmount';

describe('get amount function test', () => {
  it('should return currency', () => {
    const result = formatMoney(1000);

    assert.equal(result, '$10.00');
  });
});
