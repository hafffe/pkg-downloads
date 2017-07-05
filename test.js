import test from 'ava';
import m from './';

test('result should be a number', async t => {
	t.is(typeof await m('ava', {period: 'week'}), 'number');
});

test('package not found', async t => {
	await t.throws(m('avaasjdaskd', {period: 'week'}), `Module doesn't exist`);
});

test('other error', async t => {
	await t.throws(m('ava', {period: 'days'}), t.err);
});
