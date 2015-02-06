# isbn-validator
ISBN Validator return BOOLEAN true or false if a string is a valid ISBN

[![NPM Version][npm-version]][npm-url]
[![Build Status][travis-image]][travis-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][npm-url]
[![Dependencies][dependencies-image]][dependencies-url]

## Usage
``` js
var isbnIsValid = require('isbn-validator');

//pass a string to get a response.
isbnIsValid("0262033844"); //returns true
isbnIsValid("059600298X"); //returns true
isbnIsValid("15681111Y"); //returns false

//dashes will be ignored
isbnIsValid("026-2033844"); //returns true
```

## License

Copyright (c) 2015 Omer Wazir

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<!-- vars -->
[npm-version]:https://img.shields.io/npm/v/isbn-validator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/isbn-validator
[travis-image]:https://img.shields.io/travis/thewazir/isbn-validator.svg?style=flat-square
[travis-url]:https://travis-ci.org/thewazir/isbn-validator
[license-image]:https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: #license
[downloads-image]: http://img.shields.io/npm/dm/isbn-validator.svg?style=flat-square
[dependencies-image]:https://img.shields.io/david/thewazir/isbn-validator.svg?style=flat-square
[dependencies-url]:https://github.com/thewazir/isbn-validator/blob/master/package.json
