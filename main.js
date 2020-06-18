const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

// Getters and setters implemented for practice (not added value to the final result)

  get appetizers() {
    return this._courses.appetizers;
  },

  set appetizers(appetizer) {
    this._courses.appetizers.push(appetizer);
  },
  
  get main() {
    return this._courses.mains;
  },

  set main(main) {
    this._courses.mains.push(main);
  },
  
  get desserts() {
    return this._courses.desserts;
  },

  set desserts(dessert) {
    this._courses.desserts.push(dessert);
  },
  
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()* dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal for today starts with ${appetizer.name}, followed by ${main.name} and ${dessert.name} for dessert. The total price of your meal is ${totalPrice} pounds.`;
  }
};


menu.addDishToCourse('appetizers', 'prawn salad', 7);
menu.addDishToCourse('appetizers', 'Padron peppers', 4);
menu.addDishToCourse('appetizers', 'ham and melon', 7);
menu.addDishToCourse('mains', 'beef pie', 11);
menu.addDishToCourse('mains', 'monkfish', 12);
menu.addDishToCourse('mains', 'roast chicken', 10);
menu.addDishToCourse('desserts', 'apple crumble', 5);
menu.addDishToCourse('desserts', 'chocolate ligeois', 6);
menu.addDishToCourse('desserts', 'vanilla caramel crepe', 6);

//console.log(menu._courses.appetizers);
//console.log(menu._courses.mains);
//console.log(menu._courses.desserts);


const meal = menu.generateRandomMeal();
//console.log(meal);
