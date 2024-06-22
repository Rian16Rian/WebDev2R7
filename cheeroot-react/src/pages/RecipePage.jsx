import React, { useState, useRef, useEffect } from 'react';
import beverages1 from '../assets/IMG/beverages1.webp';
import remedies1 from '../assets/IMG/remedies1.webp';
import beverages2 from '../assets/IMG/beverages2.webp';
import sauces1 from '../assets/IMG/sauces1.webp';
import dessert1 from '../assets/IMG/dessert1.webp';
import dessert2 from '../assets/IMG/dessert2.webp';
import sauces2 from '../assets/IMG/sauces2.webp';
import remedies2 from '../assets/IMG/remedies2.webp';
import dessert3 from '../assets/IMG/dessert3.webp';
import RecipeModal from './RecipeModal';
import '../css/recipe.css';

const recipes = [

  {
    category: 'beverages',
    img: beverages1,
    title: 'Peppermint Tea',
    description: 'Ability to aid digestion, relieve bloating and gas, alleviate nausea, and promote relaxation.',
    ingredients: [
      { name: 'Peppermint Leaves', quantity: '1 tbsp', servings: '2 cups' },
      { name: 'Water', quantity: '2 cups', servings: '2 cups' }
    ],
    procedure: ['Boil water.', 'Steep peppermint leaves in hot water for 5-10 minutes.', 'Serve warm.']
  },

  {
    category: 'remedies',
    img: remedies1,
    title: 'Arnica Salve',
    description: 'Arnica is used topically for pain relief, reducing inflammation, and healing bruises.',
    ingredients: [
      { name: 'Arnica Flowers', quantity: '1/2 cup', servings: '1 jar' },
      { name: 'Olive Oil', quantity: '1 cup', servings: '1 jar' },
      { name: 'Beeswax', quantity: '1 oz', servings: '1 jar' }
    ],
    procedure: ['Infuse arnica flowers in olive oil for 2 weeks.', 'Strain the oil.', 'Melt beeswax and mix with the infused oil.', 'Pour into a jar and let it solidify.']
  },

  {
    category: 'beverages',
    img: beverages2,
    title: 'Hibiscus Iced Tea',
    description: 'It is rich in antioxidants and may help lower blood pressure and cholesterol levels.',
    ingredients: [
      { name: 'Hibiscus Flowers', quantity: '1/4 cup', servings: '4 cups' },
      { name: 'Water', quantity: '4 cups', servings: '4 cups' },
      { name: 'Honey', quantity: 'to taste', servings: '4 cups'},
      { name: 'Mint Leaves', quantity: 'a few', servings: '4 cups' }
    ],
    procedure: ['Boil water.', 'Add hibiscus flowers and steep for 10-15 minutes.', 'Strain and sweeten with honey to taste.', 'Chill in the refrigerator.', 'Serve over ice with mint leaves.']
  },

  {
    category: 'sauces',
    img: sauces1,
    title: 'Rosemary Balsamic Vinaigrette',
    description: 'Rosemary is rich in antioxidants and has anti-inflammatory properties.',
    ingredients: [
      { name: 'Balsamic Vinegar', quantity: '1/4 cup', servings: '1 cup' },
      { name: 'Olive Oil', quantity: '3/4 cup', servings: '1 cup' },
      { name: 'Fresh Rosemary', quantity: '1 tbsp, finely chopped', servings: '1 cup' },
      { name: 'Honey', quantity: '1 tsp', servings: '1 cup' },
      { name: 'Dijon Mustard', quantity: '1 tsp', servings: '1 cup' },
      { name: 'Garlic', quantity: '1 clove, minced', servings: '1 cup' },
      { name: 'Salt', quantity: 'to taste', servings: '1 cup' },
      { name: 'Black Pepper', quantity: 'to taste', servings: '1 cup' }
    ],
    procedure: [
      'Combine all ingredients in a bowl.',
      'Whisk until well combined.',
      'Adjust seasoning to taste.',
      'Store in a jar in the refrigerator.'
    ]
  },
  {
    category: 'desserts',
    img: dessert1,
    title: 'Rose Petal Jam',
    description: 'Rose petals are rich in antioxidants and add a delicate flavor to jams. It blends earthy rosemary with tangy balsamic vinegar, perfect for fresh salads.',
    ingredients: [
      { name: 'Fresh Rose Petals', quantity: '2 cups', servings: '2 cups of jam' },
      { name: 'Sugar', quantity: '2 cups', servings: '2 cups of jam' },
      { name: 'Lemon Juice', quantity: '1/4 cup', servings: '2 cups of jam' },
      { name: 'Water', quantity: '1 cup', servings: '2 cups of jam' }
    ],
    procedure: [
      'Gently wash rose petals and pat dry.',
      'In a saucepan, combine water and sugar, and bring to a boil.',
      'Add rose petals and lemon juice, then simmer until thickened.',
      'Pour into sterilized jars and seal.',
      'Cool and store in the refrigerator.'
    ]
  },
  {
    category: 'desserts',
    img: dessert2,
    title: 'Ginger Turmeric Coconut Milk Popsicles',
    description: 'Ginger and turmeric have anti-inflammatory properties, while coconut milk adds creaminess.',
    ingredients: [
      { name: 'Coconut Milk', quantity: '2 cups', servings: '6 popsicles' },
      { name: 'Fresh Ginger', quantity: '1 tbsp, grated', servings: '6 popsicles' },
      { name: 'Turmeric Powder', quantity: '1 tsp', servings: '6 popsicles' },
      { name: 'Honey', quantity: '2 tbsp', servings: '6 popsicles' }
    ],
    procedure: [
      'In a blender, combine all ingredients and blend until smooth.',
      'Pour mixture into popsicle molds.',
      'Insert sticks and freeze until solid.',
      'Unmold and serve.'
    ]
  },
  {
    category: 'sauces',
    img: sauces2,
    title: 'Mint Yogurt Sauce',
    description: 'Mint aids digestion and adds a refreshing flavor to dishes.',
    ingredients: [
      { name: 'Greek Yogurt', quantity: '1 cup', servings: '1 cup' },
      { name: 'Fresh Mint Leaves', quantity: '2 tbsp, chopped', servings: '1 cup' },
      { name: 'Lemon Juice', quantity: '1 tbsp', servings: '1 cup' },
      { name: 'Garlic', quantity: '1 clove, minced', servings: '1 cup' },
      { name: 'Salt', quantity: 'to taste', servings: '1 cup' },
      { name: 'Black Pepper', quantity: 'to taste', servings: '1 cup' }
    ],
    procedure: [
      'Combine all ingredients in a bowl.',
      'Mix well.',
      'Adjust seasoning to taste.',
      'Chill before serving.'
    ]
  },
  {
    category: 'remedies',
    img: remedies2,
    title: 'Echinacea Tincture',
    description: 'Echinacea is commonly used to boost the immune system and shorten the duration of colds and flu.',
    ingredients: [
      { name: 'Dried Echinacea Root', quantity: '1/2 cup', servings: '1 pint' },
      { name: 'Vodka or Brandy', quantity: '1 pint', servings: '1 pint' }
    ],
    procedure: [
      'Place echinacea root in a clean jar.',
      'Pour vodka or brandy over the root until fully covered.',
      'Seal the jar and store in a cool, dark place for 4-6 weeks.',
      'Shake the jar daily.',
      'Strain and store the tincture in a dark glass bottle.'
    ]
  },
  {
    category: 'desserts',
    img: dessert3,
    title: 'Lavender Shortbread Cookies',
    description: 'Lavender has calming properties and adds a floral flavor to desserts.',
    ingredients: [
      { name: 'Butter', quantity: '1 cup', servings: '2 dozen cookies' },
      { name: 'Sugar', quantity: '1/2 cup', servings: '2 dozen cookies' },
      { name: 'All-purpose Flour', quantity: '2 cups', servings: '2 dozen cookies' },
      { name: 'Dried Lavender Flowers', quantity: '1 tbsp', servings: '2 dozen cookies' },
      { name: 'Vanilla Extract', quantity: '1 tsp', servings: '2 dozen cookies' },
      { name: 'Salt', quantity: '1/4 tsp', servings: '2 dozen cookies' }
    ],
    procedure: [
      'Preheat oven to 325°F (165°C).',
      'Cream butter and sugar together until light and fluffy.',
      'Mix in vanilla extract and salt.',
      'Gradually add flour and lavender, mixing until combined.',
      'Roll dough out to 1/4 inch thickness and cut into shapes.',
      'Place on baking sheet and bake for 15-20 minutes or until edges are golden.',
      'Cool on wire rack before serving.'
    ]
  }
];

function RecipePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const scrollRef = useRef(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleViewRecipeClick = (recipe, event) => {
    event.preventDefault(); 
    setSelectedRecipe(recipe);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = window.scrollY;
    }
  };

  const handleCloseModal = () => {
    const scrollPosition = scrollRef.current.scrollTop; 
    setSelectedRecipe(null);
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollPosition;
      }
    }, 100);
  };
  

  const filteredRecipes = activeCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === activeCategory);    
    
  return (
    <div className="body">
      <div className="container1" id="content1" ref={scrollRef}>
        <div className="menu" id="menu">
          <div className="heading">
            <h3>&mdash; Explore Recipes &mdash;</h3>
          </div>
        </div>

        <div className="buttons">
          {['all', 'beverages', 'remedies', 'sauces', 'desserts'].map(category => (
            <button 
              key={category} 
              type="button" 
              className={activeCategory === category ? 'active' : ''} 
              onClick={() => handleCategoryClick(category)}
              data-category={category}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="recipe-cards">
        {filteredRecipes.map((recipe, index) => (
          <div className="recipe-card" key={index} data-category={recipe.category}>
            <img src={recipe.img} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <a href="#" onClick={(event) => handleViewRecipeClick(recipe, event)}>View Recipe</a>
          </div>
        ))}
      </div>

      </div>

      <RecipeModal 
        isOpen={!!selectedRecipe} 
        onClose={handleCloseModal} 
        recipe={selectedRecipe} 
      />
    </div>
  );
}

export default RecipePage;