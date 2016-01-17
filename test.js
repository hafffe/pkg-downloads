import test from 'ava';
import pkgDownloads from './';

test('result should be a number', async t => {
	t.is(typeof await pkgDownloads('ava', {period: 'week'}), 'number');
});
