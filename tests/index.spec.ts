import "mocha";
import { assert } from "chai";

import "../src/index";

describe("Array", () => {
  describe("#deepCopy", () => {
    it("should return a deep copy of the array", () => {
      let arr = [2, 11, 37, 42];
      let a2 = Array.deepCopy(arr);
      assert.deepEqual(arr, a2);
      assert.notEqual(arr, a2);
    });

    it("should return a deep copy of the array with nested arrays", () => {
      let arr = [2, 11, [37, 42]];
      let a2 = Array.deepCopy(arr);
      assert.deepEqual(arr, a2);
      assert.notEqual(arr, a2);
    });
  });

  describe("#shallowCopy", () => {
    it("should return a shallow copy of the array", () => {
      let arr = [[2, 11], 37, 42];
      let a2 = Array.shallowCopy(arr);
      assert.deepEqual(arr, a2);
      assert.notEqual(arr, a2);
      assert.equal(arr[0], a2[0]);
    });
  });

  describe("#shuffle", () => {
    it("should return a shuffled array", () => {
      let arr = [2, 11, 37, 42];
      let a2 = Array.shuffle(arr);
      assert.notEqual(arr, a2);
      assert.sameDeepMembers(arr, a2);
    });

    it("should return a shuffled array with nested arrays", () => {
      let arr = [2, 11, [37, 42]];
      let a2 = Array.shuffle(arr);
      assert.notEqual(arr, a2);
      assert.sameDeepMembers(arr, a2);
    });
  });

  describe("#prototype.shuffle", () => {
    it("should return the same array shuffled", () => {
      let arr = [2, 11, 37, 42];
      let a2 = arr.shuffle();
      assert.deepEqual(arr, a2);
    });
  });
});
