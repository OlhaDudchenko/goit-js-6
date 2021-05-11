class Car {

  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
}

}
console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
console.log(this.#brand);