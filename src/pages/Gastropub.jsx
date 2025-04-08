import React from "react";

const Gastropub = () => {
  const menuItems = [
    {
      name: "Nachos",
      description:
        "Homemade nacho chips topped with onions, bell peppers, tomato, black olives, jalapeno, cheese blend",
      price: "$19.95",
    },
    {
      name: "Cheese Sticks",
      description:
        "Made in house breaded deep-fried cheese Served with chipotle",
      price: "$16.95",
    },
    {
      name: "Pickle Chips",
      description: "Made in house breaded deep-fried dill pickles and ranch",
      price: "$12.95",
    },
    {
      name: "Boneless Dry Ribs",
      description: "Breaded pork bites and honey mustard",
      price: "$12.95",
    },
    {
      name: "Deep Fried Mushrooms",
      description: "Made in house breaded deep-fried cheese and chipotle",
      price: "$12.95",
    },
    {
      name: "Wings",
      description: "Served with celery,carrots and cucumber",
      price: "$12.95",
    },
    {
      name: "Spinach Dip",
      description: "Baked spinach dip made in house served with nacho chips",
      price: "$12.95",
    },
    {
      name: "Dads Fish Bites  ",
      description: "Breaded in house and deep-fried basa fish bites",
      price: "$12.95",
    },
    {
      name: "Potato Skins",
      description: "Served with salsa and sour cream",
      price: "$12.95",
    },
  ];
  const Drinks = [
    {
      name: "Pop,Tea,Coffee",
      description: "Beverages served both hot and cold",
      price: "$19.95",
    },
    {
      name: "Coke,Sprit,Diet Cake,Ginger ale,Strawberry Fruitopia,Root bear,IceTe",
      description: "None-Alcoholic",
      price: "$16.95",
    },
    {
      name: "",
      description: "Made in house breaded deep-fried dill pickles and ranch",
      price: "$12.95",
    },
    {
      name: "Boneless Dry Ribs",
      description: "Breaded pork bites and honey mustard",
      price: "$12.95",
    },
    {
      name: "Deep Fried Mushrooms",
      description: "Made in house breaded deep-fried cheese and chipotle",
      price: "$12.95",
    },
    {
      name: "Wings",
      description: "Served with celery,carrots and cucumber",
      price: "$12.95",
    },
    {
      name: "Spinach Dip",
      description: "Baked spinach dip made in house served with nacho chips",
      price: "$12.95",
    },
    {
      name: "Dads Fish Bites  ",
      description: "Breaded in house and deep-fried basa fish bites",
      price: "$12.95",
    },
    {
      name: "Potato Skins",
      description: "Served with salsa and sour cream",
      price: "$12.95",
    },
  ];
  return (
    <>
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md mt-10">
        <h1 className="text-3xl font-bold text-center text-amber-700 border-b-2 border-amber-700 pb-2 mb-6">
          Yatin's Gastro pub
        </h1>

        <h2 className="text-xl font-semibold text-amber-700 mb-2">
          Appetizers
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Add a description about this category
        </p>

        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start mb-6 border-b pb-4"
          >
            <div>
              <div className="font-semibold text-lg">{item.name}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </div>
            <div className="font-semibold text-gray-800 ml-4 whitespace-nowrap">
              {item.price}
            </div>
          </div>
        ))}

        <div className="mt-15">
          <h3 className="text-2xl font-bold text-orange-500">Drinks</h3>
          <p className="text-sm text-gray-500 mb-6">
            Alcoholic And None-Alcoholic
          </p>

          {Drinks.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start mb-6 border-b pb-4"
            >
              <div>
                <div className="font-semibold text-lg">{item.name}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
              <div className="font-semibold text-gray-800 ml-4 whitespace-nowrap">
                {item.price}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md ">
          <div className="text-center ">
            <h2 className="text-lg font-semibold text-gray-700">
              All day everyday
            </h2>
            <div className="text-sm text-gray-600 space-y-1 mt-2">
              <p className="font-medium">Weekly Events</p>
              <p>
                Tuesday Ladies Night Karaoke 1oz House Hi-Ball $4.00 | 1oz
                Tequila $4.00 Saturday
              </p>
              <p>Live Entertainment</p>
              <p>Sunday All Ages Jam</p>
              <p>
                This is a kitchen type jam
                <br />
                crowd participation is encouraged
              </p>
              <p>We start at 1pm and play till everyone is done!</p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md ">
          <h1 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-700 pb-2 mb-4 text-center">
            Bar food Menu
          </h1>
          <h2 className="text-xl font-semibold text-amber-700 mb-1">
            Burgers Sandwiches / Wraps
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Served with Fries or soup
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-800">
                  Upgrade to Onion rings, Yam Fries, Caesar Salad, Garden Salad,
                  Poutine Make
                </p>
                <span className="font-semibold">$19.95</span>
              </div>
              <div className="flex justify-between mt-10 mb-2">
                <p className="text-gray-800">
                  8oz burger Spring mix, Tomato, Pickles, Onions, Hot peppers,
                  Mushroom, Ched
                  <br />
                  <span className="text-sm text-gray-600">
                    Extra patty – $6.00
                    <br />
                    Salmon (breaded and deep-fried) – $6.00
                    <br />
                    Bacon – $4.00
                  </span>
                </p>
                <span className="font-semibold">$19.95</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-800 font-semibold">
                  Dad’s Fish and Chips
                  <br />
                  <span className="text-sm text-gray-600">
                    This recipe has been used for over 30 years.
                    <br />
                    Basa Fish lightly coated served on a bed cabbage and fries.
                  </span>
                </p>
                <span className="font-semibold">$18.95</span>
              </div>
              <div className="flex justify-between mb-2 mt-5">
                <p className="text-gray-800 font-semibold">
                  Sweet Chili Mayo Quesadilla
                  <br />
                  <span className="text-sm text-gray-600">
                    Chicken or Shrimp Spring mix, Bell Pepper, Tomato, Shredded
                    Mozza, Sweet Chili Mayo Quesadilla,
                    <br />
                    (fries not included)
                  </span>
                </p>
                <span className="font-semibold">$16.95</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 mt-10 rounded-2xl shadow">
          <h1 className="text-2xl font-bold text-amber-700 mb-6">
            Desert and kids menu
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-800 font-medium">Kids Spaghetti</p>
                <span className="font-semibold">$13.95</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Noodles in marinara sauce with parmesan cheese
              </p>

              <div className="flex justify-between mb-2">
                <p className="text-gray-800 font-medium">
                  Kids Grill Cheese and Fries
                </p>
                <span className="font-semibold">$13.95</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Add a description about this item
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-800 font-medium">Kids Fish and Chips</p>
                <span className="font-semibold">$13.95</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Add a description about this item
              </p>

              <div className="flex justify-between mb-2">
                <p className="text-gray-800 font-medium">3 tacos</p>
                <span className="font-semibold">$2.99</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                3 hard shell taco with taco beef, spring mix, cheese and sour
                cream
              </p>
            </div>
          </div>

          <hr className="my-8 border-amber-300" />

          <h2 className="text-xl font-bold text-amber-700 mb-6">Kids menu</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-800 font-medium">Kids Spaghetti</p>
                <span className="font-semibold">$13.95</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Noodles in marinara sauce with parmesan cheese
              </p>

              <div className="flex justify-between mb-2">
                <p className="text-gray-800 font-medium">
                  Kids Grill Cheese and Fries
                </p>
                <span className="font-semibold">$13.95</span>
              </div>
              <p className="text-sm text-gray-600">
                Add a description about this item
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-800 font-medium">Kids Fish and Chips</p>
                <span className="font-semibold">$13.95</span>
              </div>
              <p className="text-sm text-gray-600">
                Add a description about this item
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gastropub;
