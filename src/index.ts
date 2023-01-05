interface ArrayConstructor {
  deepCopy<T>(arr: Array<T>): Array<T>;
  shuffle<T>(arr: Array<T>): Array<T>;
}

interface Array<T> {
  shuffle(): Array<T>;
}

Array.deepCopy = function <T>(arr: Array<T>) {
  return JSON.parse(JSON.stringify(arr));
};

Array.prototype.shuffle = function () {
  let currentIndex = this.length,
    randomIndex;

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

Array.shuffle = function <T>(arr: Array<T>) {
  return Array.deepCopy(arr).shuffle();
};
