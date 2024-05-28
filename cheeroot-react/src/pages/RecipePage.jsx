import React, { useState } from 'react';
import beverages1 from '../assets/IMG/beverages1.jpg';
import remedies1 from '../assets/IMG/remedies1.jpg';
import beverages2 from '../assets/IMG/beverages2.jpg';
import sauces1 from '../assets/IMG/sauces1.jpeg';
import dessert1 from '../assets/IMG/dessert1.jpg';
import dessert2 from '../assets/IMG/dessert2.jpg';
import sauces2 from '../assets/IMG/sauces2.jpg';
import remedies2 from '../assets/IMG/remedies2.jpg';
import dessert3 from '../assets/IMG/dessert3.jpg';
import recipeHeaderVid from '../assets/IMG/VIDS/RECIPE-HEADER-VID.mp4';
import '../css/recipe.css';

const recipes = [
  {
    category: 'beverages',
    img: beverages1,
    title: 'Peppermint Tea',
    description: 'Ability to aid digestion, relieve bloating and gas, alleviate nausea, and promote relaxation.',
  },
  {
    category: 'remedies',
    img: remedies1,
    title: 'Arnica Salve',
    description: 'Arnica is used topically for pain relief, reducing inflammation, and healing bruises.',
  },
  {
    category: 'beverages',
    img: beverages2,
    title: 'Hibiscus Iced Tea',
    description: 'It is rich in antioxidants and may help lower blood pressure and cholesterol levels.',
  },
  {
    category: 'sauces',
    img: sauces1,
    title: 'Rosemary Balsamic Vinaigrette',
    description: 'Rosemary is rich in antioxidants and has anti-inflammatory properties.',
  },
  {
    category: 'desserts',
    img: dessert1,
    title: 'Rose Petal Jam',
    description: 'Rose petals are rich in antioxidants and add a delicate flavor to jams.',
  },
  {
    category: 'desserts',
    img: dessert2,
    title: 'Ginger Turmeric Coconut Milk Popsicles',
    description: 'Ginger and turmeric have anti-inflammatory properties, while coconut milk adds creaminess.',
  },
  {
    category: 'sauces',
    img: sauces2,
    title: 'Mint Yogurt Sauce',
    description: 'Mint aids digestion and adds a refreshing flavor to dishes.',
  },
  {
    category: 'remedies',
    img: remedies2,
    title: 'Echinacea Tincture',
    description: 'Echinacea is commonly used to boost the immune system and shorten the duration of colds and flu.',
  },
  {
    category: 'desserts',
    img: dessert3,
    title: 'Lavender Shortbread Cookies',
    description: 'Lavender has calming properties and adds a floral flavor to desserts.',
  },
];

function RecipePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredRecipes = activeCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === activeCategory);

  return (
    <div className="body">
      <div className="container1" id="content1">
        <video autoPlay loop muted playsInline className="background-clip">
          <source src={recipeHeaderVid} type="video/mp4" />
        </video>

        {/* Content */}
        <div className="content1">
          <h1>Herbalicious</h1>
          <p>Elevate Your Journey with Fresh Flavors and Timeless Traditions</p>
          <a href="#menu">Explore Now</a>
        </div>

        {/* Menu */}
        <div className="menu" id="menu">
          <div className="heading">
            <h1>Cheeroot's Recipes</h1>
            <h3>&mdash; CATEGORIES &mdash;</h3>
          </div>
        </div>

        {/* Category buttons */}
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

        {/* Recipe Cards */}
        <div className="recipe-cards">
          {filteredRecipes.map((recipe, index) => (
            <div className="recipe-card" key={index} data-category={recipe.category}>
              <img src={recipe.img} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <a href="#">View Recipe</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
