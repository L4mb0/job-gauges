/**
 * @vitest-environment jsdom
 */
import { expect, test, expectTypeOf, describe } from 'vitest';
import { createFileSetting } from '../file';

const testInput = createFileSetting(
	'testInput',
	'This is a test dropdown',
	'TestValue'
);

describe('Library.Controls.createTextSetting()', () => {
	test('Should create an element', () => {
		expect(testInput).toBeTruthy();
	});

	test('Should have a <div> container that is an <HTMLElement>', () => {
		expectTypeOf(testInput).toMatchTypeOf<HTMLElement>();
	});

	test('Should have an <input> that is an <HTMLInputElement>', () => {
		expectTypeOf(
			testInput.querySelector('input')
		).toMatchTypeOf<HTMLInputElement>();
	});

	test('Should be of [type="file"]', () => {
		expect(testInput.querySelector('input').type).toEqual('file');
	});

	test('Should have an input ID that matches `name` parameter', () => {
		expect(testInput.querySelector('input').id).toEqual('testInput');
	});

	test('Should have a label with text matching the `description` parameter', () => {
		expect(testInput.querySelector('label').innerHTML).toEqual(
			'This is a test dropdown'
		);
	});
});
