# npm-statics [![Build Status](https://travis-ci.org/alonalon/npm-statics.svg?branch=master)](https://travis-ci.org/alonalon/npm-statics)

> My stunning module


## Install

```
$ npm install --save npm-statics
```


## Usage

```js
const npmStatics = require('npm-statics');

npmStatics('unicorns');
//=> 'unicorns & rainbows'
```


## API

### npmStatics(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global npm-statics
```

```
$ npm-statics --help

  Usage
    npm-statics [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ npm-statics
    unicorns & rainbows
    $ npm-statics ponies
    ponies & rainbows
```


## License

MIT © [alonalon](http://github.com/alonalon)
