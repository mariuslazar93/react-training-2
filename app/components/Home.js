var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var MainWrapper = require('./MainWrapper');

var Home = React.createClass({
    render: function(){
        return (
            <MainWrapper>
                <h1 className="spacer-bottom">Github Battle</h1>
                <p className="lead">Start a new battle</p>
                <Link to='/playerOne'>
                    <button type="button" className="btn btn-lg btn-success">Get started</button>
                </Link>
            </MainWrapper>
        );
    }
});

module.exports = Home;
