import React from 'react';

const FeaturedCategories = () => {
  return (
    <div
      className="uk-container uk-margin-top"
      uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100"
    >
      <h2 className="tas_heading uk-heading-line uk-text-center">
        <span>Featured Categories</span>
      </h2>

      <div uk-slider="finite: true">
        <div className="uk-position-relative uk-visible-toggle" tabindex="-1">
          <ul
            className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-6@l uk-grid-large"
            uk-grid
          >
            <li>
              <a href="search%3Fcategory=2.html">
                <div className="tas_card_3">
                  <div className="uk-cover-container">
                    <img
                      src="images/category_1618205843.jpg"
                      alt="Desserts"
                      uk-cover
                    />
                  </div>
                  <h5 className="card-title">Desserts</h5>
                  <p>2 Recipes</p>
                </div>
              </a>
            </li>

            <li>
              <a href="search%3Fcategory=3.html">
                <div className="tas_card_3">
                  <div className="uk-cover-container">
                    <img
                      src="images/category_1620054252.jpg"
                      alt="Smoothies"
                      uk-cover
                    />
                  </div>
                  <h5 className="card-title">Smoothies</h5>
                  <p>1 Recipes</p>
                </div>
              </a>
            </li>

            <li>
              <a href="search%3Fcategory=4.html">
                <div className="tas_card_3">
                  <div className="uk-cover-container">
                    <img
                      src="images/category_1620054496.jpg"
                      alt="Pizza"
                      uk-cover
                    />
                  </div>
                  <h5 className="card-title">Pizza</h5>
                  <p>1 Recipes</p>
                </div>
              </a>
            </li>

            <li>
              <a href="search%3Fcategory=5.html">
                <div className="tas_card_3">
                  <div className="uk-cover-container">
                    <img
                      src="images/category_1620054659.jpg"
                      alt="Pasta"
                      uk-cover
                    />
                  </div>
                  <h5 className="card-title">Pasta</h5>
                  <p>1 Recipes</p>
                </div>
              </a>
            </li>

            <li>
              <a href="search%3Fcategory=6.html">
                <div className="tas_card_3">
                  <div className="uk-cover-container">
                    <img
                      src="images/category_1620054798.jpg"
                      alt="Burger"
                      uk-cover
                    />
                  </div>
                  <h5 className="card-title">Burger</h5>
                  <p>1 Recipes</p>
                </div>
              </a>
            </li>

            <li>
              <a href="search%3Fcategory=7.html">
                <div className="tas_card_3">
                  <div className="uk-cover-container">
                    <img
                      src="images/category_1620054842.jpg"
                      alt="Breakfast"
                      uk-cover
                    />
                  </div>
                  <h5 className="card-title">Breakfast</h5>
                  <p>2 Recipes</p>
                </div>
              </a>
            </li>

            <li>
              <a href="search%3Fcategory=8.html">
                <div className="tas_card_3">
                  <div className="uk-cover-container">
                    <img
                      src="images/category_1620055458.jpg"
                      alt="Vegan"
                      uk-cover
                    />
                  </div>
                  <h5 className="card-title">Vegan</h5>
                  <p>1 Recipes</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <ul className="tas_dotnav uk-slider-nav uk-dotnav uk-flex-center uk-margin-large-top uk-margin-medium-bottom"></ul>
      </div>
    </div>
  );
};

export default FeaturedCategories;
