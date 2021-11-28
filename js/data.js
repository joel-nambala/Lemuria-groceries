const vegetables = [
  {
    title: 'Potatoes',
    description:
      'Potatoes (Solanum tuberosum) are a starchy root vegetable that are among the most popular varieties of vegetable.',
    price: 240,
    img: 'https://images.pexels.com/photos/7774212/pexels-photo-7774212.jpeg?cs=srgb&dl=pexels-antara-verma-7774212.jpg&fm=jpg',
  },
  {
    title: 'Beets',
    description:
      'Beets (or, beetroot) is another example of a delicious root vegetable that is extremely good for you.',
    price: 340,
    img: 'https://images.pexels.com/photos/5502849/pexels-photo-5502849.jpeg?cs=srgb&dl=pexels-eva-elijas-5502849.jpg&fm=jpg',
  },
  {
    title: 'Carrots',
    description:
      'Carrots are another sweet type of root vegetable, and although we mostly think of carrots as an orange root vegetable, they come in a wide range of colors. You can buy purple carrots, black ones, red varieties, and yellow carrots.',
    price: 120,
    img: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?cs=srgb&dl=pexels-mali-maeder-143133.jpg&fm=jpg',
  },
  {
    title: 'Ginger',
    description:
      'Ginger is a type of root vegetable that we often use as a spice or herb to flavor Asian meals.',
    price: 50,
    img: 'https://images.pexels.com/photos/1337585/pexels-photo-1337585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    title: 'Garlic',
    description:
      'Garlic is one of the most popular varieties of bulb vegetables that is well-known for its pungent aroma and taste.',
    price: 60,
    img: 'https://images.pexels.com/photos/750948/pexels-photo-750948.jpeg?cs=srgb&dl=pexels-cats-coming-750948.jpg&fm=jpg',
  },
  {
    title: 'Onions',
    description:
      'There are many varieties of onions, and you can use them as bulb vegetable to flavor food.',
    price: 50,
    img: 'https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-144206.jpg&fm=jpg',
  },
  {
    title: 'Asparagus',
    description:
      'Asparagus is a type of green stem vegetable that many people call the tastiest vegetable on the planet.',
    price: 150,
    img: 'https://images.pexels.com/photos/42165/pexels-photo-42165.jpeg?cs=srgb&dl=pexels-mali-maeder-42165.jpg&fm=jpg',
  },
  {
    title: 'Cabbage',
    description:
      'Cabbage is an example of a large leafy vegetable that can grow to the size of a soccer ball.',
    price: 50,
    img: 'https://images.pexels.com/photos/257259/pexels-photo-257259.jpeg?cs=srgb&dl=pexels-pixabay-257259.jpg&fm=jpg',
  },
  {
    title: 'Beans',
    description:
      'Beans are an important type of vegetable seed because they are essential sources of plant-based protein.',
    price: 350,
    img: 'https://images.pexels.com/photos/4820677/pexels-photo-4820677.jpeg?cs=srgb&dl=pexels-cottonbro-4820677.jpg&fm=jpg',
  },
  {
    title: 'Lettuce',
    description:
      'Due to its high-water content and minimal number of calories, lettuce is a great food to eat if you are trying to lose weight. Lettuce leaves also make a great accompaniment in sandwiches or other types of meals.',
    price: 500,
    img: 'https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg?cs=srgb&dl=pexels-nastyasensei-1199562.jpg&fm=jpg',
  },
  {
    title: 'Kale',
    description:
      'Kale is on the list of green leafy vegetables that are also classed as a superfood. The reason why leafy kale has become such a popular vegetable is due to its nutritional profile.',
    price: 120,
    img: 'https://images.pexels.com/photos/51372/kale-vegetables-brassica-oleracea-var-sabellica-l-51372.jpeg?cs=srgb&dl=pexels-pixabay-51372.jpg&fm=jpg',
  },
];
const juice = [
  {
    title: 'Apple Juice',
    description:
      'The majority of apple juice is fortified with vitamin C. Vitamin C is crucial for the growth and repair of cells. It also helps heal wounds, builds strong teeth, skin, bones and cartilage and is critical to a healthy immune system.',
    price: 340,
    img: 'https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_52939276.jpeg',
  },
  {
    title: 'Beet Juice',
    description:
      'Beet juice is a good source of Vitamin C and potassium. Vitamin C is crucial for the growth and repair of cells. It also helps build strong bones, healthy teeth, skin, and cartilage, and is critical to a healthy immune system.',
    price: 520,
    img: 'https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_171157831.jpeg',
  },
  {
    title: 'Blueberry Juice',
    description:
      'Vitamin C is found in a variety of juices including blueberry juice. Vitamin C is crucial for the growth and repair of cells. It also helps in wound healing, builds strong teeth, skin, bone and cartilage and, is critical to a healthy immune system.',
    price: 450,
    img: 'https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_69825501.jpeg',
  },
  {
    title: 'Cranberry Juice',
    description:
      'The majority of cranberry juice is fortified with vitamin C. Vitamin C is crucial for the growth and repair of cells. It also helps heal wounds, builds strong teeth, skin, bones and cartilage and is critical to a healthy immune system.',
    price: 490,
    img: 'https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_60563044.jpeg',
  },
  {
    title: 'Carrot Juice',
    description:
      'Carrot juice is a good source of vitamin C, vitamin A (in the form of beta-carotene) and potassium. Vitamin C is crucial for the growth and repair of cells, as well as immune function. Vitamin A is important for immune function, reproductive and eye health.',
    price: 670,
    img: 'https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_105186479.jpeg',
  },
  {
    title: 'Grapefruit Juice',
    description:
      'Grapefruit juice is a good source of vitamin C and thiamin (vitamin B1). Vitamin C is crucial for the growth and repair of cells. It also helps build strong bones, healthy teeth, skin, and cartilage, and supports a healthy immune system. Thiamin, also known as vitamin B1, helps the body process energy from the food we eat and is important for muscle function and a healthy nervous system.',
    price: 500,
    img: 'https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_108708729.jpeg',
  },
  {
    title: 'Orange Juice',
    description:
      'Orange juice is a good source of vitamin C, thiamin, (vitamin B1), folate and potassium. Vitamin C is crucial for the growth and repair of cells. It also helps build strong bones, healthy teeth, skin, and cartilage, and is critical to a healthy immune system.',
    price: 550,
    img: 'https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_129600591.jpeg',
  },
  {
    title: 'Pineapple Juice',
    description:
      'Many pineapple juices are fortified with Vitamin C. Vitamin C is needed for the growth and repair of cells and is important for immune function. Pineapple juice is also a good source of potassium. Potassium is essential for managing the body’s fluid balance, supporting healthy blood pressure, nerve and muscle function.',
    price: 600,
    img: 'https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_59889233.jpeg',
  },
  {
    title: 'Tomato Juice',
    description:
      'Tomato juice is a good source of vitamin A, vitamin C and potassium. Vitamin A is important for immune function, reproductive and eye health. Vitamin C is needed for the growth and repair of cells and is important for immune function.',
    price: 350,
    img: 'https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_105977089.jpeg',
  },
];
const meat = [];
const fruit = [];

export { vegetables, juice, meat, fruit };
