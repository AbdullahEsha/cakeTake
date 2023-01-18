import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div
        className="uk-container uk-margin-top"
        uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100"
      >
        <h2 className="tas_heading uk-heading-line uk-text-center">
          <span>LOGIN</span>
        </h2>

        <div className="uk-container">
          <div className="tas-widgets uk-grid-large uk-grid">
            <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-2@m">
              img
            </div>
            <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-2@m">
              <div className="new-subscriber">
                <form>
                  <h4 className="tas-title">Email</h4>
                  <div className="uk-inline uk-width-1-1">
                    <i className="ti ti-at uk-form-icon"></i>
                    <input
                      type="email"
                      id="subscriber_email"
                      name="subscriber_email"
                      className="uk-input uk-width-1-1 uk-form-large uk-border-pill"
                      placeholder="Email Address"
                    />
                  </div>
                  <h4 className="tas-title">Email</h4>
                  <div className="uk-inline uk-width-1-1">
                    <i className="ti ti-at uk-form-icon"></i>
                    <input
                      type="email"
                      id="subscriber_email"
                      name="subscriber_email"
                      className="uk-input uk-width-1-1 uk-form-large uk-border-pill"
                      placeholder="Email Address"
                    />
                  </div>
                  <h4 className="tas-title">Email</h4>
                  <div className="uk-inline uk-width-1-1">
                    <i className="ti ti-at uk-form-icon"></i>
                    <input
                      type="email"
                      id="subscriber_email"
                      name="subscriber_email"
                      className="uk-input uk-width-1-1 uk-form-large uk-border-pill"
                      placeholder="Email Address"
                    />
                  </div>
                  <h4 className="tas-title">Password</h4>
                  <div className="uk-inline uk-width-1-1">
                    <i className="ti ti-at uk-form-icon"></i>
                    <input
                      type="password"
                      id="subscriber_email"
                      name="subscriber_email"
                      className="uk-input uk-width-1-1 uk-form-large uk-border-pill"
                      placeholder="Password"
                    />
                  </div>
                  <br />
                  <br />
                  <button
                    className="uk-button uk-width-1-1 uk-button-large uk-button-primary uk-border-pill uk-margin-small-top"
                    value="Sign Up"
                    type="submit"
                    id="submit-subscriber"
                  >
                    Sign Up
                  </button>
                  <Link
                    className="uk-button uk-width-1-1 uk-button-large uk-button-primary uk-border-pill uk-margin-small-top"
                    value="Suscribe Now"
                    type="submit"
                    id="submit-subscriber"
                    to="/login"
                  >
                    Login
                  </Link>
                  <div id="showresults"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
