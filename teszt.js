import { fuggvenyem } from "./main.js";

export function tesztFugvenyek() {
  {
    console.log("Teszt1");
    let a = 34;
    let b = 50;
    let vart = 2;
    console.assert(
      fuggvenyem(a, b) === vart,
      `a=${a}, b=${b}, lnko=${vart}`,
      "A bevart eredmeny nem stimmel"
    );
  }
  {
    console.log("Teszt2");
    let a = 15;
    let b = 50;
    let vart = 5;
    console.assert(
      fuggvenyem(a, b) === vart,
      `a=${a}, b=${b}, lnko=${vart}`,
      "A bevart eredmeny nem stimmel"
    );
  }
  {
    console.log("Teszt3");
    let a = 3;
    let b = 3;
    let vart = 3;
    console.assert(
      fuggvenyem(a, b) === vart,
      `a=${a}, b=${b}, lnko=${vart}`,
      "A bevart eredmeny nem stimmel"
    );
  }
  // VÉGTELEN CIKLUST KAPUNK  A MAX_SAFE_INTEGER ES A MIN_SAFE_INTEGER-RE
  // {
  //   console.log("Teszt4");
  //   let a = Number.MAX_SAFE_INTEGER;
  //   let b = 6;
  //   let vart = 6; 
  //   console.assert(
  //     fuggvenyem(a, b) === vart,
  //     `a=${a}, b=${b}, lnko=${vart}`,
  //     "A bevart eredmeny nem stimmel"
  //   );
  // }
  // {
  //   console.log("Teszt5");
  //   let a = Number.MIN_SAFE_INTEGER;
  //   let b = 9;
  //   let vart = 3; 
  //   console.assert(
  //     fuggvenyem(a, b) === vart,
  //     `a=${a}, b=${b}, lnko=${vart}`,
  //     "A bevart eredmeny nem stimmel"
  //   );
  // }
}
