const FoodsData = [
  {
    id: '1',
    image: require('../Images/mieAyam.png'),
    title: 'Mie Ayam Garuda',
    description: 'descriptions...',
    location: 'Manado',
    price: '15.000',
    ingredients: [
      {
        id: '1',
        name: 'mie',
        image: require('../Images/Mie.png'),
      },
      {
        id: '2',
        name: 'daging ayam',
        image: require('../Images/dagingAyam.png'),
      },
      {
        id: '3',
        name: 'sayur sawi',
        image: require('../Images/sayurSawi.png'),
      },
      {
        id: '4',
        name: 'garlic',
        image: require('../Images/garlic.jpg'),
      },
    ],
  },

  {
    id: '2',
    image: require('../Images/IkanBakar.png'),
    title: 'Ikan Bakar Tampurung',
    description: 'descriptions...',
    location: 'Bitung',
    price: '25.000',
    ingredients: [
      {
        id: '1',
        name: 'fish',
        image: require('../Images/fish.jpg'),
      },
      {
        id: '2',
        name: 'chili',
        image: require('../Images/chili.jpg'),
      },
      {
        id: '3',
        name: 'lime',
        image: require('../Images/lime.jpg'),
      },
      {
        id: '4',
        name: 'onion',
        image: require('../Images/onion.jpg'),
      },
    ],
  },

  {
    id: '3',
    image: require('../Images/Lobster.png'),
    title: 'Lobster',
    description: 'descriptions...',
    location: 'Manado',
    price: '150.000',
    ingredients: [
      {
        id: '1',
        name: 'Lobster',
        image: require('../Images/lobsterraw.jpg'),
      },
      {
        id: '2',
        name: 'lime',
        image: require('../Images/lime.jpg'),
      },
      {
        id: '3',
        name: 'garlic',
        image: require('../Images/garlic.jpg'),
      },
      {
        id: '4',
        name: 'oil',
        image: require('../Images/oil.jpg'),
      },
    ],
  },
];

export default FoodsData;
