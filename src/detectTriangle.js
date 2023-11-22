/* eslint-disable no-unused-vars */
const detectTriangle = (sideA, sideB, sideC) => {
};

describe('Detect the triangle', () => {
  it('Should fail if the sides are less than 1', () => {
    expect(() => detectTriangle(-1, 2, 2)).toThrowError('Strange Triangle');
  });
});
