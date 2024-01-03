import { Solution } from "./2. GCD of two string";

describe('Solution2', () => {
  const solution = new Solution();

  describe('gcdOfStrings', () => {
    it('should return the correct result', () => {
      expect(solution.gcdOfStrings('ABCABC', 'ABC')).toBe('ABC');
      expect(solution.gcdOfStrings('ABABAB', 'ABAB')).toBe('AB');
      expect(solution.gcdOfStrings('LEET', 'CODE')).toBe('');
      expect(solution.gcdOfStrings('AA', 'A')).toBe('A');

    });
  });

  describe('gcd', () => {
    it('should return the correct result', () => {
      expect(solution.gcd(10, 5)).toBe(5);
      expect(solution.gcd(14, 21)).toBe(7);
      expect(solution.gcd(24, 36)).toBe(12);
    });
  });
});