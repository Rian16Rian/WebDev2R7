import React from 'react';
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

function RecipePage() {
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
        <button type="button" className="active" data-category="all">All</button>
        <button type="button" data-category="beverages">Beverages</button>
        <button type="button" data-category="remedies">Remedies</button>
        <button type="button" data-category="sauces">Sauces & Dressings</button>
        <button type="button" data-category="desserts">Desserts</button>
      </div>

      {/* Recipe Cards */}
      <div className="recipe-cards">

        {/* Card 1 */}
        <div className="recipe-card" data-category="beverages">
          <img src={beverages1} alt="Peppermint Tea" />
          <h3>Peppermint Tea</h3>
          <p>Ability to aid digestion, relieve bloating and gas, alleviate nausea, and promote relaxation.</p>
          <a href="#">View Recipe</a>
        </div>

        {/* Card 2 */}
        <div className="recipe-card" data-category="remedies">
          <img src={remedies1} alt="Arnica Salve" />
          <h3>Arnica Salve</h3>
          <p>Arnica is used topically for pain relief, reducing inflammation, and healing bruises.</p>
          <a href="#">View Recipe</a>
        </div>

        {/* Card 3 */}
        <div className="recipe-card" data-category="beverages">
          <img src={beverages2} alt="Hibiscus Iced Tea" />
          <h3>Hibiscus Iced Tea</h3>
          <p>It is rich in antioxidants and may help lower blood pressure and cholesterol levels.</p>
          <a href="#">View Recipe</a>
        </div>

        {/* Card 4 */}
        <div className="recipe-card" data-category="sauces">
          <img src={sauces1} alt="Rosemary Balsamic Vinaigrette" />
          <h3>Rosemary Balsamic Vinaigrette</h3>
          <p>Rosemary is rich in antioxidants and has anti-inflammatory properties.</p>
          <a href="#">View Recipe</a>
        </div>

        {/* Card 5 */}
        <div className="recipe-card" data-category="desserts">
          <img src={dessert1} alt="Rose Petal Jam" />
          <h3>Rose Petal Jam</h3>
          <p>Rose petals are rich in antioxidants and add a delicate flavor to jams.</p>
          <a href="#">View Recipe</a>
        </div>

        {/* Card 6 */}
        <div className="recipe-card" data-category="desserts">
          <img src={dessert2} alt="Ginger Turmeric Coconut Milk Popsicles" />
          <h3>Ginger Turmeric Coconut Milk Popsicles</h3>
          <p>Ginger and turmeric have anti-inflammatory properties, while coconut milk adds creaminess.</p>
          <a href="#">View Recipe</a>
        </div>

        {/* Card 7 */}
        <div className="recipe-card"  data-category="sauces">
          <img src={sauces2} alt="Mint Yogurt Sauce" />
          <h3>Mint Yogurt Sauce</h3>
          <p>Mint aids digestion and adds a refreshing flavor to dishes.</p>
          <a href="#">View Recipe</a>
        </div>

        {/* Card 8 */}
        <div className="recipe-card" data-category="remedies">
          <img src={remedies2} alt="Echinacea Tincture" />
          <h3>Echinacea Tincture</h3>
          <p>Echinacea is commonly used to boost the immune system and shorten the duration of colds and flu.</p>
          <a href="#">View Recipe</a>
        </div>

        {/* Card 9 */}
        <div className="recipe-card" data-category="desserts">
          <img src={dessert3} alt="Lavender Shortbread Cookies" />
          <h3>Lavender Shortbread Cookies</h3>
          <p>Lavender has calming properties and adds a floral flavor to desserts.</p>
          <a href="#">View Recipe</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default RecipePage;

