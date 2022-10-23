// * Shopping list
// Product template
const product = {
  name: '',
  amount: 0,
  isAvailable: true,
  price: 0,
};

const shoppingList = [
  {
    name: 'Milk',
    amount: 1000,
    isAvailable: false,
    price: 6.4,
  },
  {
    name: 'Chocolate',
    amount: 700,
    isAvailable: true,
    price: 10,
  },
  {
    name: 'Chicken wings',
    amount: 120,
    isAvailable: false,
    price: 12.99,
  },
  {
    name: 'Potato',
    amount: 12000,
    isAvailable: true,
    price: 3,
  },
  {
    name: 'Carrot',
    amount: 1700,
    isAvailable: true,
    price: 5.3,
  },
];

// Function that show all products and their price
const ShowProducts = (list) => {
  list.forEach(element => {
    if (element.isAvailable) {
      console.log(`${element.name} - ${element.price} : Is available to buy`);
    }
  });
  list.forEach(element => {
    if (!element.isAvailable) {
      console.log(`${element.name} - ${element.price} : Is not available to buy`);
    }
  });
}

// Function that change products to buyed
const BuyProduct = (name, array) => {
  array.forEach(item => {
    if (item.name === name) {
      item.isAvailable = false;
      console.log(item);
    }
  });
}