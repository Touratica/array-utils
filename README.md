# array-utils

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
