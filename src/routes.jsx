var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var Base = require('./components/base.jsx');
var page1 = require('./components/page1.jsx');
var page2 = require('./components/page2.jsx');

module.exports = (
    <Router history = {hashHistory}>
      <Route path='/' component={Base}>
          <Route path='/page1' component={page1} />
          <Route path='/page2' component={page2} />
      </Route>
    </Router>
);
