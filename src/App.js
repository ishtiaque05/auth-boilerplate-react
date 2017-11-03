import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Homepage from "./components/pages/Homepage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNavigation from "./components/navigation/TopNavigation";

const App = ({ location, isAuthenticated }) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigation />}
    <Route 
      location={ location } 
      path="/" 
      exact 
      component={ Homepage } 
    />
   <GuestRoute 
      location={ location } 
      path="/login" 
      exact 
      component={ LoginPage } 
    />
    <GuestRoute 
      location={ location } 
      path="/signup" 
      exact 
      component={ SignupPage } 
    />
    <UserRoute 
      location={ location } 
      path="/dashboard" 
      exact 
      component={ DashboardPage } 
    />

  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return {
    isAuthenticated: !!state.user.email
  }
}
export default connect(mapStateToProps)(App);
