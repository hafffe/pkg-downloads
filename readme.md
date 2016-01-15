# pkg-downloads [![Build Status](https://travis-ci.org/alonalon/pkg-downloads.svg?branch=master)](https://travis-ci.org/alonalon/pkg-downloads)

> Check total downloads of a package during a specific time period


## Install

```
$ npm install --save pkg-downloads
```

## Usage

```js
const pkgDownloads = require('pkg-downloads');

pkgDownloads('week', 'chalk').then(res => {
	console.log(res);
	//=> {2948939}
});
```

## API

### pkgDownloadsCli(period, name)

#### period

Type: `string`

Choose by day|week|month.

#### name

Type: `string`

Name of the npm package.

## License

MIT © [alonalon](http://github.com/alonalon)
