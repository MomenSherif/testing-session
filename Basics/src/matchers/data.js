export const user = {
  name: 'momen',
  age: 26,
  skills: ['html', 'css', 'js'],
};

export const todo = {
  title: 'todo title',
  description: 'todo description',
  createdAt: new Date(),
};

export const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
    'nice.oven': true,
  },
  livingRoom: {
    couch: [
      ['large', { dimensions: [20, 20] }],
      ['small', { dimensions: [10, 10] }],
    ],
  },
  'ceiling.height': 2,
};
