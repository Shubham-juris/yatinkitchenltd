import React from "react";

const Menu = () => {
  const appetizersLeft = [
    {
      name: "Chaat Papdi",
      description: "Fried papdi mixed with chickpea, mint, tamarind & yogurt",
      price: "9.99",
    },
    {
      name: "Chana Chat",
      description:
        "Chickpeas mixed with onions, tomatoes, mint, tamarind & yogurt",
      price: "9.99",
    },
    {
      name: "Vegetable Pakora",
      description: "Mixed vegetables dipped in chickpea batter & deep fried",
      price: "9.99",
    },
  ];

  const appetizersRight = [
    {
      name: "Paneer Pakora",
      description: "Homemade cheese dipped in chickpea batter & fried",
      price: "12.99",
    },
    {
      name: "Tikki Chat",
      description:
        "Tikki covered with yogurt, tamarind, mint sauce & spices with chickpeas",
      price: "12.99",
    },
    {
      name: "Chicken Pakora",
      description: "Chicken dipped in batter & deep fried",
      price: "12.99",
    },
    {
      name: "Fish Pakora",
      description: "Fish dipped in batter & deep fried",
      price: "12.99",
    },
  ];
  const tandoorileft = [
    {
      name: "Panir Tikka",
      description: "cubed chees marinated in yogurt ,garlic and ginger",
      price: "13.99",
    },
    {
      name: "Mushroom Tikka",
      description: "Mushroom marinated in yogurt ,garlic and ginger",
      price: "15.99",
    },
    {
      name: "Chicken Tikka",
      description: "Rost chicken with the floor on indian spices",
      price: "14.99",
    },
  ];
  const tandooriright = [
    {
      name: "Fish Tikks",
      description: "marinated fish backed in tondoor",
      price: "14.99",
    },
    {
      name: "Tandoori Chicken",
      description: "marinated chicken backed in clay oven tondoor",
      price: "13.99",
    },
    {
      name: "Chicken kabab",
      description: "minced Chicken with spices and indian herbs",
      price: "12.99",
    },
    {
      name: "Lamb kabab",
      description: "Minced lamb with spices and indian herbs",
      price: "15.99",
    },
  ];
  const Saladleft = [
    {
      name: "Toosted Salad",
      description: "rumain lettuce,tomato,cucumber and carrots ",
      price: "8.99",
    },
    {
      name: "Cream Salad",
      description: "cabbage and carrot ,sour cream with cheese",
      price: "9.99",
    },
    {
      name: "Family salad",
      description: "Green veggies",
      price: "8.99",
    },
  ];
  const Saladright = [
    {
      name: "Tossed salad lunch",
      description: "with garlic toast and shup of the day",
      price: "4.99",
    },
    {
      name: "Caesar salad large",
      description: "with garlic toast",
      price: "9.99",
    },
    {
      name: "Add grilled chicken",
      description: "",
      price: "5.99",
    },
    {
      name: "Add Steak",
      description: "",
      price: "7",
    },
  ];
  const Vegileft = [
    {
      name: "Paneer Tikka Masala",
      description:
        "cubbed cheese cooked in a tndoori clay oven with tomato sause ,onions & bell pappers ",
      price: "8.99",
    },
    {
      name: "Paneer Kadhai",
      description:
        "Homemade cheese cooked  in onion sause,tamatos bell pappers and gingr",
      price: "9.99",
    },
    {
      name: "Cream Paneer",
      description: "paneer minced  with creamy gravy",
      price: "8.99",
    },
    {
      name: "Mixed Vegetable Curry",
      description: "seasonal vegetables cooked with curry sause",
      price: "8.99",
    },
    {
      name: "Dal Tadka",
      description: "Red lentils cookedwith onions and tomatoes",
      price: "8.99",
    },
    {
      name: "Dal Makhani",
      description: "Lentils and beans cooked  in a creamy butter sause",
      price: "8.99",
    },
    {
      name: "Channa Masala",
      description: "Chikpeas, tomatoes & onions in rich  sause ",
      price: "8.99",
    },
  ];
  const Vegiright = [
    {
      name: "Bhindi Masala",
      description: "Okra sauteed with onions and tomatoes",
      price: "4.99",
    },
    {
      name: "Alu Gobi",
      description: "Special Spiced potetoes, cauliflowers, onions and tomatoes",
      price: "9.99",
    },
    {
      name: "Palak Paneer",
      description: "freshed chopped spinach and homemade cheese",
      price: "5.99",
    },
    {
      name: "Matar paneer",
      description: "",
      price: "7",
    },
    {
      name: "Channa Paneer",
      description: "",
      price: "7",
    },
  ];
  const breads = [
    {
      name: "Naan",
      description: "Traditional Indian white bread",
      price: "2.49",
    },
    { name: "Roti", description: "Whole wheat bread", price: "2.49" },
    {
      name: "Parantha",
      description: "Whole wheat bread with butter",
      price: "2.99",
    },
    {
      name: "Garlic Naan",
      description: "White bread baked with garlic and cilantro",
      price: "3.99",
    },
    {
      name: "Cheese Naan",
      description: "White bread stuffed with grated Indian cheese",
      price: "3.99",
    },
    {
      name: "Alu Naan",
      description: "White bread baked with seasoned potatoes and peas",
      price: "3.99",
    },
    {
      name: "Onion Kulcha",
      description: "White bread stuffed with lightly spiced onion",
      price: "3.99",
    },
    {
      name: "Alu Parantha",
      description: "White bread stuffed with seasonal potatoes and peas",
      price: "3.99",
    },
    {
      name: "Gobi Prantha",
      description: "Whole wheat bread stuffed with cauliflower",
      price: "3.99",
    },
    {
      name: "Keema Naan",
      description: "Whole wheat bread stuffed with kabab",
      price: "4.49",
    },
    {
      name: "Kashmiri Naan",
      description:
        "White bread stuffed with sweet chutney, raisins and cashews",
      price: "4.49",
    },
    {
      name: "Bread Basket",
      description: "Assorted Indian breads",
      price: "7.99",
    },
  ];
  const chineseItems = [
    {
      name: "Chilli Paneer",
      description:
        "Cheese cooked in sweet and tangy sauce, onions & bell pepper",
      price: "14.99",
    },
    {
      name: "Noodles",
      description: "Noodles cooked in green pepper, onion & Masala",
      price: "10.99",
    },
    {
      name: "Veg Manchurian",
      description:
        "Vegetables fried batter balls tossed in sauce, dry or with gravy",
      price: "12.99",
    },
    {
      name: "Chilly Chicken",
      description:
        "Dry Chicken assorted with Indian spices, onions, & green pepper",
      price: "14.99",
    },
    {
      name: "Chicken Manchurian",
      description: "Chicken balls fried with gravy & hot sauce",
      price: "14.99",
    },
    {
      name: "Wok Platter",
      description:
        "Green vegetables and chicken tossed with soya sauce and other sauces",
      price: "14.99",
    },
    {
      name: "Fried Rice and Manchurian Balls",
      description: "Fried basmati rice served with vegetable balls",
      price: "12.99",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 mt-20">
      <h2 className="text-2xl font-semibold text-center border-t border-b border-orange-300 py-4 text-orange-500">
        Menu
      </h2>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-orange-500 mb-4">Appetizers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {appetizersLeft.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div>
            {appetizersRight.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-bold text-orange-500 mb-4">
          Tandoori dishes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {tandoorileft.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div>
            {tandooriright.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-bold text-orange-500 mb-4">Salad</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {Saladleft.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div>
            {Saladright.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-bold text-orange-500 mb-4">
          Vegetable speciailtes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {Vegileft.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div>
            {Vegiright.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-15">
        <h2 className="text-3xl font-semibold text-orange-500 mb-4 ">
          Tandoori Breads
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          {breads.map((item, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <span className="text-md font-semibold">${item.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-orange-500 mb-4">
          Chinese (Indian style)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {chineseItems.map((item, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <span className="text-md font-semibold">${item.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
      <h2 className="text-3xl font-semibold text-orange-500 mb-4">Rice</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="font-medium">Vegetable Biryani</p>
          <p className="text-sm text-gray-600">
            Fresh vegetables in a lightly spiced sauce with herbs, baked with
            basmati rice
          </p>
          <p className="font-semibold mt-1">$9.99</p>
        </div>
        <div>
          <p className="font-medium">Jeera and Green peas rice</p>
          <p className="font-semibold mt-1">$3.99</p>
        </div>
        <div>
          <p className="font-medium">Basmati Rice</p>
          <p className="text-sm text-gray-600">White rice</p>
          <p className="font-semibold mt-1">$2.99</p>
        </div>
        <div>
          <p className="font-medium">Non veg Biryani</p>
          <p className="font-semibold mt-1">$12.99</p>
        </div>
        <div />
        <div>
          <p className="font-medium">Egg Biryani</p>
          <p className="font-semibold mt-1">$11.99</p>
        </div>
      </div>

      <hr className="border-gray-300 my-6" />

      {/* Section: Pastas */}
      <h2 className="text-3xl font-semibold text-orange-500 mb-4">Pastas</h2>
      <p className="text-sm text-gray-700 mb-4">
        All of our pasta comes with garlic toast and your choice of marinara
        sauce, Home Style Meat Sauce or Alfredo sauce. You may also have your
        pasta baked and topped with a special blend of Mozzarella Cheese
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium">Spaghetti</p>
          <p className="font-semibold mt-1">$13.99</p>
        </div>
        <div>
          <p className="font-medium">Chicken Lasagna</p>
          <p className="font-semibold mt-1">$16.45</p>
        </div>
        <div>
          <p className="font-medium">Spaghetti & Meat balls</p>
          <p className="font-semibold mt-1">$15.70</p>
        </div>
        <div>
          <p className="font-medium">Greek Lasagna</p>
          <p className="text-sm text-gray-600">Black Olives and Feta Cheese</p>
          <p className="font-semibold mt-1">$14.45</p>
        </div>
        <div>
          <p className="font-medium">Fettuccine Lasagna Alfredo</p>
          <p className="font-semibold mt-1">$13.45</p>
        </div>
        <div>
          <p className="font-medium">Lasagna Florentine</p>
          <p className="text-sm text-gray-600">Spinach and Feta Cheese</p>
          <p className="font-semibold mt-1">$14.45</p>
        </div>
        <div>
          <p className="font-medium">Lasagna</p>
          <p className="font-semibold mt-1">$13.95</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Menu;
