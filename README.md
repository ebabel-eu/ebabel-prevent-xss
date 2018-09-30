# ebabel-prevent-xss
[![Build Status](https://travis-ci.org/ebabel-eu/ebabel-prevent-xss.svg?branch=master)](https://travis-ci.org/ebabel-eu/ebabel-prevent-xss)

Processes an input string to prevent Cross Site Scripting injection attacks (XSS). Returns a safe version of that input.

## Module install and usage in your game

### Install
```
npm install --save ebabel-prevent-xss
```

### Usage
```
const preventXss = require('ebabel-prevent-xss');

const result = preventXss('<script>alert("password: " + secret.password)</script>');
```

## Development of this module
Fork this repository on Github, `git clone` your repository, checkout the develop branch, and when you are done, submit a pull request from your repository develop branch to this repository develop branch.

* fork this repository on github.com
* git clone your forked repository.
* git checkout develop

### First step when developing
```
npm install
```

### Run linting and unit tests
```
npm test
```

An html coverage report is to be found in the `coverage` folder.

### Generate documentation
```
npm run jsdoc
```

The generated documentation is to be found in the `docs` folder.
