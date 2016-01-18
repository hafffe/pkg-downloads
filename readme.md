# pkg-downloads [![Build Status](https://travis-ci.org/alonalon/pkg-downloads.svg?branch=master)](https://travis-ci.org/alonalon/pkg-downloads)

> Check total downloads of a package during a specific time period


## Install

```
$ npm install --save pkg-downloads
```


## Usage

```js
const pkgDownloads = require('pkg-downloads');

pkgDownloads('chalk', {period: 'week'}).then(res => {
	console.log(res);
	//=> 2948939
});
```


## API

### pkgDownloads(name, options)

#### name

*Required*  
Type: `string`

Name of the npm package.

#### options

##### period

*Required*  
Type: `string`

Choose by `day`, `week` or `month`.

## Related
[pkg-downloads-cli](https://github.com/alonalon/pkg-downloads-cli) - CLI for this module.


## License

MIT © [alonalon](http://github.com/alonalon)
