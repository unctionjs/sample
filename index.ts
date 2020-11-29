import first from "@unction/first";
import shuffle from "@unction/shuffle";

export default function sample<A> (list: OrderedArray<A> | Set<A> | RecordType<unknown, A> | string): A {
  return first(shuffle(list));
}
