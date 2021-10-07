console.groupCollapsed("1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7");
{
  const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
  ];

  function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price);
  }

  //   const sortDrinkByPrice = (a, b) => a.price - b.price;

  console.log(sortDrinkByPrice(drinks));
}
console.groupEnd();

console.groupCollapsed("2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau");
{
  function addName(obj, name, value) {
    return { ...obj, [name]: value };
  }

  console.log(addName({}, "Brutus", 300));

  console.log(addName({ piano: 500 }, "Brutus", 400));

  console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
}
console.groupEnd();

console.groupCollapsed("3 - https://edabit.com/challenge/48EJWLhF224na8po3");
{
  function generation(x, y) {
    const generations = {
      "-3": { m: "great grandfather", f: "great grandmother" },
      "-2": { m: "grandfather", f: "grandmother" },
      "-1": { m: "father", f: "mother" },
      0: { m: "me!", f: "me!" },
      1: { m: "son", f: "daughter" },
      2: { m: "grandson", f: "granddaughter" },
      3: { m: "great grandson", f: "great granddaughter" },
    };
    return generations[x][y];
  }

  console.log(generation(2, "f"));

  console.log(generation(-3, "m"));

  console.log(generation(1, "f"));
}
console.groupEnd();

console.groupCollapsed("4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX");
{
  function maximumScore(tileHand) {
    return tileHand.reduce((a, b) => a + b.score, 0);
  }
  console.log(
    maximumScore([
      { tile: "N", score: 1 },
      { tile: "K", score: 5 },
      { tile: "Z", score: 10 },
      { tile: "X", score: 8 },
      { tile: "D", score: 2 },
      { tile: "A", score: 1 },
      { tile: "E", score: 1 },
    ])
  );

  console.log(
    maximumScore([
      { tile: "B", score: 2 },
      { tile: "V", score: 4 },
      { tile: "F", score: 4 },
      { tile: "U", score: 1 },
      { tile: "D", score: 2 },
      { tile: "O", score: 1 },
      { tile: "U", score: 1 },
    ])
  );

  console.log(
    maximumScore([
      { tile: "M", score: 3 },
      { tile: "Q", score: 10 },
      { tile: "O", score: 1 },
      { tile: "E", score: 1 },
      { tile: "E", score: 1 },
      { tile: "I", score: 1 },
      { tile: "A", score: 1 },
    ])
  );
}
console.groupEnd();

console.groupCollapsed("5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD");
{
  function calculateDifference(obj, limit) {
    return Object.values(obj).reduce((a, b) => a + b) - limit;
  }
  console.log(calculateDifference({ "baseball bat": 20 }, 5));

  console.log(calculateDifference({ skate: 10, painting: 20 }, 19));

  console.log(
    calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)
  );
}
console.groupEnd();

console.groupCollapsed("6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM");
{
  function triArea(base, height) {
    return (base * height) / 2;
  }
  console.log(triArea(3, 2));

  console.log(triArea(7, 4));

  console.log(triArea(10, 10));
}
console.groupEnd();

console.groupCollapsed("7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip");
{
  function inkLevels(inks) {
    const InkLowest = Object.values(inks).sort((a, b) => a - b);
    return InkLowest[0];
  }
  console.log(
    inkLevels({
      cyan: 23,
      magenta: 12,
      yellow: 10,
    })
  );

  console.log(
    inkLevels({
      cyan: 432,
      magenta: 543,
      yellow: 777,
    })
  );

  console.log(
    inkLevels({
      cyan: 700,
      magenta: 700,
      yellow: 0,
    })
  );
}
console.groupEnd();

console.groupCollapsed("8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak");
{
  const stolenItems1 = {
    tv: 30,
    skate: 20,
    stereo: 50,
  };

  const stolenItems2 = {
    painting: 20000,
  };
  const stolenItems3 = {};

  const calculateLosses = (obj) =>
    Object.values(obj).reduce((total, num) => total + num, 0) || "Lucky you!";

  console.log(calculateLosses(stolenItems1));
  console.log(calculateLosses(stolenItems2));
  console.log(calculateLosses(stolenItems3));
}
console.groupEnd();
