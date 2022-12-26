import React from 'react';

const ShopPage = () => {
  return (
    <div
      className="uk-container uk-margin-top"
      uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100"
    >
      <h2 className="tas_heading uk-heading-line uk-text-center">
        <span>SHOP</span>
      </h2>

      <div className="uk-grid-match uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-3@l uk-grid">
        <div className="tas_card_1">
          <div className="uk-card uk-card-default uk-border-rounded">
            <a href="recipe/1/mighty-super-cheesecake.html">
              <div className="uk-card-media-top uk-cover-container">
                <img
                  src="images/recipe_1618205715.jpg"
                  alt="Mighty Super Cheesecake"
                  uk-cover
                />
              </div>
            </a>
            <div className="uk-card-body">
              <div className="uk-card-badge uk-label">Desserts</div>

              <div className="tas_rating">
                <img src="assets/img/like.svg" />
                <span>12</span>
              </div>

              <a
                className="uk-card-title"
                href="recipe/1/mighty-super-cheesecake.html"
              >
                Mighty Super Cheesecake
              </a>

              <ul className="uk-subnav" uk-margin>
                <li>
                  <span>
                    <i className="tas_icon ti ti-users"></i> 4 Serv.
                  </span>
                </li>
                <li>
                  <span>
                    <i className="tas_icon ti ti-clock"></i> 45 Min
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tas_card_1">
          <div className="uk-card uk-card-default uk-border-rounded">
            <a href="recipe/2/broad-beans-tomato-garlic-mozzarella-cheese-bruschetta.html">
              <div className="uk-card-media-top uk-cover-container">
                <img
                  src="images/recipe_1620056120.jpg"
                  alt="Mozzarella Cheese Bruschetta"
                  uk-cover
                />
              </div>
            </a>
            <div className="uk-card-body">
              <div className="uk-card-badge uk-label">Pasta</div>

              <div className="tas_rating">
                <img src="assets/img/like.svg" />
                <span>1</span>
              </div>

              <a
                className="uk-card-title"
                href="recipe/2/broad-beans-tomato-garlic-mozzarella-cheese-bruschetta.html"
              >
                Mozzarella Cheese Bruschetta
              </a>

              <ul className="uk-subnav" uk-margin>
                <li>
                  <span>
                    <i className="tas_icon ti ti-users"></i> 2 Serv.
                  </span>
                </li>
                <li>
                  <span>
                    <i className="tas_icon ti ti-clock"></i> 5 Min
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tas_card_1">
          <div className="uk-card uk-card-default uk-border-rounded">
            <a href="recipe/3/spinach-and-cheese-pasta.html">
              <div className="uk-card-media-top uk-cover-container">
                <img
                  src="images/recipe_1619359174.jpg"
                  alt="Spinach and Cheese Pasta"
                  uk-cover
                />
              </div>
            </a>
            <div className="uk-card-body">
              <div className="uk-card-badge uk-label">Vegan</div>

              <div className="tas_rating">
                <img src="assets/img/like.svg" />
                <span>5</span>
              </div>

              <a
                className="uk-card-title"
                href="recipe/3/spinach-and-cheese-pasta.html"
              >
                Spinach and Cheese Pasta
              </a>

              <ul className="uk-subnav" uk-margin>
                <li>
                  <span>
                    <i className="tas_icon ti ti-users"></i> 4 Serv.
                  </span>
                </li>
                <li>
                  <span>
                    <i className="tas_icon ti ti-clock"></i> 15 Min
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tas_card_1">
          <div className="uk-card uk-card-default uk-border-rounded">
            <a href="recipe/5/brownies-with-walnuts.html">
              <div className="uk-card-media-top uk-cover-container">
                <img
                  src="images/recipe_1620058937.jpg"
                  alt="Brownies with Walnuts"
                  uk-cover
                />
              </div>
            </a>
            <div className="uk-card-body">
              <div className="uk-card-badge uk-label">Desserts</div>

              <div className="tas_rating">
                <img src="assets/img/like.svg" />
                <span>2</span>
              </div>

              <a
                className="uk-card-title"
                href="recipe/5/brownies-with-walnuts.html"
              >
                Brownies with Walnuts
              </a>

              <ul className="uk-subnav" uk-margin>
                <li>
                  <span>
                    <i className="tas_icon ti ti-users"></i> 3 Serv.
                  </span>
                </li>
                <li>
                  <span>
                    <i className="tas_icon ti ti-clock"></i> 25 Min
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tas_card_1">
          <div className="uk-card uk-card-default uk-border-rounded">
            <a href="recipe/6/berries-and-banana-smoothie.html">
              <div className="uk-card-media-top uk-cover-container">
                <img
                  src="images/recipe_1620059598.jpg"
                  alt="Berries and Banana Smoothie"
                  uk-cover
                />
              </div>
            </a>
            <div className="uk-card-body">
              <div className="uk-card-badge uk-label">Smoothies</div>

              <div className="tas_rating">
                <img src="assets/img/like.svg" />
                <span>2</span>
              </div>

              <a
                className="uk-card-title"
                href="recipe/6/berries-and-banana-smoothie.html"
              >
                Berries and Banana Smoothie
              </a>

              <ul className="uk-subnav" uk-margin>
                <li>
                  <span>
                    <i className="tas_icon ti ti-users"></i> 1 Serv.
                  </span>
                </li>
                <li>
                  <span>
                    <i className="tas_icon ti ti-clock"></i> 5 Min
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tas_card_1">
          <div className="uk-card uk-card-default uk-border-rounded">
            <a href="recipe/7/how-to-make-fast-margherita-pizza.html">
              <div className="uk-card-media-top uk-cover-container">
                <img
                  src="images/recipe_1620060146.jpg"
                  alt="How to make fast margherita pizza"
                  uk-cover
                />
              </div>
            </a>
            <div className="uk-card-body">
              <div className="uk-card-badge uk-label">Pizza</div>

              <div className="tas_rating">
                <img src="assets/img/like.svg" />
                <span>7</span>
              </div>

              <a
                className="uk-card-title"
                href="recipe/7/how-to-make-fast-margherita-pizza.html"
              >
                How to make fast margherita pizza
              </a>

              <ul className="uk-subnav" uk-margin>
                <li>
                  <span>
                    <i className="tas_icon ti ti-users"></i> 4 Serv.
                  </span>
                </li>
                <li>
                  <span>
                    <i className="tas_icon ti ti-clock"></i> 45 Min
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
