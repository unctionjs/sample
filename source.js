import first from "@unction/first"
import shuffle from "@unction/shuffle"

export default function sample (list: string | ArrayType): string | ArrayType {
  return first(shuffle(list))
}
