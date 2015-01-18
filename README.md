# isbn-validator
ISBN Validator return BOOLEAN true or false if a string is a valid ISBN

[![Build Status][travis-image]][travis-url]

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


<!-- vars -->

[travis-image]:https://img.shields.io/travis/thewazir/isbn-validator.svg?style=flat-square
[travis-url]:https://travis-ci.org/thewazir/isbn-validator
