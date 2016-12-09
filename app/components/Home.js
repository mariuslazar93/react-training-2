var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron col-sm-12 text-center">
                <h1 className="spacer-bottom">Github Battle</h1>
                <p className="lead">Start a new battle</p>
                <Link to='/playerOne'>
                    <button type="button" className="btn btn-lg btn-success">Get started</button>
                </Link>
            </div>
        );
    }
});

module.exports = Home;
