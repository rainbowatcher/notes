export function camelcase(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, _index) {
      return word.toUpperCase();
    })
    .replace(/[\s-_]+/g, "");
}
