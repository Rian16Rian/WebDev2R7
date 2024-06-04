import React from 'react';
import card1 from '../assets/IMG/onion-syrup.webp';
import card2 from '../assets/IMG/ginger-lemon-syrup.webp';
import card3 from '../assets/IMG/Moringa Smoothie.webp';
import card4 from '../assets/IMG/turmeric-milk.webp';
import card5 from '../assets/IMG/Lemon_Lavander.webp';
import card6 from '../assets/IMG/balsamic-vinegar.webp';
import card7 from '../assets/IMG/mint-mojito.webp';
import card8 from '../assets/IMG/potatoes.webp';

const Container = () => {
  return (
    <div className="container">
      <h1>Herb Benefits</h1>
      <div className="card_container">
        {/* Card 1 */}
        <article className="card_article">
          <img src={card1} alt="Red Onion Syrup" className="card_img" />
          <div className="card_data">
            <span className="card_description">
              Making red onion syrup can provide various benefits, including its potential to soothe coughs and sore throats due to its natural antibacterial properties, and it may also offer relief from respiratory congestion.
            </span>
            <h2 className="card_title">Red Onion Syrup</h2>
          </div>
        </article>

        {/* Card 2 */}
        <article className="card_article">
          <img src={card2} alt="Ginger Lemon Syrup" className="card_img" />
          <div className="card_data">
            <span className="card_description">
              Ginger lemon syrup combines the antibacterial properties of ginger with the vitamin C-rich lemon to potentially soothe sore throats, alleviate nausea, aid digestion, and boost the immune system.
            </span>
            <h2 className="card_title">Ginger Lemon Syrup</h2>
          </div>
        </article>
  
         {/* Card 3 */}
         <article className="card_article">
          <img src={card3} alt="Moringa Smoothie" className="card_img" />
          <div className="card_data">
            <span className="card_description">
              A Moringa smoothie offers a powerhouse of nutrients, including vitamins, minerals, and antioxidants, supporting immune function, improving energy levels, and promoting overall health and vitality.
            </span>
            <h2 className="card_title">Moringa Smoothie</h2>
          </div>
        </article>
  
        {/* Card 4 */}
        <article className="card_article">
          <img src={card4} alt="Turmeric Milk" className="card_img" />
          <div className="card_data">
            <span className="card_description">
              Turmeric milk, also known as "golden milk," offers a potent blend of anti-inflammatory compounds and antioxidants from turmeric, providing potential relief from joint pain, promoting digestion, supporting immune function, and aiding in relaxation and better sleep.
            </span>
            <h2 className="card_title">Turmeric Milk</h2>
          </div>
        </article>
  
        {/* Card 5 */}
         <article className="card_article">
          <img src={card5} alt="Lemon Lavender Shortbread Cookies" className="card_img" />
          <div className="card_data">
            <span className="card_description">
              Delicate shortbread cookies infused with dried lavender and lemon zest offer a calming aroma and potential stress-relieving properties.
            </span>
            <h2 className="card_title">Lemon Lavender Shortbread Cookies</h2>
          </div>
        </article>

      {/* Card 6 */}
      <article className="card_article">
        <img src={card6} alt="Balsamic Vinegar" className="card_img" />
        <div className="card_data">
          <span className="card_description">
            Balsamic vinegar contains antioxidants, supports heart health, and may help regulate blood sugar levels.
          </span>
          <h2 className="card_title">Balsamic Vinegar</h2>
        </div>
      </article>

      {/* Card 7 */}
      <article className="card_article">
        <img src={card7} alt="Mint Mojito" className="card_img" />
        <div className="card_data">
          <span className="card_description">
            Savor a classic mojito with a herbal twist from fresh mint leaves, offering digestive relief and a cooling sensation.
          </span>
          <h2 className="card_title">Mint Mojito</h2>
        </div>
      </article>

      {/* Card 8 */}
      <article className="card_article">
        <img src={card8} alt="Roasted Potatoes with Rosemary" className="card_img" />
        <div className="card_data">
          <span className="card_description">
            Comforting and aromatic, roasted potatoes with rosemary not only make a delicious side dish but also provide potential cognitive and digestive benefits from the rosemary.
          </span>
          <h2 className="card_title">Roasted Potatoes with Rosemary</h2>
        </div>
      </article>
      </div>
    </div>
  );
}

export default Container;
