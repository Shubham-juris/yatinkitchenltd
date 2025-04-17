import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const categoryVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
};

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
      name: "Dads Fish Bites  ",
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
      name: "Dads Fish Bites  ",
      description: "Breaded in house and deep-fried basa fish bites",
      price: "$12.95",
    },
    {
      name: "Potato Skins",
      description: "Served with salsa and sour cream",
      price: "$12.95",
    },
  ];
  const barFoodMenu = [
    {
      title: "Upgrade to Onion rings, Yam Fries, Caesar Salad, Garden Salad, Poutine Make",
      price: "$19.95",
      details: "",
    },
    {
      title: "8oz burger Spring mix, Tomato, Pickles, Onions, Hot peppers, Mushroom, Ched",
      price: "$19.95",
      details: "Extra patty – $6.00 <br /> Salmon (breaded and deep-fried) – $6.00 <br /> Bacon – $4.00",
    },
    {
      title: "Dad’s Fish and Chips",
      price: "$18.95",
      details: "This recipe has been used for over 30 years. <br /> Basa Fish lightly coated served on a bed cabbage and fries.",
    },
    {
      title: "Sweet Chili Mayo Quesadilla",
      price: "$16.95",
      details: "Chicken or Shrimp Spring mix, Bell Pepper, Tomato, Shredded Mozza, Sweet Chili Mayo Quesadilla, <br /> (fries not included)",
    },
  ];

  const kidsAndDessertMenu = [
    { title: "Kids Spaghetti", price: "$13.95", description: "Noodles in marinara sauce with parmesan cheese" },
    { title: "Kids Grill Cheese and Fries", price: "$13.95", description: "Add a description about this item" },
    { title: "Kids Fish and Chips", price: "$13.95", description: "Add a description about this item" },
    { title: "3 tacos", price: "$2.99", description: "3 hard shell taco with taco beef, spring mix, cheese and sour cream" },
  ];

  const kidsMenuOnly = [
    { title: "Kids Spaghetti", price: "$13.95", description: "Noodles in marinara sauce with parmesan cheese" },
    { title: "Kids Grill Cheese and Fries", price: "$13.95", description: "Add a description about this item" },
    { title: "Kids Fish and Chips", price: "$13.95", description: "Add a description about this item" },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md mt-18"
      initial="hidden"
      animate="visible"
      variants={categoryVariants}
    >
      <motion.h1
        className="text-3xl font-bold text-center text-amber-500 border-b-2 border-amber-500 pb-2 mb-6"
        variants={titleVariants}
      >
        Yatin's Gastro pub
      </motion.h1>

      <motion.div variants={categoryVariants}>
        <motion.h2 className="text-xl font-semibold text-amber-500 mb-2" variants={titleVariants}>
          Appetizers
        </motion.h2>
        <motion.p className="text-sm text-gray-500 mb-6" variants={titleVariants}>
          Add a description about this category
        </motion.p>

        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-start mb-6 border-b pb-4"
            variants={itemVariants}
          >
            <div>
              <div className="font-semibold text-lg">{item.name}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </div>
            <div className="font-semibold text-gray-800 ml-4 whitespace-nowrap">
              {item.price}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-15" variants={categoryVariants}>
        <motion.h3 className="text-2xl font-bold text-orange-500" variants={titleVariants}>
          Drinks
        </motion.h3>
        <motion.p className="text-sm text-gray-500 mb-6" variants={titleVariants}>
          Alcoholic And None-Alcoholic
        </motion.p>

        {Drinks.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-start mb-6 border-b pb-4"
            variants={itemVariants}
          >
            <div>
              <div className="font-semibold text-lg">{item.name}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </div>
            <div className="font-semibold text-gray-800 ml-4 whitespace-nowrap">
              {item.price}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md mt-10" variants={categoryVariants}>
        <motion.div className="text-center mb-8" variants={titleVariants}>
          <h2 className="text-lg font-semibold text-gray-700">All day everyday</h2>
          <div className="text-sm text-gray-600 space-y-1 mt-2">
            <p className="font-medium">Weekly Events</p>
            <p>
              Tuesday Ladies Night Karaoke 1oz House Hi-Ball $4.00 | 1oz Tequila $4.00 Saturday
            </p>
            <p>Live Entertainment</p>
            <p>Sunday All Ages Jam</p>
            <p>
              This is a kitchen type jam <br /> crowd participation is encouraged
            </p>
            <p>We start at 1pm and play till everyone is done!</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md mt-10" variants={categoryVariants}>
        <motion.h1 className="text-2xl font-bold text-amber-500 border-b-2 border-amber-500 pb-2 mb-4 text-center" variants={titleVariants}>
          Bar food Menu
        </motion.h1>
        <motion.h2 className="text-xl font-semibold text-amber-500 mb-1" variants={titleVariants}>
          Burgers Sandwiches / Wraps
        </motion.h2>
        <motion.p className="text-sm text-gray-500 mb-6" variants={titleVariants}>
          Served with Fries or soup
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {barFoodMenu.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="flex justify-between mb-2">
                <p className="text-gray-800 font-medium">{item.title}</p>
                <span className="font-semibold">{item.price}</span>
              </div>
              <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: item.details }} />
              {index === 1 && (
                <div className="text-sm text-gray-600 mt-4">
                  <p>
                    <span className="font-semibold">Extra patty</span> – $6.00
                  </p>
                  <p>
                    <span className="font-semibold">Salmon (breaded and deep-fried)</span> – $6.00
                  </p>
                  <p>
                    <span className="font-semibold">Bacon</span> – $4.00
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="max-w-5xl mx-auto bg-white p-6 md:p-10 mt-10 rounded-2xl shadow" variants={categoryVariants}>
        <motion.h1 className="text-2xl font-bold text-amber-500 mb-6" variants={titleVariants}>
          Desert and kids menu
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {kidsAndDessertMenu.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="flex justify-between mb-2">
                <p className="text-gray-800 font-medium">{item.title}</p>
                <span className="font-semibold">{item.price}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <hr className="my-8 border-amber-300" />

        <motion.h2 className="text-xl font-bold text-amber-500 mb-6" variants={titleVariants}>
          Kids menu
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {kidsMenuOnly.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="flex justify-between mb-2">
                <p className="text-gray-800 font-medium">{item.title}</p>
                <span className="font-semibold">{item.price}</span>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gastropub;