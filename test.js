import test from 'ava';
import m from '.';

test('result should be a number', async t => {
	t.is(typeof await m('ava', {period: 'week'}), 'number');
});

test('package not found', async t => {
	await t.throws(m('elephants', {period: 'week'}));
});

test('wrong period', async t => {
	await t.throws(m('ava', {period: 'weeks'}));
});
