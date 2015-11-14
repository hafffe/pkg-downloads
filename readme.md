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
    $ pkg-downloads chalk
    ${logSymbols.info} 10818357
    $ pkg-downloads elephants
    {logSymbols.error} Not found
```


## License

MIT © [alonalon](http://github.com/alonalon)
