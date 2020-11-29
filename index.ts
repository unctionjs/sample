import first from "@unction/first";
import shuffle from "@unction/shuffle";

export default function sample<A> (list: OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): A {
  return first(shuffle(list));
}
