import test from 'ava';
import fn from './';

test('returns false when package name is not found', async t => {
	const pkg = await fn('last-week', 'sadasdsa');
	t.is(pkg.err, true);
	t.is(pkg.downloads, null);
});

test('returns true when package name is found', async t => {
	const pkg = await fn('day', 'ava');
	t.is(pkg.err, false);
});
