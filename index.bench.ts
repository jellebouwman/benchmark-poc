import { Bench } from "tinybench";
import { wordsAndValues } from "./index.fixtures";
import { calculateWordValueHashMap, calculateWordValueLinear } from ".";

async function benchWordValues() {
  const bench = new Bench({ time: 100 });

  bench
    .add("linear", () => {
      for (const [word, value] of wordsAndValues) {
        calculateWordValueLinear(word);
      }
    })
    .add("hash", async () => {
      for (const [word, value] of wordsAndValues) {
        calculateWordValueHashMap(word);
      }
    });

  await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
  await bench.run();

  console.table(bench.table());
}

benchWordValues();
