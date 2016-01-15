import test from 'ava';
import pkgDownloads from './';

test('result should be a number', t => {
	return pkgDownloads('week', 'ava').then(result => {
		t.is(typeof result, 'number');
	});
});
