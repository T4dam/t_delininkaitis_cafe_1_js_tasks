console.group(
  "1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis"
);
{
  // function printCapital(str) {
  //   return console.log(str.toUpperCase());
  // }
  const printCapital = (str) => {
    const result = [];
    for (i = 0; i < str.length; i++) {
      result.push(str[i].toUpperCase());
    }
    console.log(result.join(""));
    return result.join("");
  };

  console.log("---");
  console.log("abcd");
  printCapital("abcd");
  console.log("AAAA");
  printCapital("AAAA");
  console.log("aBcD");
  printCapital("aBcD");
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "2. Sukurkite funkciją, kuri atspausdina tekstą mažosiomis raidėmis"
);
{
  // function printLower(str) {
  //   return console.log(str.toLowerCase());
  // }
  const printLower = (str) => {
    const result = [];
    for (i = 0; i < str.length; i++) {
      result.push(str[i].toLowerCase());
    }
    console.log(result.join(""));
    return result.join("");
  };

  console.log("---");
  printLower("abcd");
  printLower("AAAA");
  console.log("aBcD");
  printLower("aBcD");
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "3. Sukurkite funkciją, kuri atspausdina pirmojo parametro pirmają raidę"
);
{
  // function printFirstLetter(str) {
  //   return console.log(str.substring(0, 1));
  // }
  const printFirstLetter = (str) => {
    const result = [];
    for (i = 0; i < str.length; i++) {
      if (i === 0) {
        result.push(str[i].toUpperCase());
        break;
      }
    }
    console.log(result.join());
    return result.join("");
  };

  console.log("---");
  console.log("ABCD");
  printFirstLetter("abcd");
  console.log("AAAA");
  printFirstLetter("AAAA");
  console.log("aBcD");
  printFirstLetter("aBcD");
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "4. Sukurkite funkciją, kuri atspausdina pirmojo parametro paskutinę raidę"
);
{
  // function printLastLetter(str) {
  //   return console.log(str.substring(str.length - 1));
  // }

  const printLastLetter = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (i === str.length - 1) {
        console.log(str[i]);
      }
    }
  };

  console.log("---");
  printLastLetter("Labas");
  printLastLetter("Ate");
  printLastLetter("Brieda");
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "5. Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę"
);
{
  // const printMiddleLetter = (str) =>
  //   console.log(str.charAt(Math.floor(str.length / 2)));
  const printMiddleLetter = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (i === Math.floor(str.length / 2)) {
        console.log(str[i]);
      }
    }
  };

  console.log("---");
  printMiddleLetter("Labas");
  printMiddleLetter("Ate");
  printMiddleLetter("Brieda");
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "6. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių"
);
{
  // function getDoubleLetterCount(str) {
  //   return console.log(str.length);
  // }

  const getDoubleLetterCount = (str) => {
    let strLength = 0;
    for (let i = 0; i < str.length; i++) {
      strLength = strLength + 1;
    }
    return strLength;
  };

  console.log("---");
  console.log({
    labas: getDoubleLetterCount("labas"),
    kranas: getDoubleLetterCount("kranas"),
    kebabas: getDoubleLetterCount("kebabas"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "7. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių padaugintą iš dviejų"
);
{
  // function getDoubleLetterCount(str) {
  //   return console.log(str.length * 2);
  // }
  const getDoubleLetterCount = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
    }
    return count * 2;
  };

  console.log("---");
  console.log({
    labas: getDoubleLetterCount("labas"),
    kranas: getDoubleLetterCount("kranas"),
    kebabas: getDoubleLetterCount("kebabas"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "8. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių"
);
{
  // function getArgsLetterSum(a, b) {
  //   return console.log(a.length + b.length);
  // }
  const getArgsLetterSum = (str1, str2) => {
    let str1Count = 0;
    for (let i = 0; i < str1.length; i++) {
      str1Count++;
    }
    let str2Count = 0;
    for (let i = 0; i < str2.length; i++) {
      str2Count++;
    }
    return str1Count + str2Count;
  };
  console.log("---");
  console.log({
    "labas, abc": getArgsLetterSum("labas", "abc"),
    "kranas, jonas": getArgsLetterSum("kranas", "jonas"),
    "kebabas, kefyras": getArgsLetterSum("kebabas", "kefyras"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "9. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 'a' raidė, priešingu atveju <false>"
);
{
  // const containsLetterA = (str => str.includes("a"));

  // function containsLetterA(str) {
  //   if (str.indexOf("a") > -1) {
  //     return "true";
  //   } else {
  //     return "false";
  //   }
  // }

  const containsLetterA = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLocaleLowerCase() === "a") {
        return true;
      }
    }
    return false;
  };

  console.log("---");
  console.log({
    labas: containsLetterA("labas"),
    kempė: containsLetterA("kempė"),
    Finakolė: containsLetterA("Finakolė"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "10. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false"
);
{
  // const containsLetter = (str, letter) => str.includes(letter);
  const containsLetter = (str, letter) => {
    for (i = 0; i < str.length; i++) {
      if (str[i].toLocaleLowerCase() === letter) {
        return true;
      }
    }
    return false;
  };

  console.log("---");
  console.log({
    "labas, a": containsLetter("labas", "a"),
    "kempė, a": containsLetter("kempė", "a"),
    "Finakolė, u": containsLetter("Finakolė", "u"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių"
);
{
  // const isEvenNumberOfLetters = (str) => {
  //   if (str.length % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const isEvenNumberOfLetters = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
    }

    if (count % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  console.log("---");
  console.log({
    labas: isEvenNumberOfLetters("labas"),
    kempės: isEvenNumberOfLetters("kempės"),
    123123: isEvenNumberOfLetters("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  // const getNumberOfVowels = (str) =>
  //   Array.from(str).filter((letter) =>
  //     "a, ą, e, ę, ė, i, į, y, o, u, ų, ū".includes(letter)
  //   ).length;
  const getNumberOfVowels = (str) => {
    let Vowelcount = 0;
    for (let i = 0; i < str.length; i++) {
      if ("a, ą, e, ę, ė, i, į, y, o, u, ų, ū".includes(str[i])) {
        Vowelcount++;
      }
    }
    return Vowelcount;
  };

  console.log("---");
  console.log({
    aaaaa: getNumberOfVowels("aaaaa"),
    sasasasa: getNumberOfVowels("sasasasa"),
    aeyuioąčė: getNumberOfVowels("aeyuioąčė"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  // const getNumberOfConsonants = (str) =>
  //   Array.from(str.toLowerCase).filter((letter) =>
  //     "b, c, č, d, f, g, h, j, k, l, m, n, p, r, s, š, t, v, z, ž".includes(
  //       letter
  //     )
  //   ).length;

  const getNumberOfConsonants = (str) => {
    let ConsonantsCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (
        "b, c, č, d, f, g, h, j, k, l, m, n, p, r, s, š, t, v, z, ž".includes(
          str[i]
        )
      ) {
        ConsonantsCount++;
      }
    }
    return ConsonantsCount;
  };

  console.log("---");
  console.log({
    aaaaa: getNumberOfConsonants("aaaaa"),
    sasasasa: getNumberOfConsonants("sasasasa"),
    aeyuioąčė: getNumberOfConsonants("aeyuioąčė"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaičių"
);
{
  // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  // const isOnlyLetters = (str) =>
  //   Array.from(str).filter((item) => numbers.indexOf(parseInt(item) >= 0))
  //     .length > 0;

  const isOnlyLetters = (str) => {
    for (let i = 0; i < str.length; i++) {
      if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(parseInt(str[i]))) {
        return false;
      }
      return true;
    }
  };
  console.log("---");
  console.log({
    labas: isOnlyLetters("labas"),
    kempės: isOnlyLetters("kempės"),
    123123: isOnlyLetters("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  // const letterACount = (str) =>
  //   Array.from(str.toLocaleLowerCase()).filter((letter) => letter === "a")
  //     .length;
  const letterACount = (str) => {
    let countA = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLocaleLowerCase().includes("a")) {
        countA++;
      }
    }
    return countA;
  };

  console.log("---");
  console.log({
    labas: letterACount("labas"),
    kempės: letterACount("kempės"),
    123123: letterACount("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje"
);
{
  // const letterCount = (str, searchLetter) =>
  //   Array.from(str.toLocaleLowerCase()).filter((item) => item === searchLetter)
  //     .length;
  const letterCount = (str, searchLetter) => {
    let countLetter = 0;
    for (let i = 0; i < str.length; i++) {
      if (
        str[i].toLocaleLowerCase().includes(searchLetter.toLocaleLowerCase())
      ) {
        countLetter++;
      }
    }
    return countLetter;
  };

  console.log("---");
  console.log({
    "labas, a": letterCount("labas", "a"),
    "kempės, k": letterCount("kempės", "k"),
    "123123, z": letterCount("123123", "z"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "17. Sukurkite funkciją, kuri grąžina pirmos (nuo dešinės pusės) 'a' raidės vietą žodyje"
);
{
  // const lastIndexOfLetterA = (str) =>
  //   Array.from(str.toLowerCase()).indexOf("a");

  // const lastIndexOfLetterA = (str) => Array.from(str).lastIndexOf("a"); Jeigu iš dešinės

  const lastIndexOfLetterA = (str) => {
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i].toLocaleLowerCase() === "a") {
        return i;
      }
    }
    return "Nėra";
  };

  console.log("---");
  console.log({
    labas: lastIndexOfLetterA("labas"),
    kempės: lastIndexOfLetterA("kempės"),
    123123: lastIndexOfLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "18. Sukurkite funkciją, kuri grąžina pirmos (nuo dešinės pusės) vartotojo perduotos raidės vietą žodyje"
);
{
  // const lastIndexOfLetter = (str, searchLetter) =>
  //   Array.from(str.toLowerCase()).indexOf(searchLetter);
  const lastIndexOfLetter = (str, searchLetter) => {
    for (let i = str.length - 1; i >= 0; i--) {
      if (
        str[i].toLocaleLowerCase().includes(searchLetter.toLocaleLowerCase())
      ) {
        return i;
      }
    }
    return "nebebūva";
  };

  console.log("---");
  console.log({
    "labas, a": lastIndexOfLetter("labas", "a"),
    "kempės, k": lastIndexOfLetter("kempės", "k"),
    "123123, z": lastIndexOfLetter("123123", "z"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje"
);
{
  // const indexesOfLetterA = (str) =>
  //   Array.from(str.toLowerCase())
  //     .map((item, i) => {
  //       if (item === "a") {
  //         return i;
  //       } else {
  //         return -1;
  //       }
  //     })
  //     .filter((item) => item > -1);

  const indexesOfLetterA = (str) => {
    let aIndexes = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLocaleLowerCase().includes("a")) {
        aIndexes.push(i);
      }
    }
    return aIndexes;
  };

  console.log("---");
  console.log({
    labas: indexesOfLetterA("labas"),
    kempės: indexesOfLetterA("kempės"),
    123123: indexesOfLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje"
);
{
  // const indexesOfLetter = (str, searchLetter) =>
  //   Array.from(str.toLowerCase())
  //     .map((item, i) => {
  //       if (item === searchLetter) {
  //         return i;
  //       } else {
  //         return -1;
  //       }
  //     })
  //     .filter((item) => item > -1);

  const indexesOfLetter = (str, searchLetter) => {
    let indexesArray = [];
    for (let i = 0; i < str.length; i++) {
      if (
        str[i].toLocaleLowerCase().includes(searchLetter.toLocaleLowerCase())
      ) {
        indexesArray.push(i);
      }
    }
    return indexesArray;
  };

  console.log("---");
  console.log({
    "labas, a": indexesOfLetter("labas", "a"),
    "kempės, m": indexesOfLetter("kempės", "m"),
    "123123, 2": indexesOfLetter("123123", "2"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį"
);
{
  // const removeFirstLetterA = (str) => str.replace("a", "");
  // // str.toLocaleLowerCase().substring(0, str.indexOf("a")) +
  // // str.substring(str.indexOf("a") + 1);

  const removeFirstLetterA = (str) => {
    let indexOfA = -1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "a") {
        indexOfA = i;
        break;
      }
    }

    if (indexOfA >= 0) {
      console.log(indexOfA);
      return str.substring(0, indexOfA) + str.substring(indexOfA + 1);
    } else {
      return "nebėėr";
    }
  };

  console.log("---");
  console.log({
    labas: removeFirstLetterA("Labas"),
    kempiniukas: removeFirstLetterA("kempiniukas"),
    123123: removeFirstLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį"
);
{
  // const removeLastLetterA = (str) =>
  //   str.toLocaleLowerCase().substring(0, str.lastIndexOf("a")) +
  //   str.substring(str.lastIndexOf("a") + 1);
  const removeLastLetterA = (str) => {
    let indexOfLastA = -1;
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === "a") {
        indexOfLastA = i;

        break;
      }
    }
    if (indexOfLastA >= 0) {
      return str.substring(0, indexOfLastA) + str.substring(indexOfLastA + 1);
    } else {
      return "nėėr";
    }
  };

  console.log("---");
  console.log({
    labas: removeLastLetterA("labas"),
    kempiniukas: removeLastLetterA("kempiniukas"),
    123123: removeLastLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje"
);
{
  // const removeAllOccurencesOfLetterA = (str) =>
  //   str.replace(/a/g, "") && str.replace(/A/g, "");
  const removeAllOccurencesOfLetterA = (str) => {
    const letters = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLocaleLowerCase() !== "a") {
        letters.push(str[i]);
      }
    }
    return letters.join("");
  };
  console.log("---");
  console.log({
    labAsA: removeAllOccurencesOfLetterA("labAsA"),
    kempiniukas: removeAllOccurencesOfLetterA("kempiniukas"),
    123123: removeAllOccurencesOfLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje"
);
{
  // const removeAllOccurencesOfLetter = (str, letter) =>
  //   str.replace(/ letter /g, "");
  const removeAllOccurencesOfLetter = (str, letter) => {
    let letters = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== letter) {
        letters.push(str[i]);
      }
    }
    return letters.join("");
  };

  console.log("---");
  console.log({
    "labas, a": removeAllOccurencesOfLetter("labas", "a"),
    "kempiniukas, i": removeAllOccurencesOfLetter("kempiniukas", "i"),
    "123123, 3": removeAllOccurencesOfLetter("123123", "3"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group(
  "25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis."
);
{
  const filterLetters = (str, lettersToRemove) => {
    let strArray = [];
    for (let i = 0; i < str.length; i++) {
      if (!lettersToRemove.includes(str[i])) {
        strArray.push(str[i]);
      }
    }
    return strArray.join("");
  };
  console.log("---");
  const str = filterLetters("Brangakmienio paveikslas", ["a", "i"]);
  console.log(str);
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį"
);
{
  const replaceSpaceWithDash = (str) => {
    let wordArray = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        wordArray.push("-");
      } else if (str[i] !== " ") {
        wordArray.push(str[i]);
      }
    }
    return wordArray.join("");
  };

  // const search = " ";
  // const replaceWith = "-";
  // const replaceSpaceWithDash = (str) => str.slice(search).join(replaceWith);
  console.log("---");
  console.log({
    "viens du trys": replaceSpaceWithDash("viens du trys"),
    "as tave myliu": replaceSpaceWithDash("as tave myliu"),
    "Bairis seniuk": replaceSpaceWithDash("Bairis seniuk"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja"
);
{
  const capitalize = (str) => {
    const words = str.split(" ");
    let resultArray = [];
    for (let i = 0; i < words.length; i++) {
      const capitalized = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      resultArray.push(capitalized);
    }
    return resultArray.join(" ");
  };
  console.log("---");
  console.log({
    "viens du trys": capitalize("viens du trys"),
    "as tave myliu": capitalize("as tave myliu"),
    "Bairis seniuk": capitalize("Bairis seniuk"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'"
);
{
  const strReverse = (str) => {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    let resultWords = result.split(" ");
    const resultWordsArray = [];
    for (let i = resultWords.length - 1; i >= 0; i--) {
      resultWordsArray.push(resultWords[i]);
    }
    console.log(str, "->", resultWordsArray.join(" "));
    return resultWordsArray.join(" ");
  };

  console.log("---");

  strReverse("viens du trys");
  strReverse("as tave myliu");
  strReverse("Bairis seniuk");
  console.log("---");
}
console.groupEnd();
console.log();

// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.group(
  "29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)"
);
{
  const isPalyndrome = (str) => {
    let reversedResult = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedResult += str[i];
    }
    return str === reversedResult;
    // if (str === reversedResult) {
    //   console.log(true);
    // } else {
    //   console.log(false);
    // }
  };
  console.log("---");
  console.log({
    mama: isPalyndrome("mama"),
    mamam: isPalyndrome("mamam"),
    123321: isPalyndrome("123321"),
    123456: isPalyndrome("123456"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{
  function capitalizeFirstWord(str) {
    return str[0].toUpperCase() + str.substring(1);
  }
  function splitIntoSentences(paragraph) {
    const result = {
      sentences: [],
      separators: [],
    };
    let sentenceStart = 0;
    for (let i = 0; i < paragraph.length; i++) {
      const symbol = paragraph[i];
      if ([".", "?", "!"].includes(symbol)) {
        const sentence = capitalizeFirstWord(
          paragraph.slice(sentenceStart, i).trim()
        );
        result.sentences.push(sentence);
        result.separators.push(symbol);
        sentenceStart = i + 1;
      }
    }
    return result;
  }
  function reduceEmptySpaces(str) {
    for (let i = str.length - 1; i >= 0; i--) {
      const letter = str[i];
      const prevLetter = str[i - 1];
      if ([" ", ","].includes(letter) && prevLetter === " ") {
        str = str.slice(0, i - 1) + str.slice(i);
      }
    }
    return str;
  }
  function fixParagraph(paragraph) {
    const { sentences, separators } = splitIntoSentences(paragraph);
    let result = "";
    for (let i = 0; i < sentences.length; i++) {
      const sentence = reduceEmptySpaces(sentences[i]);
      result += sentence + separators.shift() + " ";
    }
    return result;
  }
  const paragraph =
    "    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ";
  const fixedParagraph = fixParagraph(paragraph);
  console.log(paragraph);
  console.log(fixedParagraph);

  console.log("---");
}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group(
  "31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą"
);
{
  const splitSentence = (sentence) => {
    let words = sentence.split(" ");
    let resultArray = [];
    for (let i = 0; i < words.length; i++) {
      resultArray.push(words[i]);
    }
    return resultArray;
  };
  console.log("---");
  console.log({
    "Labas aš Jonas": splitSentence("Labas aš Jonas"),
    "Kėgliai yra gerai": splitSentence("Kėgliai yra gerai"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];
console.group(
  "32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį"
);
{
  function explode(str, separator) {
    let words = str.split(separator);
    const resultArray = [];
    for (let i = 0; i < words.length; i++) {
      resultArray.push(words[i]);
    }
    return resultArray;
  }
  console.log("---");
  console.log({
    "'Man patinka sniegas', ' '": explode("Man patinka sniegas", " "),
    "'home/about/13', '/'": explode("home/about/13", "/"),
  });
  console.log("---");
}
console.groupEnd();
console.log();
