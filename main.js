import { tesztFugvenyek } from "./teszt.js";
export function fuggvenyem(a, b) {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}
tesztFugvenyek();
//console.log(fuggvenyem(9, 6));
