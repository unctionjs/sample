/* eslint-disable no-magic-numbers */
import {test} from "tap";
import {contains} from "ramda";

import sample from "./index";

test(({ok, end}) => {
  ok(contains(sample([1, 2, 3]), [1, 2, 3]));
  end();
});

test(({ok, end}) => {
  ok(contains(sample("abc"), "abc"));
  end();
});
