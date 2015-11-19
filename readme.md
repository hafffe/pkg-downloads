# pkg-downloads [![Build Status](https://travis-ci.org/alonalon/pkg-downloads.svg?branch=master)](https://travis-ci.org/alonalon/pkg-downloads)

> Check total downloads of a package during a specific time period


## Install

```
$ npm install --save pkg-downloads
```


## Usage

```js
pkgDownloads('period', 'name').then(res => {
	console.log(res);
	//=> { downloads: 7083, start: '2015-11-11', end: '2015-11-17', package: 'ava' }
});

```

## CLI

```
$ npm install --global pkg-downloads
```

```
$ pkg-downloads --help

  Usage
  $ pkg-downloads <day|week|month> <name>

  Examples
    $ pkg-downloads week chalk
    ${logSymbols.info} 10818357
    $ pkg-downloads elephants
    {logSymbols.error} Not found
```


## License

MIT © [alonalon](http://github.com/alonalon)
