import * as random from '@laufire/utils/random';
import { getRndString } from './helpers';

describe('helpers', () => {
	test('getRndString', () => {
		const rndString = Symbol('rndString');

		jest.spyOn(random, 'rndString').mockReturnValue(rndString);

		const result = getRndString();

		expect(result).toEqual(rndString);
	});
});
