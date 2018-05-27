import first from "@unction/first";
import shuffle from "@unction/shuffle";
export default function sample(list) {
  return first(shuffle(list));
}
