import { vastErrorCode } from '../src';

describe('vastErrorCode', () => {
    test('returns 101', () => {
        expect(vastErrorCode.PARSING_ERROR).toEqual(100);
    });
});
