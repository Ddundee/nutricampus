const foodData = [
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Toast",
        "protein": 6,
        "fat": 3,
        "carbs": 33,
        "time": "breakfast"
    },
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Halal Chicken Sausage Links",
        "protein": 13,
        "fat": 7,
        "carbs": 1,
        "time": "breakfast"
    },
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Scrambled Eggs",
        "protein": 11,
        "fat": 12,
        "carbs": 0,
        "time": "breakfast"
    },
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Herb Roasted breakfast Potatoes",
        "protein": 1,
        "fat": 8,
        "carbs": 15,
        "time": "breakfast"
    },
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Pumpkin Pancakes",
        "protein": 2,
        "fat": 1,
        "carbs": 16,
        "time": "breakfast"
    },
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Sauteed Mixed Peppers & Onions",
        "protein": 0,
        "fat": 0,
        "carbs": 2,
        "time": "breakfast"
    },
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Scrambled Tofu",
        "protein": 13,
        "fat": 10,
        "carbs": 4,
        "time": "breakfast"
    },
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Blueberry Muffins",
        "protein": 2,
        "fat": 7,
        "carbs": 23,
        "time": "breakfast"
    },
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Vanilla Glazed Donuts",
        "protein": 4,
        "fat": 16,
        "carbs": 41,
        "time": "breakfast"
    },
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Churros",
        "protein": 1,
        "fat": 5,
        "carbs": 30,
        "time": "breakfast"
    },
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Apple Cider",
        "protein": 0,
        "fat": 0,
        "carbs": 24,
        "time": "breakfast"
    },
    {
        "restaurantName": "Campus Cafe",
        "foodName": "Oatmeal",
        "protein": 6,
        "fat": 3,
        "carbs": 33,
        "time": "breakfast"
    },
    {
        "restaurantName": "Italian Bistro",
        "foodName": "Italian Local Chicken",
        "protein": 17,
        "fat": 16,
        "carbs": 1,
        "time": "lunch"
    },
    {
        "restaurantName": "Italian Bistro",
        "foodName": "Roasted Broccoli",
        "protein": 2,
        "fat": 2,
        "carbs": 6,
        "time": "lunch"
    },
    {
        "restaurantName": "Italian Bistro",
        "foodName": "Brown Rice",
        "protein": 4,
        "fat": 1,
        "carbs": 34,
        "time": "lunch"
    },
    {
        "restaurantName": "Italian Bistro",
        "foodName": "Cheese Lasagna Rollups",
        "protein": 13,
        "fat": 14,
        "carbs": 35,
        "time": "lunch"
    },
    {
        "restaurantName": "Italian Bistro",
        "foodName": "Beef Stroganoff",
        "protein": 12,
        "fat": 6,
        "carbs": 4,
        "time": "lunch"
    },
    {
        "restaurantName": "Italian Bistro",
        "foodName": "Wide Egg Noodles",
        "protein": 3,
        "fat": 1,
        "carbs": 14,
        "time": "lunch"
    },
    {
        "restaurantName": "Campus Snack Bar",
        "foodName": "Maize & Blue Bars",
        "protein": 4,
        "fat": 12,
        "carbs": 32,
        "time": "lunch"
    },
    {
        "restaurantName": "Campus Snack Bar",
        "foodName": "Baked Sweet Potato Pudding",
        "protein": 3,
        "fat": 9,
        "carbs": 26,
        "time": "lunch"
    },
    {
        "restaurantName": "Caribbean Grill",
        "foodName": "Grilled Jerk Pork w/ Curry Mango Relish",
        "protein": 24,
        "fat": 10,
        "carbs": 5,
        "time": "dinner"
    },
    {
        "restaurantName": "Caribbean Grill",
        "foodName": "Caribbean Pink Beans with Plantains",
        "protein": 3,
        "fat": 1,
        "carbs": 11,
        "time": "dinner"
    },
    {
        "restaurantName": "Asian Fusion",
        "foodName": "Taiwanese Three Cup Stir Fry with Tofu",
        "protein": 16,
        "fat": 16,
        "carbs": 11,
        "time": "dinner"
    },
    {
        "restaurantName": "Asian Fusion",
        "foodName": "Jasmine Rice",
        "protein": 4,
        "fat": 0,
        "carbs": 34,
        "time": "dinner"
    },
    {
        "restaurantName": "Asian Fusion",
        "foodName": "Roasted Zucchini & Red Onion",
        "protein": 1,
        "fat": 0,
        "carbs": 4,
        "time": "dinner"
    },
    {
        "restaurantName": "East Quad",
        "foodName": "Hot Cereal (Oatmeal)",
        "protein": 6,
        "fat": 3,
        "carbs": 33,
        "time": "breakfast"
    },
    {
        "restaurantName": "East Quad",
        "foodName": "Scrambled Eggs",
        "protein": 11,
        "fat": 12,
        "carbs": 0,
        "time": "breakfast"
    },
    {
        "restaurantName": "East Quad",
        "foodName": "Scrambled Tofu",
        "protein": 13,
        "fat": 10,
        "carbs": 4,
        "time": "breakfast"
    },
    {
        "restaurantName": "East Quad",
        "foodName": "Herbed Roasted breakfast Potatoes",
        "protein": 2,
        "fat": 8,
        "carbs": 15,
        "time": "breakfast"
    },
    {
        "restaurantName": "East Quad",
        "foodName": "Halal Chicken Sausage Links",
        "protein": 13,
        "fat": 7,
        "carbs": 1,
        "time": "breakfast"
    },
    {
        "restaurantName": "East Quad",
        "foodName": "Texas French Toast",
        "protein": 14,
        "fat": 13,
        "carbs": 32,
        "time": "breakfast"
    },
    {
        "restaurantName": "East Quad",
        "foodName": "Blueberry Sauce",
        "protein": 0,
        "fat": 0,
        "carbs": 6,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bakery",
        "foodName": "Glazed Sour Cream Donut Holes",
        "protein": 1,
        "fat": 5,
        "carbs": 12,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bakery",
        "foodName": "Chocolate Glazed Donuts",
        "protein": 4,
        "fat": 16,
        "carbs": 40,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bakery",
        "foodName": "Chocolate Chocolate Chip Muffins",
        "protein": 2,
        "fat": 8,
        "carbs": 24,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bakery",
        "foodName": "Cappuccino Chocolate Chip Muffins",
        "protein": 2,
        "fat": 9,
        "carbs": 27,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bakery",
        "foodName": "Assorted Scones",
        "protein": 2,
        "fat": 9,
        "carbs": 26,
        "time": "breakfast"
    },
    {
        "restaurantName": "East Quad",
        "foodName": "Grilled Chicken Salad",
        "protein": 30,
        "fat": 10,
        "carbs": 15,
        "time": "lunch"
    },
    {
        "restaurantName": "East Quad",
        "foodName": "Quinoa & Veggie Bowl",
        "protein": 12,
        "fat": 5,
        "carbs": 45,
        "time": "lunch"
    },
    {
        "restaurantName": "Local Bistro",
        "foodName": "Beef Burger",
        "protein": 25,
        "fat": 20,
        "carbs": 35,
        "time": "lunch"
    },
    {
        "restaurantName": "Local Bistro",
        "foodName": "Veggie Wrap",
        "protein": 10,
        "fat": 8,
        "carbs": 30,
        "time": "lunch"
    },
    {
        "restaurantName": "Fast Food Joint",
        "foodName": "Chicken Nuggets",
        "protein": 15,
        "fat": 12,
        "carbs": 25,
        "time": "lunch"
    },
    {
        "restaurantName": "Fast Food Joint",
        "foodName": "French Fries",
        "protein": 3,
        "fat": 15,
        "carbs": 40,
        "time": "lunch"
    },
    {
        "restaurantName": "Healthy Café",
        "foodName": "Greek Yogurt",
        "protein": 10,
        "fat": 3,
        "carbs": 12,
        "time": "lunch"
    },
    {
        "restaurantName": "Healthy Café",
        "foodName": "Avocado Toast",
        "protein": 8,
        "fat": 18,
        "carbs": 30,
        "time": "lunch"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Beef Barley Soup",
        "protein": 5,
        "fat": 1,
        "carbs": 14,
        "time": "lunch"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "BBQ Meatloaf",
        "protein": 15,
        "fat": 16,
        "carbs": 10,
        "time": "lunch"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Home Fries",
        "protein": 2,
        "fat": 8,
        "carbs": 17,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Green Beans",
        "protein": 2,
        "fat": 0,
        "carbs": 9,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Tofu with Coconut, Barley, and Quinoa",
        "protein": 13,
        "fat": 8,
        "carbs": 29,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Roasted Broccoli",
        "protein": 2,
        "fat": 2,
        "carbs": 6,
        "time": "dinner"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Vegan Artichoke Burger on White Bun",
        "protein": 11,
        "fat": 22,
        "carbs": 35,
        "time": "dinner"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Macaroni & Cheese",
        "protein": 9,
        "fat": 10,
        "carbs": 25,
        "time": "dinner"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Roasted Vegetable Flatbread Pizza",
        "protein": 5,
        "fat": 6,
        "carbs": 10,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Chicken Biryani",
        "protein": 16,
        "fat": 11,
        "carbs": 18,
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Mango",
        "protein": 0,
        "fat": 0,
        "carbs": 4,
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Cilantro",
        "protein": 0,
        "fat": 0,
        "carbs": 1,
        "time": "dinner"
    },
    {
        "restaurantName": "Pizziti",
        "foodName": "Cheese Bread",
        "protein": 9,
        "fat": 8,
        "carbs": 22,
        "time": "dinner"
    },
    {
        "restaurantName": "Coney Island Pizza",
        "foodName": "Coney Island Pizza",
        "protein": 15,
        "fat": 15,
        "carbs": 36,
        "time": "dinner"
    },
    {
        "restaurantName": "Coney Island Pizza",
        "foodName": "Cheese Pizza",
        "protein": 11,
        "fat": 8,
        "carbs": 33,
        "time": "dinner"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Provolone Crispy Chicken on White Bun",
        "protein": 32,
        "fat": 22,
        "carbs": 34,
        "time": "dinner"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Turkey Burger on White Bun",
        "protein": 26,
        "fat": 10,
        "carbs": 15,
        "time": "dinner"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Potato Frips",
        "protein": 3,
        "fat": 29,
        "carbs": 25,
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Vegan Eclair Cake",
        "protein": 2,
        "fat": 18,
        "carbs": 56,
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Cardamom Nut Bar",
        "protein": 7,
        "fat": 26,
        "carbs": 50,
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Pineapple Upside Down Cake",
        "protein": 3,
        "fat": 13,
        "carbs": 38,
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Chocolate Glazed Donuts",
        "protein": 4,
        "fat": 16,
        "carbs": 40,
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Glazed Sour Cream Donut Holes",
        "protein": 1,
        "fat": 5,
        "carbs": 12,
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Chocolate Cake with Fudge Frosting",
        "protein": 5,
        "fat": 33,
        "carbs": 49,
        "time": "dinner"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Assorted Washtenaw Dairy Donuts",
        "protein": 4,
        "fat": 11,
        "carbs": 29,
        "time": "lunch"
    },
    {
        "restaurantName": "Hot Cereal",
        "foodName": "Oatmeal",
        "protein": 6,
        "fat": 3,
        "carbs": 33,
        "time": "lunch"
    },
    {
        "restaurantName": "Toast",
        "foodName": "Sauteed Vegetables",
        "protein": 2,
        "fat": 2,
        "carbs": 7,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Scrambled Eggs",
        "protein": 11,
        "fat": 12,
        "carbs": 0,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Scrambled Tofu",
        "protein": 7,
        "fat": 3,
        "carbs": 6,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Texas French Toast",
        "protein": 7,
        "fat": 7,
        "carbs": 16,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Fried Potatoes with Ranch Seasoning",
        "protein": 3,
        "fat": 6,
        "carbs": 24,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Halal Chicken Sausage Links",
        "protein": 13,
        "fat": 7,
        "carbs": 1,
        "time": "lunch"
    },
    {
        "restaurantName": "Signature Blue",
        "foodName": "Guacamole",
        "protein": 0,
        "fat": 6,
        "carbs": 3,
        "time": "lunch"
    },
    {
        "restaurantName": "Signature Blue",
        "foodName": "Spicy Ginger Slaw",
        "protein": 2,
        "fat": 0,
        "carbs": 14,
        "time": "lunch"
    },
    {
        "restaurantName": "Signature Blue",
        "foodName": "Avocado Wedge",
        "protein": 1,
        "fat": 4,
        "carbs": 2,
        "time": "lunch"
    },
    {
        "restaurantName": "Signature Blue",
        "foodName": "Grape Tomatoes & Basil",
        "protein": 0,
        "fat": 0,
        "carbs": 1,
        "time": "lunch"
    },
    {
        "restaurantName": "Signature Blue",
        "foodName": "Arcadian Blend Lettuce",
        "protein": 1,
        "fat": 0,
        "carbs": 1,
        "time": "lunch"
    },
    {
        "restaurantName": "Pizziti",
        "foodName": "Pepperoni Flatbread Pizza",
        "protein": 5,
        "fat": 6,
        "carbs": 8,
        "time": "lunch"
    },
    {
        "restaurantName": "Pizziti",
        "foodName": "Cheese Flatbread Pizza",
        "protein": 4,
        "fat": 5,
        "carbs": 8,
        "time": "lunch"
    },
    {
        "restaurantName": "Breads and Rolls",
        "foodName": "English Muffin",
        "protein": 4,
        "fat": 1,
        "carbs": 24,
        "time": "lunch"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Chocolate Glazed Donuts",
        "protein": 4,
        "fat": 16,
        "carbs": 40,
        "time": "lunch"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Blueberry Muffins",
        "protein": 2,
        "fat": 7,
        "carbs": 23,
        "time": "lunch"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Cinnamon Rolls",
        "protein": 3,
        "fat": 2,
        "carbs": 22,
        "time": "lunch"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Oatmeal",
        "protein": 6,
        "fat": 29,
        "carbs": 3,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Roasted Broccoli",
        "protein": 2,
        "fat": 6,
        "carbs": 2,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Scrambled Tofu",
        "protein": 13,
        "fat": 4,
        "carbs": 10,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Potato Tots",
        "protein": 1,
        "fat": 17,
        "carbs": 21,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Scrambled Eggs",
        "protein": 11,
        "fat": 0,
        "carbs": 12,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Pork Sausage Links",
        "protein": 9,
        "fat": 2,
        "carbs": 18,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Baked Buttermilk Waffles",
        "protein": 4,
        "fat": 30,
        "carbs": 6,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Strawberry Sauce",
        "protein": 0,
        "fat": 9,
        "carbs": 0,
        "time": "breakfast"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Blueberry Muffins",
        "protein": 2,
        "fat": 23,
        "carbs": 7,
        "time": "breakfast"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Cinnamon Sugar Donuts",
        "protein": 4,
        "fat": 34,
        "carbs": 19,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Oatmeal",
        "protein": 6,
        "fat": 3,
        "carbs": 33,
        "time": "lunch"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Brown Sugar",
        "protein": 0,
        "fat": 0,
        "carbs": 4,
        "time": "lunch"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Southern Style Potatoes",
        "protein": 3,
        "fat": 2,
        "carbs": 28,
        "time": "lunch"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Scrambled Tofu",
        "protein": 13,
        "fat": 10,
        "carbs": 4,
        "time": "lunch"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Scrambled Eggs",
        "protein": 11,
        "fat": 12,
        "carbs": 0,
        "time": "lunch"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Deep Fried French Toast Sticks",
        "protein": 8,
        "fat": 11,
        "carbs": 34,
        "time": "lunch"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Farmer's Scramble",
        "protein": 14,
        "fat": 15,
        "carbs": 4,
        "time": "lunch"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Cajun Andouille Sausage",
        "protein": 10,
        "fat": 15,
        "carbs": 3,
        "time": "lunch"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Hearty Beef Soup",
        "protein": 6,
        "fat": 7,
        "carbs": 13,
        "time": "lunch"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Filipino Vegetable Pancit",
        "protein": 4,
        "fat": 2,
        "carbs": 34,
        "time": "lunch"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Sweet & Sour Sauce",
        "protein": 0,
        "fat": 1,
        "carbs": 12,
        "time": "lunch"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Spring Rolls",
        "protein": 1,
        "fat": 2,
        "carbs": 8,
        "time": "lunch"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Taco Beef",
        "protein": 9,
        "fat": 10,
        "carbs": 1,
        "time": "lunch"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Tortilla Chips",
        "protein": 2,
        "fat": 6,
        "carbs": 20,
        "time": "lunch"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Spicy Pinto Beans",
        "protein": 3,
        "fat": 0,
        "carbs": 10,
        "time": "lunch"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Mild Salsa",
        "protein": 0,
        "fat": 0,
        "carbs": 4,
        "time": "lunch"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Cinnamon Sugar Breadsticks",
        "protein": 3,
        "fat": 3,
        "carbs": 39,
        "time": "lunch"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Garlic Cheese Bread",
        "protein": 9,
        "fat": 9,
        "carbs": 22,
        "time": "lunch"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Broccoli Cheddar Soup",
        "protein": 14,
        "fat": 23,
        "carbs": 15,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Beef Pepper Steak",
        "protein": 8,
        "fat": 2,
        "carbs": 7,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Medium Grain Rice",
        "protein": 3,
        "fat": 0,
        "carbs": 36,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Chopped Green Onions",
        "protein": 0,
        "fat": 0,
        "carbs": 1,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Thai Curry Vegetables w/ Coconut Milk",
        "protein": 2,
        "fat": 5,
        "carbs": 7,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Jasmine Rice",
        "protein": 4,
        "fat": 0,
        "carbs": 34,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Cilantro",
        "protein": 0,
        "fat": 0,
        "carbs": 1,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Halal Mojo Grilled Chicken",
        "protein": 17,
        "fat": 1,
        "carbs": 0,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Roasted Broccoli",
        "protein": 2,
        "fat": 2,
        "carbs": 6,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Roasted Garlic Smashed Yukon Potatoes",
        "protein": 2,
        "fat": 2,
        "carbs": 18,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Rueben Pizza",
        "protein": 21,
        "fat": 18,
        "carbs": 34,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Garlic Cheese Bread",
        "protein": 9,
        "fat": 9,
        "carbs": 22,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Pepperoni Pizza",
        "protein": 12,
        "fat": 10,
        "carbs": 33,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Cheese Pizza",
        "protein": 11,
        "fat": 8,
        "carbs": 33,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "BLT+A Tater Tots",
        "protein": 17,
        "fat": 66,
        "carbs": 27,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Potato Tots",
        "protein": 1,
        "fat": 21,
        "carbs": 17,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Cheese Flatbread",
        "protein": 9,
        "fat": 10,
        "carbs": 9,
        "time": "dinner"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Chocolate Cake with Fudge Frosting",
        "protein": 5,
        "fat": 33,
        "carbs": 49,
        "time": "dinner"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Oatmeal",
        "protein": 6,
        "fat": 29,
        "carbs": 3,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Roasted Broccoli",
        "protein": 2,
        "fat": 6,
        "carbs": 2,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Scrambled Tofu",
        "protein": 13,
        "fat": 4,
        "carbs": 10,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Potato Tots",
        "protein": 1,
        "fat": 17,
        "carbs": 21,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Scrambled Eggs",
        "protein": 11,
        "fat": 0,
        "carbs": 12,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Pork Sausage Links",
        "protein": 9,
        "fat": 2,
        "carbs": 18,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Baked Buttermilk Waffles",
        "protein": 4,
        "fat": 30,
        "carbs": 6,
        "time": "breakfast"
    },
    {
        "restaurantName": "Bursley",
        "foodName": "Strawberry Sauce",
        "protein": 0,
        "fat": 9,
        "carbs": 0,
        "time": "breakfast"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Blueberry Muffins",
        "protein": 2,
        "fat": 23,
        "carbs": 7,
        "time": "breakfast"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Cinnamon Sugar Donuts",
        "protein": 4,
        "fat": 34,
        "carbs": 19,
        "time": "breakfast"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Oatmeal",
        "protein": 6,
        "fat": 3,
        "carbs": 29,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Roasted Broccoli",
        "protein": 2,
        "fat": 2,
        "carbs": 6,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Scrambled Tofu",
        "protein": 13,
        "fat": 10,
        "carbs": 4,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Potato Tots",
        "protein": 1,
        "fat": 21,
        "carbs": 17,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Scrambled Eggs",
        "protein": 11,
        "fat": 12,
        "carbs": 0,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Pork Sausage Links",
        "protein": 9,
        "fat": 18,
        "carbs": 2,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Baked Buttermilk Waffles",
        "protein": 4,
        "fat": 6,
        "carbs": 30,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Strawberry Sauce",
        "protein": 0,
        "fat": 0,
        "carbs": 9,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Spicy Black Beans",
        "protein": 3,
        "fat": 0,
        "carbs": 10,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Tortilla Chips",
        "protein": 2,
        "fat": 6,
        "carbs": 20,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Corn Salsa",
        "protein": 1,
        "fat": 0,
        "carbs": 4,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Guacamole",
        "protein": 0,
        "fat": 6,
        "carbs": 3,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Shredded Beef Tostada",
        "protein": 21,
        "fat": 27,
        "carbs": 11,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Spicy Pinto Beans",
        "protein": 3,
        "fat": 0,
        "carbs": 10,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Shredded Lettuce",
        "protein": 0,
        "fat": 0,
        "carbs": 1,
        "time": "lunch"
    },
    {
        "restaurantName": "Mosher-Jordan",
        "foodName": "Fresh Pico De Gallo",
        "protein": 0,
        "fat": 0,
        "carbs": 1,
        "time": "lunch"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Beef and Mushroom Blended Burger",
        "protein": 24,
        "fat": 13,
        "carbs": 15,
        "time": "lunch"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Beef & Mushroom Blended Burger w/ Cheese",
        "protein": 30,
        "fat": 24,
        "carbs": 18,
        "time": "lunch"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Beef Hot Dog",
        "protein": 12,
        "fat": 15,
        "carbs": 26,
        "time": "lunch"
    },
    {
        "restaurantName": "Wild Fire Blue",
        "foodName": "Vegan Artichoke Burger on White Bun",
        "protein": 11,
        "fat": 22,
        "carbs": 35,
        "time": "lunch"
    },
    {
        "restaurantName": "Wild Fire Blue",
        "foodName": "French Fries",
        "protein": 1,
        "fat": 10,
        "carbs": 25,
        "time": "lunch"
    },
    {
        "restaurantName": "Deli",
        "foodName": "Cardamom Nut Bar",
        "protein": 7,
        "fat": 26,
        "carbs": 50,
        "time": "lunch"
    },
    {
        "restaurantName": "Deli",
        "foodName": "Baked Sweet Potato Pudding",
        "protein": 3,
        "fat": 9,
        "carbs": 26,
        "time": "lunch"
    },
    {
        "restaurantName": "Deli",
        "foodName": "Chocolate Chunk Cookies",
        "protein": 2,
        "fat": 7,
        "carbs": 21,
        "time": "lunch"
    },
    {
        "restaurantName": "Signature Maize",
        "foodName": "Cheese Tortellini w/ Tomato Coulis",
        "protein": 4,
        "fat": 3,
        "carbs": 22,
        "time": "dinner"
    },
    {
        "restaurantName": "World Palate Maize",
        "foodName": "BBQ Pork Chops",
        "protein": 16,
        "fat": 7,
        "carbs": 23,
        "time": "dinner"
    },
    {
        "restaurantName": "World Palate Maize",
        "foodName": "Ranch Roasted Potatoes",
        "protein": 3,
        "fat": 4,
        "carbs": 24,
        "time": "dinner"
    },
    {
        "restaurantName": "World Palate Maize",
        "foodName": "Kale Saute",
        "protein": 2,
        "fat": 3,
        "carbs": 5,
        "time": "dinner"
    },
    {
        "restaurantName": "24 Carrots",
        "foodName": "Thai Style Fried Rice with Tofu",
        "protein": 5,
        "fat": 3,
        "carbs": 18,
        "time": "dinner"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Apricot Lamb Stew",
        "protein": 14,
        "fat": 9,
        "carbs": 8,
        "time": "dinner"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Basmati Rice",
        "protein": 3,
        "fat": 2,
        "carbs": 35,
        "time": "dinner"
    },
    {
        "restaurantName": "Halal",
        "foodName": "Roasted Broccoli",
        "protein": 2,
        "fat": 2,
        "carbs": 6,
        "time": "dinner"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Beef and Mushroom Blended Burger",
        "protein": 24,
        "fat": 13,
        "carbs": 15,
        "time": "dinner"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Beef & Mushroom Blended Burger w/ Cheese",
        "protein": 30,
        "fat": 24,
        "carbs": 18,
        "time": "dinner"
    },
    {
        "restaurantName": "Wild Fire Maize",
        "foodName": "Beef Hot Dog",
        "protein": 12,
        "fat": 15,
        "carbs": 26,
        "time": "dinner"
    },
    {
        "restaurantName": "",
        "foodName": "French Fries",
        "protein": 1,
        "fat": 10,
        "carbs": 25,
        "time": "dinner"
    },
    {
        "restaurantName": "Wild Fire Blue",
        "foodName": "Vegan Artichoke Burger on White Bun",
        "protein": 11,
        "fat": 22,
        "carbs": 35,
        "time": "dinner"
    },
    {
        "restaurantName": "Deli",
        "foodName": "Sandwiches Made to Order",
        "protein": "-",
        "fat": "-",
        "carbs": "-",
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Chocolate Cake with Fudge Frosting",
        "protein": 5,
        "fat": 33,
        "carbs": 49,
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Baked Sweet Potato Pudding",
        "protein": 3,
        "fat": 9,
        "carbs": 26,
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Cardamom Nut Bar",
        "protein": 7,
        "fat": 26,
        "carbs": 50,
        "time": "dinner"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Chocolate Chunk Cookies",
        "protein": 2,
        "fat": 7,
        "carbs": 21,
        "time": "dinner"
    },
    {
        "restaurantName": "Markley",
        "foodName": "Oatmeal",
        "protein": 6,
        "fat": 33,
        "carbs": 3,
        "time": "lunch"
    },
    {
        "restaurantName": "Markley",
        "foodName": "Blueberry Buttermilk Pancakes",
        "protein": 3,
        "fat": 22,
        "carbs": 1,
        "time": "lunch"
    },
    {
        "restaurantName": "Markley",
        "foodName": "Grilled Ham",
        "protein": 10,
        "fat": 4,
        "carbs": 3,
        "time": "lunch"
    },
    {
        "restaurantName": "Markley",
        "foodName": "Scrambled Eggs",
        "protein": 11,
        "fat": 0,
        "carbs": 12,
        "time": "lunch"
    },
    {
        "restaurantName": "Markley",
        "foodName": "Scrambled Tofu",
        "protein": 13,
        "fat": 4,
        "carbs": 10,
        "time": "lunch"
    },
    {
        "restaurantName": "Markley",
        "foodName": "Roasted Cauliflower",
        "protein": 1,
        "fat": 3,
        "carbs": 0,
        "time": "lunch"
    },
    {
        "restaurantName": "Markley",
        "foodName": "Deep Fried Tritaters",
        "protein": 2,
        "fat": 22,
        "carbs": 15,
        "time": "lunch"
    },
    {
        "restaurantName": "Markley",
        "foodName": "Apple Cider",
        "protein": 0,
        "fat": 24,
        "carbs": 0,
        "time": "lunch"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Cinnamon Sugar Donuts",
        "protein": 4,
        "fat": 34,
        "carbs": 19,
        "time": "lunch"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Blueberry Muffins",
        "protein": 2,
        "fat": 23,
        "carbs": 7,
        "time": "lunch"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "New England Blueberry Buckle",
        "protein": 4,
        "fat": 41,
        "carbs": 7,
        "time": "lunch"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Chocolate Cake with Fudge Frosting",
        "protein": 5,
        "fat": 49,
        "carbs": 33,
        "time": "lunch"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Cardamom Nut Bar",
        "protein": 7,
        "fat": 50,
        "carbs": 26,
        "time": "lunch"
    },
    {
        "restaurantName": "MBakery",
        "foodName": "Monster Candy Cookies",
        "protein": 2,
        "fat": 22,
        "carbs": 7,
        "time": "lunch"
    },
    {
        "restaurantName": "Hot Cereal",
        "foodName": "Oatmeal",
        "protein": 6,
        "fat": 3,
        "carbs": 33,
        "time": "breakfast"
    },
    {
        "restaurantName": "Toast",
        "foodName": "Seasoned Green Beans",
        "protein": 2,
        "fat": 2,
        "carbs": 9,
        "time": "breakfast"
    },
    {
        "restaurantName": "Toast",
        "foodName": "Bruschetta Tofu Scramble",
        "protein": 11,
        "fat": 8,
        "carbs": 7,
        "time": "breakfast"
    },
    {
        "restaurantName": "Toast",
        "foodName": "Potato Tots",
        "protein": 1,
        "fat": 21,
        "carbs": 17,
        "time": "breakfast"
    },
    {
        "restaurantName": "Toast",
        "foodName": "Scrambled Eggs",
        "protein": 11,
        "fat": 12,
        "carbs": 0,
        "time": "breakfast"
    },
    {
        "restaurantName": "Toast",
        "foodName": "Pork Sausage Links",
        "protein": 9,
        "fat": 18,
        "carbs": 2,
        "time": "breakfast"
    },
    {
        "restaurantName": "Toast",
        "foodName": "Grilled Waffles",
        "protein": 8,
        "fat": 12,
        "carbs": 25,
        "time": "breakfast"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Gluten-Free Granola",
        "protein": 5,
        "fat": 8,
        "carbs": 31,
        "time": "breakfast"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Lemon Poppyseed Muffins",
        "protein": 2,
        "fat": 9,
        "carbs": 23,
        "time": "breakfast"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Blueberry Muffins",
        "protein": 2,
        "fat": 7,
        "carbs": 23,
        "time": "breakfast"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Cinnamon Sugar Donuts",
        "protein": 4,
        "fat": 19,
        "carbs": 34,
        "time": "breakfast"
    },
    {
        "restaurantName": "Hot Cereal",
        "foodName": "Oatmeal",
        "protein": 6,
        "fat": 3,
        "carbs": 33,
        "time": "lunch"
    },
    {
        "restaurantName": "toast",
        "foodName": "Roasted Green Beans with Coriander",
        "protein": 2,
        "fat": 6,
        "carbs": 8,
        "time": "lunch"
    },
    {
        "restaurantName": "toast",
        "foodName": "Bruschetta Tofu Scramble",
        "protein": 11,
        "fat": 8,
        "carbs": 7,
        "time": "lunch"
    },
    {
        "restaurantName": "toast",
        "foodName": "Potato Tots",
        "protein": 1,
        "fat": 21,
        "carbs": 17,
        "time": "lunch"
    },
    {
        "restaurantName": "toast",
        "foodName": "Scrambled Eggs",
        "protein": 11,
        "fat": 12,
        "carbs": 0,
        "time": "lunch"
    },
    {
        "restaurantName": "toast",
        "foodName": "Pork Sausage Links",
        "protein": 9,
        "fat": 18,
        "carbs": 2,
        "time": "lunch"
    },
    {
        "restaurantName": "toast",
        "foodName": "Grilled Waffles",
        "protein": 5,
        "fat": 7,
        "carbs": 15,
        "time": "lunch"
    },
    {
        "restaurantName": "soup",
        "foodName": "Vegetable Rice Soup",
        "protein": 2,
        "fat": 0,
        "carbs": 18,
        "time": "lunch"
    },
    {
        "restaurantName": "signature maize",
        "foodName": "Detroit Coney Island Hot Dog",
        "protein": 15,
        "fat": 20,
        "carbs": 30,
        "time": "lunch"
    },
    {
        "restaurantName": "signature maize",
        "foodName": "Potato Chips",
        "protein": 2,
        "fat": 10,
        "carbs": 15,
        "time": "lunch"
    },
    {
        "restaurantName": "24 carrots",
        "foodName": "Roasted Mushrooms",
        "protein": 1,
        "fat": 4,
        "carbs": 1,
        "time": "lunch"
    },
    {
        "restaurantName": "24 carrots",
        "foodName": "Spinach Saute",
        "protein": 1,
        "fat": 2,
        "carbs": 1,
        "time": "lunch"
    },
    {
        "restaurantName": "24 carrots",
        "foodName": "Black Bean Burger w/ White Bun",
        "protein": 19,
        "fat": 7,
        "carbs": 33,
        "time": "lunch"
    },
    {
        "restaurantName": "halal",
        "foodName": "MSC Lemon Baked Rockfish",
        "protein": 16,
        "fat": 7,
        "carbs": 0,
        "time": "lunch"
    },
    {
        "restaurantName": "halal",
        "foodName": "Herbed Roasted breakfast Potatoes",
        "protein": 2,
        "fat": 8,
        "carbs": 15,
        "time": "lunch"
    },
    {
        "restaurantName": "halal",
        "foodName": "Roasted Broccoli",
        "protein": 2,
        "fat": 2,
        "carbs": 6,
        "time": "lunch"
    },
    {
        "restaurantName": "vita",
        "foodName": "Mostaccioli Pasta",
        "protein": 4,
        "fat": 1,
        "carbs": 24,
        "time": "lunch"
    },
    {
        "restaurantName": "vita",
        "foodName": "Roasted Red Pepper Cream Sauce",
        "protein": 4,
        "fat": 9,
        "carbs": 5,
        "time": "lunch"
    },
    {
        "restaurantName": "vita",
        "foodName": "Marinara Sauce",
        "protein": 2,
        "fat": 3,
        "carbs": 10,
        "time": "lunch"
    },
    {
        "restaurantName": "sabroso",
        "foodName": "Halal Beef Nachos",
        "protein": 15,
        "fat": 28,
        "carbs": 51,
        "time": "lunch"
    },
    {
        "restaurantName": "sabroso",
        "foodName": "Pickled Jalapeno Peppers",
        "protein": 0,
        "fat": 0,
        "carbs": 1,
        "time": "lunch"
    },
    {
        "restaurantName": "pizziti",
        "foodName": "Pepperoni Pizza",
        "protein": 9,
        "fat": 8,
        "carbs": 26,
        "time": "lunch"
    },
    {
        "restaurantName": "pizziti",
        "foodName": "Cheese Pizza",
        "protein": 9,
        "fat": 6,
        "carbs": 26,
        "time": "lunch"
    },
    {
        "restaurantName": "wild fire maze",
        "foodName": "Beef and Mushroom Blended Burger",
        "protein": 24,
        "fat": 13,
        "carbs": 15,
        "time": "lunch"
    },
    {
        "restaurantName": "wild fire maze",
        "foodName": "Turkey Burger on White Bun",
        "protein": 26,
        "fat": 10,
        "carbs": 15,
        "time": "lunch"
    },
    {
        "restaurantName": "wild fire maze",
        "foodName": "French Fries",
        "protein": 1,
        "fat": 10,
        "carbs": 25,
        "time": "lunch"
    },
    {
        "restaurantName": "two oceans",
        "foodName": "Pork Fried Rice",
        "protein": 5,
        "fat": 2,
        "carbs": 18,
        "time": "lunch"
    },
    {
        "restaurantName": "two oceans",
        "foodName": "Spring Rolls",
        "protein": 1,
        "fat": 2,
        "carbs": 8,
        "time": "lunch"
    },
    {
        "restaurantName": "two oceans",
        "foodName": "Sweet and Spicy Plum Sauce",
        "protein": 0,
        "fat": 0,
        "carbs": 7,
        "time": "lunch"
    },
    {
        "restaurantName": "bread and rolls",
        "foodName": "Light Rye w/ Seeds Sandwich Loaf",
        "protein": 3,
        "fat": 1,
        "carbs": 16,
        "time": "lunch"
    },
    {
        "restaurantName": "bread and rolls",
        "foodName": "Whipped Butter",
        "protein": 0,
        "fat": 12,
        "carbs": 0,
        "time": "lunch"
    },
    {
        "restaurantName": "bread and rolls",
        "foodName": "Whipped Margarine",
        "protein": 0,
        "fat": 7,
        "carbs": 0,
        "time": "lunch"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Pineapple Upside Down Cake",
        "protein": 3,
        "fat": 13,
        "carbs": 38,
        "time": "lunch"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Vegan Eclair Cake",
        "protein": 2,
        "fat": 18,
        "carbs": 56,
        "time": "lunch"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Cardamom Nut Bar",
        "protein": 7,
        "fat": 26,
        "carbs": 50,
        "time": "lunch"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Lemon Poppyseed Muffins",
        "protein": 2,
        "fat": 9,
        "carbs": 23,
        "time": "lunch"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Blueberry Muffins",
        "protein": 2,
        "fat": 7,
        "carbs": 23,
        "time": "lunch"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Cinnamon Sugar Donuts",
        "protein": 4,
        "fat": 19,
        "carbs": 34,
        "time": "lunch"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Baked Sweet Potato Pudding",
        "protein": 3,
        "fat": 9,
        "carbs": 26,
        "time": "lunch"
    },
    {
        "restaurantName": "soup",
        "foodName": "Vegetable Rice Soup",
        "protein": 2,
        "fat": 0,
        "carbs": 18,
        "time": "dinner"
    },
    {
        "restaurantName": "signature maize",
        "foodName": "SQ Champ's Pork Shoulder",
        "protein": 20,
        "fat": 14,
        "carbs": 1,
        "time": "dinner"
    },
    {
        "restaurantName": "signature maize",
        "foodName": "Mustard Roasted Potatoes",
        "protein": 2,
        "fat": 3,
        "carbs": 15,
        "time": "dinner"
    },
    {
        "restaurantName": "signature maize",
        "foodName": "Roasted Brussels Sprouts",
        "protein": 3,
        "fat": 0,
        "carbs": 8,
        "time": "dinner"
    },
    {
        "restaurantName": "24 carrots",
        "foodName": "Blackened Tofu",
        "protein": 16,
        "fat": 14,
        "carbs": 3,
        "time": "dinner"
    },
    {
        "restaurantName": "24 carrots",
        "foodName": "Long Grain Rice",
        "protein": 3,
        "fat": 0,
        "carbs": 26,
        "time": "dinner"
    },
    {
        "restaurantName": "24 carrots",
        "foodName": "Vegetable Creole",
        "protein": 3,
        "fat": 6,
        "carbs": 18,
        "time": "dinner"
    },
    {
        "restaurantName": "24 carrots",
        "foodName": "Black Bean Burger w/ White Bun",
        "protein": 19,
        "fat": 7,
        "carbs": 33,
        "time": "dinner"
    },
    {
        "restaurantName": "halal",
        "foodName": "Herb Baked Chicken",
        "protein": 16,
        "fat": 10,
        "carbs": 0,
        "time": "dinner"
    },
    {
        "restaurantName": "halal",
        "foodName": "Jasmine Rice",
        "protein": 4,
        "fat": 0,
        "carbs": 34,
        "time": "dinner"
    },
    {
        "restaurantName": "halal",
        "foodName": "Broccolini Saute",
        "protein": 3,
        "fat": 3,
        "carbs": 6,
        "time": "dinner"
    },
    {
        "restaurantName": "halal",
        "foodName": "Onion Olive & Caper Relish",
        "protein": 0,
        "fat": 8,
        "carbs": 2,
        "time": "dinner"
    },
    {
        "restaurantName": "vita",
        "foodName": "Gemelli Pasta",
        "protein": 3,
        "fat": 0,
        "carbs": 19,
        "time": "dinner"
    },
    {
        "restaurantName": "vita",
        "foodName": "Roasted Red Pepper Cream Sauce",
        "protein": 4,
        "fat": 9,
        "carbs": 5,
        "time": "dinner"
    },
    {
        "restaurantName": "vita",
        "foodName": "Mediterranean Sauce",
        "protein": 3,
        "fat": 6,
        "carbs": 13,
        "time": "dinner"
    },
    {
        "restaurantName": "sabroso",
        "foodName": "Halal Beef Nachos",
        "protein": 15,
        "fat": 28,
        "carbs": 51,
        "time": "dinner"
    },
    {
        "restaurantName": "sabroso",
        "foodName": "Pickled Jalapeno Peppers",
        "protein": 0,
        "fat": 0,
        "carbs": 1,
        "time": "dinner"
    },
    {
        "restaurantName": "pizziti",
        "foodName": "Pepperoni Pizza",
        "protein": 9,
        "fat": 8,
        "carbs": 26,
        "time": "dinner"
    },
    {
        "restaurantName": "pizziti",
        "foodName": "Cheese Pizza",
        "protein": 9,
        "fat": 6,
        "carbs": 26,
        "time": "dinner"
    },
    {
        "restaurantName": "wild fire maze",
        "foodName": "Beef and Mushroom Blended Burger",
        "protein": 24,
        "fat": 13,
        "carbs": 15,
        "time": "dinner"
    },
    {
        "restaurantName": "wild fire maze",
        "foodName": "Turkey Burger on White Bun",
        "protein": 26,
        "fat": 10,
        "carbs": 15,
        "time": "dinner"
    },
    {
        "restaurantName": "wild fire maze",
        "foodName": "French Fries",
        "protein": 1,
        "fat": 10,
        "carbs": 25,
        "time": "dinner"
    },
    {
        "restaurantName": "wild fire maze",
        "foodName": "Beef Hot Dog",
        "protein": 12,
        "fat": 15,
        "carbs": 26,
        "time": "dinner"
    },
    {
        "restaurantName": "wild fire maze",
        "foodName": "Bratwurst",
        "protein": 9,
        "fat": 13,
        "carbs": 1,
        "time": "dinner"
    },
    {
        "restaurantName": "wild fire maze",
        "foodName": "Sauteed Mixed Peppers & Onions",
        "protein": 0,
        "fat": 0,
        "carbs": 2,
        "time": "dinner"
    },
    {
        "restaurantName": "wild fire maze",
        "foodName": "BBQ Sauce",
        "protein": 0,
        "fat": 0,
        "carbs": 14,
        "time": "dinner"
    },
    {
        "restaurantName": "wild fire maze",
        "foodName": "Sweet Pickle Relish",
        "protein": 0,
        "fat": 0,
        "carbs": 3,
        "time": "dinner"
    },
    {
        "restaurantName": "two oceans",
        "foodName": "Chicken Hunan with Noodles",
        "protein": 13,
        "fat": 4,
        "carbs": 30,
        "time": "dinner"
    },
    {
        "restaurantName": "two oceans",
        "foodName": "Vegetable Stir Fry Blend",
        "protein": 4,
        "fat": 0,
        "carbs": 10,
        "time": "dinner"
    },
    {
        "restaurantName": "two oceans",
        "foodName": "Tofu Hunan with Noodles",
        "protein": 11,
        "fat": 8,
        "carbs": 29,
        "time": "dinner"
    },
    {
        "restaurantName": "smoke",
        "foodName": "BBQ Meatloaf",
        "protein": 15,
        "fat": 16,
        "carbs": 10,
        "time": "dinner"
    },
    {
        "restaurantName": "smoke",
        "foodName": "Mashed Potatoes",
        "protein": 3,
        "fat": 5,
        "carbs": 17,
        "time": "dinner"
    },
    {
        "restaurantName": "smoke",
        "foodName": "Green Beans",
        "protein": 2,
        "fat": 0,
        "carbs": 9,
        "time": "dinner"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Monster Candy Cookies",
        "protein": 2,
        "fat": 7,
        "carbs": 22,
        "time": "dinner"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Chocolate Cake with Fudge Frosting",
        "protein": 5,
        "fat": 33,
        "carbs": 49,
        "time": "dinner"
    },
    {
        "restaurantName": "Mbakery",
        "foodName": "Cardamom Nut Bar",
        "protein": 7,
        "fat": 26,
        "carbs": 50,
        "time": "dinner"
    }
]

export default foodData;