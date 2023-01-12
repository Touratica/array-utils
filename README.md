# array-utils

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Touratica/array-utils)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
![GitHub issues](https://img.shields.io/github/issues/Touratica/array-utils)
[![GitHub forks](https://img.shields.io/github/forks/Touratica/streamlabs-scoreboard)](https://github.com/Touratica/array-utils/network)
[![GitHub stars](https://img.shields.io/github/stars/Touratica/streamlabs-scoreboard)](https://github.com/Touratica/array-utils/stargazers)
![GitHub](https://img.shields.io/github/license/Touratica/array-utils)
![npm](https://img.shields.io/npm/dw/@touratica/array-utils)

A npm package that adds extra functionality to the JavaScript built-in Array object. The new functions are:

- [`Array.copy(Array<T>)`](#arraydeepcopyarrayt)
- [`Array.deepCopy(Array<T>)`](#arraydeepcopyarrayt)
- [`Array.shallowCopy(Array<T>)`](#arraydeepcopyarrayt)
- [`Array.shuffle(Array<T>)`](#arrayshufflearrayt)
- [`.shuffle()`](#shuffle)

## `Array.copy(Array<T>)`

Alias for [`Array.deepCopy`](#arraydeepcopyarrayt).

## `Array.deepCopy(Array<T>)`

Receives an array and returns an array with the same values.

## `Array.shallowCopy(Array<T>)`

Receives an array and returns an array with the same values. **Not suitable for objects or multidimensional arrays**.

## `Array.shuffle(Array<T>)`

Receives an array and returns a new array with same values shuffled.

## `.shuffle()`

Shuffles an array in-place and returns the same array.
