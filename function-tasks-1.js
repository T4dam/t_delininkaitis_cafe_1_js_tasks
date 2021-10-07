console.groupCollapsed(
  "1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą."
);
{
  const returnFirst = (arr) => arr[0];
  console.log(returnFirst([1, 2, 3]));
}
console.groupEnd();

console.groupCollapsed(
  "2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina."
);
{
  let arr = [1, 2, 3];
  const returnFirst = (arr) => arr.shift();
  console.log(returnFirst(arr), arr);
}
console.groupEnd();

console.groupCollapsed(
  "3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą."
);
{
  const returnLast = (arr) => arr[arr.length - 1];
  console.log(returnLast([1, 2, 3]));
}
console.groupEnd();

console.groupCollapsed(
  "4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina."
);
{
  let arr = [1, 2, 3];
  const returnLastie = (arr) => arr.pop();
  console.log(returnLastie(arr), arr);
}
console.groupEnd();

console.groupCollapsed(
  "5. Parašykite funkciją, kuri grąžina elementų kiekį masyve"
);
{
  const returnAllEls = (arr) => arr.length;
  console.log(returnAllEls([1, 2, 3]));
}
console.groupEnd();

console.groupCollapsed(
  "6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą"
);
{
  const lastElIndex = (arr) => arr.length - 1;
  console.log(lastElIndex([1, 2, 3, 4]));
}
console.groupEnd();

console.groupCollapsed(
  "7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis"
);
{
  const numbersInLine = (arr) => arr.forEach((_, i) => console.log(i));
  numbersInLine([1, 2, 3, 4]);
}
console.groupEnd();

console.groupCollapsed(
  "8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis"
);
{
  const elInLine = (arr) => arr.forEach((el) => console.log(el));
  elInLine([1, 2, 3, 4]);
}
console.groupEnd();

console.groupCollapsed(
  "9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  "
);
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const result = (arr) =>
    arr.forEach((el, i) => console.log(`[${i}] => ${el}`));
  result([1, 2, 3, 4]);
}
console.groupEnd();

console.groupCollapsed(
  "10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo."
);
{
  const resultReversed = (arr) =>
    arr
      .slice()
      .reverse()
      .forEach((el) => console.log(el));
  resultReversed([1, 2, 3, 4]);
}
console.groupEnd();

console.groupCollapsed(
  "11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ..."
);
{
  const allIndexes = (arr) => arr.map((_, i) => i).join(" ");
  console.log(allIndexes([1, 2, 3]));
}
console.groupEnd();

console.groupCollapsed(
  "12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48"
);
{
  const elArray = (arr) => arr.map((el) => el).join(" ");
  console.log(elArray([1, 2, 3, 4]));
}
console.groupEnd();

console.groupCollapsed(
  "13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:"
);
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  const result = (arr) => arr.map((el, i) => `[${i}]=>${el}`).join(" ");
  console.log(result([1, 2, 3, 4]));
}
console.groupEnd();
