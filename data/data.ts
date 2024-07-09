export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity?: number;
}

export const data = {
  snacks: [
    {
      id: 1,
      title: "Chief Burger",
      image: "/images/snacks1.png",
      price: 5,
    },
    {
      id: 2,
      title: "Egg Roll",
      image: "/images/snacks2.png",
      price: 5,
    },
    {
      id: 3,
      title: "Sharwama",
      image: "/images/snacks3.png",
      price: 5,
    },
    {
      id: 4,
      title: "Chicken Pie",
      image: "/images/snacks4.png",
      price: 5,
    },
  ],
  soups: [
    {
      id: 5,
      title: "Vegetable Soup",
      image: "/images/soup1.png",
      price: 5,
    },
    {
      id: 6,
      title: "Oha Soup",
      image: "/images/soup2.png",
      price: 5,
    },
    {
      id: 7,
      title: "Egusi Soup",
      image: "/images/soup3.png",
      price: 5,
    },
    {
      id: 8,
      title: "Vegetable Soup",
      image: "/images/soup4.png",
      price: 5,
    },
  ],
  meals: [
    {
      id: 9,
      title: "Jollof Rice",
      image: "/images/Meal1.png",
      price: 5,
    },
    {
      id: 10,
      title: "Fried Rice",
      image: "/images/Meal2.png",
      price: 5,
    },
    {
      id: 11,
      title: "Beans & Plantain",
      image: "/images/Meal3.png",
      price: 5,
    },
    {
      id: 12,
      title: "Noodles",
      image: "/images/Meal4.png",
      price: 5,
    },
  ],
  salad: [
    {
      id: 13,
      title: "Chicken Salad",
      image: "/images/salad1.png",
      price: 5,
    },
    {
      id: 14,
      title: "Coleslaw Salad",
      image: "/images/salad2.png",
      price: 5,
    },
    {
      id: 15,
      title: "Vegetable Salad",
      image: "/images/salad3.png",
      price: 5,
    },
    {
      id: 16,
      title: "Fruit Salad",
      image: "/images/salad4.png",
      price: 5,
    },
  ],

  ImageText: {
    image: "/images/chef.png",
    subheading: "What they say",
    heading: "What Our Customers Say About Us",
    paragraph:
      "“Master Chef is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivery. I highly recommend Master Chef  to you”.",
    userName: "Teresa Jordan",
    userImage: "/images/TeresaJordan.svg",
    userTag: "Foodie",
    rating: 4.8,
  },
};
