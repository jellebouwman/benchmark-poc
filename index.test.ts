import { test, assert } from "vitest";
import { calculateWordValueLinear, calculateWordValueHashMap } from "./index";
import { wordsAndValues } from "./index.fixtures";

test("it calculate the correct character value with linear search", () => {
  for (const [word, value] of wordsAndValues) {
    assert(calculateWordValueLinear(word) === value);
  }
});

test("it calculate the correct character value with a hash map", () => {
  for (const [word, value] of wordsAndValues) {
    assert(calculateWordValueHashMap(word) === value);
  }
});
