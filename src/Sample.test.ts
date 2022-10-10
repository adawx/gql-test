import { Sample } from './Sample';

describe('Sample Class Test', () => {
  const testObj = new Sample();

  test('add 1 + 2', () => {
    expect(testObj.add(1, 2)).toEqual(3);
  });
});
