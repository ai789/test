export class PrimitiveString {
  static [Symbol.hasInstance](x: any) {
    console.log(x)
    return typeof x === 'string'
  }
}
