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
      description: "cubbed cheese cooked in a tndoori clay oven with tomato sause ,onions & bell pappers ",
      price: "8.99",
    },
    {
      name: "Paneer Kadhai",
      description: "Homemade cheese cooked  in onion sause,tamatos bell pappers and gingr",
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

  return (
    <div className="max-w-5xl mx-auto p-6">
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
    </div>
  );
};

export default Menu;
