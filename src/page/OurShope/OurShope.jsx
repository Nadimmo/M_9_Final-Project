import React from "react";

const OurShop = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('https://i.ibb.co.com/4ptr90V/03.png')" }}
      >
        <div className="bg-gradient-to-b from-black/50 to-transparent h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Welcome to Our Restaurant
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto my-16 px-5">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-teal-600">
          About Us
        </h2>
        <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed text-gray-700">
          Discover a world of flavor at our restaurant, where we craft each dish
          with passion and the freshest ingredients. Join us for an unforgettable
          dining experience, blending exquisite tastes and a welcoming ambiance.
        </p>
      </div>

      {/* Featured Menu Section */}
      <div className="bg-gradient-to-b from-teal-100 via-white to-teal-100 p-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-teal-600">
            Our Featured Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Salad */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://i.ibb.co.com/SvD8sVf/salad-bg.jpg"
                alt="Salad"
                className="rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Fresh Garden Salad</h3>
              <p className="text-gray-600 mb-4">
                A mix of fresh vegetables topped with a light vinaigrette.
              </p>
              <p className="font-bold text-teal-600 text-lg">$7.99</p>
            </div>
            {/* Pizza */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://i.ibb.co.com/HDHFrCL/pizza-bg.jpg"
                alt="Pizza"
                className="rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Classic Margherita Pizza</h3>
              <p className="text-gray-600 mb-4">
                A timeless favorite with fresh mozzarella, basil, and tomato sauce.
              </p>
              <p className="font-bold text-teal-600 text-lg">$16.99</p>
            </div>
            {/* Desserts */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://i.ibb.co.com/N78Rs8r/dessert-bg.jpg"
                alt="Dessert"
                className="rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Chocolate Lava Cake</h3>
              <p className="text-gray-600 mb-4">
                Warm, gooey chocolate cake served with vanilla ice cream.
              </p>
              <p className="font-bold text-teal-600 text-lg">$15.99</p>
            </div>
            {/* Soup */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://i.ibb.co.com/xSqJhFy/soup-bg.jpg"
                alt="Soup"
                className="rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Creamy Tomato Soup</h3>
              <p className="text-gray-600 mb-4">
                Rich and creamy soup served with a side of garlic bread.
              </p>
              <p className="font-bold text-teal-600 text-lg">$14.99</p>
            </div>
            {/* Drinks */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://i.ibb.co.com/yRdwbTR/banner3.jpg"
                alt="Drinks"
                className="rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Refreshing Drinks</h3>
              <p className="text-gray-600 mb-4">
                A variety of chilled beverages to complement your meal.
              </p>
              <p className="font-bold text-teal-600 text-lg">$8.99</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-900 text-white p-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-teal-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Fresh Ingredients</h3>
              <p>
                We use only the freshest and highest-quality ingredients to prepare our dishes, ensuring an unforgettable taste experience.
              </p>
            </div>
            {/* Reason 2 */}
            <div className="bg-teal-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Friendly Atmosphere</h3>
              <p>
                Our restaurant provides a welcoming and comfortable environment for families, friends, and special occasions.
              </p>
            </div>
            {/* Reason 3 */}
            <div className="bg-teal-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Exceptional Service</h3>
              <p>
                Our staff is dedicated to providing top-notch service to make your dining experience truly special.
              </p>
            </div>
            {/* Reason 4 */}
            <div className="bg-teal-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Affordable Prices</h3>
              <p>
                Enjoy premium quality dishes and beverages at prices that won’t break the bank.
              </p>
            </div>
            {/* Reason 5 */}
            <div className="bg-teal-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Diverse Menu</h3>
              <p>
                Our menu offers a wide variety of options, including vegetarian, vegan, and gluten-free dishes.
              </p>
            </div>
            {/* Reason 6 */}
            <div className="bg-teal-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Great Location</h3>
              <p>
                Located in the heart of the city, we are easily accessible and perfect for any occasion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
