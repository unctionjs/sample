/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import {contains} from "ramda"

import sample from "./source"

test(({ok, end}) => {
  ok(contains(sample([1, 2, 3]), [1, 2, 3]))
  end()
})

test(({ok, end}) => {
  ok(contains(sample("abc"), "abc"))
  end()
})
