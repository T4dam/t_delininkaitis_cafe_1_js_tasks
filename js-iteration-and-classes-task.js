const usd_eur = 1.16;

class Car {
  brand;
  model;
  year;
  color;
  fuelTypes;
  price;

  constructor(brand, model, year, color, fuelTypes, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelTypes = fuelTypes;
    this.price = price;
  }
  getFuelTypes() {
    return this.fuelTypes.join("/");
  }
}
let cars;

console.group(
  "1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių"
);
{
  console.dir(Car);
}
console.groupEnd();

console.group("2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų");
{
  cars = [
    new Car("Toyota", "Yaris", 2002, "red", ["dysel"], 800),
    new Car("Tesla", "Model 3", 2016, "black", ["electric"], 22000),
    new Car("Toyota", "Avensis", 2015, "blue", ["petrol"], 13000),
    new Car("Audi", "A6", 2015, "black", ["petrol"], 14000),
    new Car("Audi", "A5", 2015, "red", ["petrol"], 17000),
    new Car("Audi", "R8", 2019, "black", ["petrol"], 17000),
    new Car("Audi", "R8", 2017, "black", ["petrol"], 15000),
    new Car("Tesla", "Model S", 2020, "blue", ["electric"], 38000),
    new Car("Subaru", "Impreza", 2010, "green", ["dysel", "electric"], 6000),
  ];
  console.table(cars);
}
console.groupEnd();

console.group(
  "3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes) kaip 'string'ą atskirtą '/'."
);
{
  cars.forEach((c) => console.log(c.getFuelTypes()));
}
console.groupEnd();

console.group(
  "4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą"
);
{
  cars.forEach((c) =>
    console.log(`${c.brand} ${c.model} - ${c.getFuelTypes()}`)
  );
}
console.groupEnd();
let electricCars;
console.group("5. Atrinkite tik elektrinius automobilius");
{
  electricCars = cars.filter(
    (c) => c.fuelTypes.includes("electric") && c.fuelTypes.length === 1
  );
  console.log(electricCars);
}
console.groupEnd();

let audiCars;
console.group(
  "6. Atrinkite tik benzininius automobilius, naujasnius nei 2016 metai"
);
{
  audiCars = cars.filter(
    (c) => c.fuelTypes.includes("petrol") && c.year > 2016
  );
  console.table(audiCars);
}
console.groupEnd();

console.group(
  "7. Atrinkite 'audi' markės automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai "
);
{
  const result = cars.filter(
    ({ brand, year, fuelTypes }) =>
      (brand === "audi" || brand === "Audi") &&
      year > 2012 &&
      year < 2016 &&
      fuelTypes !== "dysel"
  );
  console.table(result);
}
console.groupEnd();

console.group("8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį");
{
  const result =
    electricCars.reduce((sum, c) => sum + c.price, 0) / electricCars.length;
  console.log(result);
}
console.groupEnd();

console.group("9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę");
{
  const result = audiCars.reduce((sum, c) => sum + c.price, 0);
  console.log(result);
}
console.groupEnd();

console.group(
  "10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą"
);
{
  const result = cars.map((c) => ({
    brand: c.brand,
    model: c.model,
    price: Math.round((10 * c.price * usd_eur) / 10),
    fuelTypes: c.getFuelTypes(),
  }));
  console.table(result);
}
console.groupEnd();
