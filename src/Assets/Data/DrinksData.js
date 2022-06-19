const DrinksData = [
  {
    id: '1',
    image: require('../Images/KelapaMuda.png'),
    title: 'Es Kelapa Muda',
    description: 'descriptions...',
    location: 'Tomohon',
    price: '10.000',
    ingredients: [
      {
        id: '1',
        name: 'kelapa',
        image: require('../Images/coconut.jpg'),
      },
      {
        id: '2',
        name: 'gula merah',
        image: require('../Images/gulaMerah.jpg'),
      },
      {
        id: '3',
        name: 'ice cube',
        image: require('../Images/iceCube.jpg'),
      },
      {
        id: '4',
        name: 'syrup',
        image: require('../Images/syrup.jpg'),
      },
    ],
  },

  {
    id: '2',
    image: require('../Images/BubbleTea.png'),
    title: 'Bubble Tea',
    description: 'descriptions...',
    location: 'Manado',
    price: '30.000',
    ingredients: [
      {
        id: '1',
        name: 'bobba',
        image: require('../Images/bobba.jpg'),
      },
      {
        id: '2',
        name: 'gula merah',
        image: require('../Images/gulaMerah.jpg'),
      },
      {
        id: '3',
        name: 'milk',
        image: require('../Images/milk.jpg'),
      },
      {
        id: '4',
        name: 'sugar',
        image: require('../Images/sugar.jpg'),
      },
    ],
  },

  {
    id: '3',
    image: require('../Images/CoffeeLatte.png'),
    title: 'Coffee Latte',
    description: 'descriptions...',
    location: 'Tondano',
    price: '12.000',
    ingredients: [
      {
        id: '1',
        name: 'kopi',
        image: require('../Images/kopi.jpg'),
      },
      {
        id: '2',
        name: 'milk',
        image: require('../Images/milk.jpg'),
      },
      {
        id: '3',
        name: 'sugar',
        image: require('../Images/sugar.jpg'),
      },
      {
        id: '4',
        name: 'ice',
        image: require('../Images/iceCube.jpg'),
      },
    ],
  },
];

export default DrinksData;
