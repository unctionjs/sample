/* eslint-disable no-magic-numbers */
import { contains } from "ramda";

import sample from "./index.ts";

test(() => {
  expect(contains(sample([1, 2, 3]), [1, 2, 3])).toBeTruthy();
});

test(() => {
  expect(contains(sample("abc"), "abc")).toBeTruthy();
});
