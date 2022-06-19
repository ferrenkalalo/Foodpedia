const SnackData = [
  {
    id: '1',
    image: require('../Images/Dimsum.png'),
    title: 'Dimsum',
    description: 'descriptions...',
    location: 'Bitung',
    price: '20.000',
    ingredients: [
      {
        id: '1',
        name: 'daging ayam',
        image: require('../Images/dagingAyam.png'),
      },
      {
        id: '2',
        name: 'garlic',
        image: require('../Images/garlic.jpg'),
      },
      {
        id: '3',
        name: 'salt',
        image: require('../Images/salt.jpg'),
      },
      {
        id: '4',
        name: 'onion',
        image: require('../../Assets/Images/onion.jpg'),
      },
    ],
  },

  {
    id: '2',
    image: require('../Images/KueBasah.png'),
    title: 'Kue Basah',
    description: 'descriptions...',
    location: 'Aermadidi',
    price: '3.000',
    ingredients: [
      {
        id: '1',
        name: 'tepung',
        image: require('../Images/tepung.jpg'),
      },
      {
        id: '2',
        name: 'butter',
        image: require('../Images/butter.jpg'),
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
    image: require('../Images/frenchFries.png'),
    title: 'French Fries',
    description: 'descriptions...',
    location: 'Girian',
    price: '18.000',
    ingredients: [
      {
        id: '1',
        name: 'potato',
        image: require('../Images/potato.jpg'),
      },
      {
        id: '2',
        name: 'salt',
        image: require('../Images/salt.jpg'),
      },
      {
        id: '3',
        name: 'oil',
        image: require('../Images/oil.jpg'),
      },
      {
        id: '4',
        name: 'garlic',
        image: require('../Images/garlic.jpg'),
      },
    ],
  },
];

export default SnackData;
