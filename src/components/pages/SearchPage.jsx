import React from 'react';

const SearchPage = () => {
  return (
    <>
      <div className="page-title uk-section uk-section-small uk-section-default">
        <div className="uk-container">
          <h3 className="uk-heading-line uk-text-center uk-text-left@m">
            <span>Search</span>
          </h3>
        </div>
      </div>
      <div className="uk-container">
        <div className="uk-grid-large uk-grid">
          <div className="uk-width-expand@m">
            <div className="uk-grid-medium uk-grid">
              <div className="uk-width-auto uk-width-expand@s uk-flex uk-flex-middle uk-first-column">
                <div className="tas-listing-title">
                  <h5 className="uk-margin-remove">9 Total Recipes</h5>
                </div>
              </div>
              <div className="uk-width-expand uk-width-1-2@s uk-width-1-4@l">
                <div className="uk-grid-small uk-grid">
                  <div className="uk-width-expand">
                    <select
                      className="tas-order-by nc-select wide uk-form-large uk-border-rounded"
                      id="sortby"
                    >
                      <option value="default">Default</option>
                      <option value="date-desc">Date New to Old</option>
                      <option value="date-asc">Date Old to New</option>
                      <option value="best-rated">Best Rated</option>
                    </select>
                  </div>

                  <div className="uk-width-auto">
                    <a
                      className="uk-button uk-button-primary uk-border-rounded uk-form-large"
                      type="button"
                      uk-toggle="target: #search-form; animation: uk-animation-fade"
                    >
                      <i className="ti ti-chevron-down uk-padding-small"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="uk-width-1-1" id="search-form" hidden>
                <form
                  className="uk-grid-small"
                  method="get"
                  action="search.html"
                  id="searchForm"
                  uk-grid
                >
                  <div className="uk-width-1-1 uk-width-expand@s">
                    <input
                      className="uk-input uk-form-large uk-border-rounded uk-width-1-1"
                      name="query"
                      value=""
                      placeholder="Find a recipe..."
                      type="text"
                    />
                  </div>

                  <div className="uk-width-1-1 uk-width-expand@s">
                    <select
                      className="nc-select wide uk-form-large uk-border-rounded"
                      name="category"
                    >
                      <option selected value>
                        {' '}
                        Any{' '}
                      </option>
                      <option value="2">Desserts</option>
                      <option value="3">Smoothies</option>
                      <option value="4">Pizza</option>
                      <option value="5">Pasta</option>
                      <option value="6">Burger</option>
                      <option value="7">Breakfast</option>
                      <option value="8">Vegan</option>
                    </select>
                  </div>

                  <div className="uk-width-1-1 uk-width-auto@s">
                    <button
                      className="uk-button uk-button-large uk-button-default uk-border-rounded uk-width-1-1"
                      value="Search"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div
              className="uk-grid-match uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-3@l    uk-grid"
              uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100"
            >
              <div className="tas_card_1">
                <div className="uk-card uk-card-default uk-border-rounded">
                  <a href="recipe/1/mighty-super-cheesecake.html">
                    <div className="uk-card-media-top uk-cover-container">
                      <img
                        src="images/recipe_1618205715.jpg"
                        alt="Mighty Super Cheesecake"
                        uk-cover
                      />
                      <canvas width="600" height="300"></canvas>
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
                      <canvas width="600" height="300"></canvas>
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
                      <canvas width="600" height="300"></canvas>
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
                      <canvas width="600" height="300"></canvas>
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
                      <canvas width="600" height="300"></canvas>
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
                      <canvas width="600" height="300"></canvas>
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
              <div className="tas_card_1">
                <div className="uk-card uk-card-default uk-border-rounded">
                  <a href="recipe/8/crispy-burger-with-blue-cheese.html">
                    <div className="uk-card-media-top uk-cover-container">
                      <img
                        src="images/recipe_1620060348.jpg"
                        alt="Crispy Burger with Blue Cheese"
                        uk-cover
                      />
                      <canvas width="600" height="300"></canvas>
                    </div>
                  </a>
                  <div className="uk-card-body">
                    <div className="uk-card-badge uk-label">Burger</div>

                    <div className="tas_rating">
                      <img src="assets/img/like.svg" />
                      <span>2</span>
                    </div>

                    <a
                      className="uk-card-title"
                      href="recipe/8/crispy-burger-with-blue-cheese.html"
                    >
                      Crispy Burger with Blue Cheese
                    </a>

                    <ul className="uk-subnav" uk-margin>
                      <li>
                        <span>
                          <i className="tas_icon ti ti-users"></i> 4 Serv.
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="tas_icon ti ti-clock"></i> 30 Min
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tas_card_1">
                <div className="uk-card uk-card-default uk-border-rounded">
                  <a href="recipe/9/tasty-croissant-and-tea.html">
                    <div className="uk-card-media-top uk-cover-container">
                      <img
                        src="images/recipe_1620061168.jpg"
                        alt="Tasty croissant and tea"
                        uk-cover
                      />
                      <canvas width="600" height="300"></canvas>
                    </div>
                  </a>
                  <div className="uk-card-body">
                    <div className="uk-card-badge uk-label">Breakfast</div>

                    <div className="tas_rating">
                      <img src="assets/img/like.svg" />
                      <span>2</span>
                    </div>

                    <a
                      className="uk-card-title"
                      href="recipe/9/tasty-croissant-and-tea.html"
                    >
                      Tasty croissant and tea
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
                  <a href="recipe/10/blueberries-and-cream-almond-oatmeal.html">
                    <div className="uk-card-media-top uk-cover-container">
                      <img
                        src="images/recipe_1620061767.jpg"
                        alt="Blueberries and Cream almond"
                        uk-cover
                      />
                      <canvas width="600" height="300"></canvas>
                    </div>
                  </a>
                  <div className="uk-card-body">
                    <div className="uk-card-badge uk-label">Breakfast</div>

                    <div className="tas_rating">
                      <img src="assets/img/like.svg" />
                      <span>2</span>
                    </div>

                    <a
                      className="uk-card-title"
                      href="recipe/10/blueberries-and-cream-almond-oatmeal.html"
                    >
                      Blueberries and Cream almond
                    </a>

                    <ul className="uk-subnav" uk-margin>
                      <li>
                        <span>
                          <i className="tas_icon ti ti-users"></i> 2 Serv.
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="tas_icon ti ti-clock"></i> 8 Min
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-margin-large-top"></div>

            <p className="uk-text-small uk-text-muted">Page 1 - 1</p>

            <hr />

            <div className="tas-pagination uk-margin-top">
              <ul className="uk-pagination uk-flex-center" uk-margin>
                <li className="uk-active">
                  <span>1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
