class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3));// ! class base only call

const m = new MathUtils();
// m.add(2, 3); ❌ Error: not available on instances


