// ============================================================
// dishes.js - THE ONLY FILE YOU EDIT TO CHANGE THE MENU
// ------------------------------------------------------------
// To add a dish: copy one block below, change the key, name,
// price, and the 4 files (glb / glbIos / mind / poster).
// To change a pizza size: change "scale" - all 3 numbers
// together. McArt / MR-Pizza use 3, VegPizza uses 1.5 because
// its model file is about 2x bigger, so they end up the same
// size on screen. Bigger number = bigger pizza in the box.
// ============================================================

const RESTAURANT = {
  name: 'Melt9 Gulgasht Multan',
  phone: '03160843627',     // "Call waiter" button
  whatsapp: '923160843627'  // WhatsApp contact number
};

const DISHES = {

  'mcart': {
    name: 'McArt Pizza',
    price: '1800',
    description: 'Freshly baked McArt signature pizza',
    ingredients: 'Cheese, Crust, Pizza Sauce, Savory Pepperoni',
    allergens: 'Gluten, Dairy',
    glb:    'dishes/mcart_small-v1.glb',    // 3D model - Android + 3D view
    glbIos: 'dishes/mcart_ios-v1.glb',      // 3D model - iPhone
    mind:   'dishes/mcart-targets.mind',    // photo the camera looks for
    poster: 'dishes/mcart-poster.jpg',      // photo shown in the menu
    scale:  '3 3 3',  // pizza size inside the glass box
    glow: true   // TEST: golden glow + sparkle on pop - McArt only for now
  },

  'Mr-Pizza': {
    name: 'MR-Pizza-Mayu',
    price: '1650',
    description: 'Creamy mayo garlic style signature crust',
    ingredients: 'Mayo Sauce, Grilled Chicken, Onions, Mozzarella',
    allergens: 'Gluten, Dairy',
    glb:    'dishes/mr_pizza_small-v1.glb',
    glbIos: 'dishes/mr_pizza_ios-v1.glb',
    mind:   'dishes/mr-pizza-target.mind',
    poster: 'dishes/mr-pizza-poster.jpg',
    scale:  '3 3 3'
  },

  'VegPizza': {
    name: 'MR-VegPizza',
    price: '1599',
    description: 'Fresh vegetables on a hand-stretched base',
    ingredients: 'Mushroom, capsicum, olives, onion, mozzarella',
    allergens: 'Gluten, Dairy',
    glb:    'dishes/VegPizza_small-v1.glb',
    glbIos: 'dishes/VegPizza_ios-v1.glb',
    mind:   'dishes/VegPizza.mind',
    poster: 'dishes/VegPizzaimage.jpg',
    scale:  '1.5 1.5 1.5'   // model is ~2x bigger, so 1.5 here = 3 for the others
  }

};
