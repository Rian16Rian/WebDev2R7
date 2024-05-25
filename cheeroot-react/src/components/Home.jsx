import React from 'react';

function Home() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Fresh Herbs</h3>
        <span>Natural & Nutritious</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        <a href="recipe.html" className="btn">
          <b>Explore Now</b>
        </a>
      </div>
    </section>
  );
}

export default Home;
