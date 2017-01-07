var React = require('react');

var Loading = React.createClass({
    propTypes: {
        text: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            text: "Just a second..."
        }
    },
    render: function(){
        return (
            <div className="loading">
                <h1 className="loading-content">{this.props.text}</h1>
            </div>
        )
    }
});

module.exports = Loading;
