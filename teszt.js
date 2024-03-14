import { fuggvenyem } from "./main.js";
export function tesztFugvenyek() {
  {
    console.log("Teszt1");
    let a = 34;
    let b = 50;
    let vart = 2;
    console.assert(
      "%o",
      `a=${a}, b=${b}, lnko=${vart}`,
      "A bevart eredmeny nem stimmel"
    );
  }
  {
    console.assert("Teszt2");
    let a = 15;
    let b = 50;
    let vart = 5;
    console.assert(
      "%o",
      `a=${a}, b=${b}, lnko=${vart}`,
      "A bevart eredmeny nem stimmel"
    );
  }
  {
    console.assert("Teszt3");
    let a = 3;
    let b = 3;
    let vart = 3;
    console.assert(
      vart === fuggvenyem(a,b),
      "%o",
      `a=${a}, b=${b}, lnko=${vart}`,
      "A bevart eredmeny nem stimmel"
    );
  }
  {
    console.assert("Teszt4");
    let a = Number.MAX_SAFE_INTEGER;
    let b = 6;
    let vart = "nem tudni";
    console.assert(
      "%o",
      `a=${a}, b=${b}, lnko=${vart}`,
      "A bevart eredmeny nem stimmel"
    );
  }
  {
    console.assert("Teszt5");
    let a = Number.MIN_SAFE_INTEGER;
    let b = 9;
    let vart = "nem tudni";
    console.assert(
      "%o",
      `a=${a}, b=${b}, lnko=${vart}`,
      "A bevart eredmeny nem stimmel"
    );
  }
  // {
  //   console.log("Teszt3");
  //   let a = Number.MAX_SAFE_INTEGER;
  //   let b = 23;
  //   let vart = "sok"
  //   console.log(
  //     `a:${a}, b:${b}, várt:${vart}, eredmeny:${vart === fuggvenyem(a, b)}, függvény eredmény:${fuggvenyem(a,b)}`
  //   );
  // }
 /* {
    console.log("Teszt3");
    let a = 34.9;
    let b = 50;
    let vart = "hiba";
    console.log(
      `a:${a}, b:${b}, várt:${vart}, eredmeny:${vart === fuggvenyem(a, b)}`
    );
  }*/
 /* {
    console.log("Teszt4");
    let a = 0;
    let b = 5;
    let vart = "hiba";
    console.log(
      `a:${a}, b:${b}, várt:${vart}, eredmeny:${vart === fuggvenyem(a, b)}`
    );
  }*/
 /* {
    console.log("Teszt4");
    let a = 0;
    let b = 0;
    let vart = 0;
    console.log(
      `a:${a}, b:${b}, várt:${vart}, eredmeny:${vart === fuggvenyem(a, b)}`
    );
  }*/
}
