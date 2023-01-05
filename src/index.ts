interface ArrayConstructor {
  deepCopy<T>(arr: Array<T>): Array<T>;
  shuffle<T>(arr: Array<T>): Array<T>;
}

interface Array<T> {
  shuffle(): Array<T>;
}

/**
 * Deep copies an array.
 * @param {T[]} array The array to deep copy.
 * @returns {T[]} A deep copy of the array.
 * @example
 * const arr = [1, 2, 3];
 * const arrCopy = Array.deepCopy(arr);
 * console.log(arrCopy); // [1, 2, 3]
 * console.log(arrCopy === arr); // false
 * console.log(arrCopy[0] === arr[0]); // true
 * console.log(arrCopy[1] === arr[1]); // true
 * console.log(arrCopy[2] === arr[2]); // true
 * @example
 * const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
 * const arrCopy = Array.deepCopy(arr);
 * console.log(arrCopy); // [{ a: 1 }, { b: 2 }, { c: 3 }]
 * console.log(arrCopy === arr); // false
 * console.log(arrCopy[0] === arr[0]); // false
 * console.log(arrCopy[1] === arr[1]); // false
 * console.log(arrCopy[2] === arr[2]); // false
 * console.log(arrCopy[0].a === arr[0].a); // true
 * console.log(arrCopy[1].b === arr[1].b); // true
 * console.log(arrCopy[2].c === arr[2].c); // true
 * @example
 * const arr = [[1, 2], 4, 5];
 * const arrCopy = Array.deepCopy(arr);
 * console.log(arrCopy); // [[1, 2], 4, 5]
 * console.log(arrCopy === arr); // false
 * console.log(arrCopy[0] === arr[0]); // false
 * console.log(arrCopy[0][0] === arr[0][0]); // true
 * console.log(arrCopy[0][1] === arr[0][1]); // true
 * console.log(arrCopy[0][2] === arr[0][2]); // true
 */
Array.deepCopy = function <T>(array: Array<T>): T[] {
  return JSON.parse(JSON.stringify(array));
};

/**
 * Shuffles array in place, using Fisher-Yates algorithm.
 * @returns {[]} The shuffled array.
 * @example
 * const arr = [1, 2, 3];
 * const shuffledArr = arr.shuffle();
 * console.log(shuffledArr); // [2, 3, 1]
 * console.log(shuffledArr === arr); // true
 */
Array.prototype.shuffle = function <T>(): T[] {
  let currentIndex: number = this.length,
    randomIndex: number;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [this[currentIndex], this[randomIndex]] = [
      this[randomIndex],
      this[currentIndex],
    ];
  }

  return this;
};

/**
 * Shuffles an array, whitout mutating the original array.
 * @param {T[]} array The array to shuffle.
 * @returns {T[]} The shuffled array.
 * @example
 * const arr = [1, 2, 3];
 * const shuffledArr = Array.shuffle(arr);
 * console.log(shuffledArr); // [2, 3, 1]
 * console.log(shuffledArr === arr); // false
 */
Array.shuffle = function <T>(array: Array<T>): T[] {
  return Array.deepCopy(array).shuffle();
};
