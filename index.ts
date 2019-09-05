import first from "@unction/first";
import shuffle from "@unction/shuffle";
import {OrderedEnumerableType} from "./types";

export default function sample<A> (list: OrderedEnumerableType<A>): A {
  return first(shuffle(list));
}
